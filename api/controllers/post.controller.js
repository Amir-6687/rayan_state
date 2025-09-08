import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 1000000,
        },
      },
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    // }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookies?.token;

    if (token) {
      return jwt.verify(
        token,
        process.env.JWT_SECRET_KEY,
        async (err, payload) => {
          if (err) {
            return res.status(200).json({ ...post, isSaved: false });
          }

          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });

          return res.status(200).json({ ...post, isSaved: !!saved });
        }
      );
    }

    return res.status(200).json({ ...post, isSaved: false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create post" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  console.log("Delete post request:", { id, tokenUserId });

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    console.log("Found post:", post);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.userId !== tokenUserId) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this post" });
    }

    // Delete related records first, then post
    console.log("Deleting saved posts...");
    await prisma.savedPost.deleteMany({
      where: { postId: id },
    });

    console.log("Deleting postDetail...");
    await prisma.postDetail.deleteMany({
      where: { postId: id },
    });

    console.log("Deleting post...");
    await prisma.post.delete({
      where: { id },
    });

    console.log("Post deleted successfully");
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.log("Error deleting post:", err);
    res.status(500).json({ error: "Failed to delete post" });
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { postData, postDetail } = req.body;

  try {
    // Check if post exists and belongs to user
    const post = await prisma.post.findUnique({
      where: { id },
      include: { postDetail: true },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.userId !== tokenUserId) {
      return res
        .status(403)
        .json({ error: "Not authorized to update this post" });
    }

    // Update post
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        ...postData,
        postDetail: {
          update: {
            ...postDetail,
          },
        },
      },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update post" });
  }
};
