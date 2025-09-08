import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;
  
  console.log("getChats - tokenUserId:", tokenUserId);

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    console.log("Found chats:", chats.length);

    for (const chat of chats) {
      const receiverId = chat.userIDs.find((id) => id !== tokenUserId);

      if (!receiverId) {
        chat.receiver = { id: "", username: "Unknown", avatar: "" };
        continue;
      }

      const receiver = await prisma.user.findUnique({
        where: {
          id: receiverId,
        },
        select: {
          id: true,
          username: true,
          avatar: true,
        },
      });

      chat.receiver = receiver || { id: "", username: "Unknown", avatar: "" };
    }

    console.log("Processed chats:", chats);
    res.status(200).json(chats);
  } catch (err) {
    console.log("Error in getChats:", err);
    res.status(500).json({ message: "Failed to get chats!" });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    await prisma.chat.update({
      where: {
        id: req.params.id,
      },
      data: {
        seenBy: {
          push: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  const receiverId = req.body.receiverId;
  
  console.log("addChat - tokenUserId:", tokenUserId);
  console.log("addChat - receiverId:", receiverId);
  
  // Validate receiverId
  if (!receiverId) {
    return res.status(400).json({ message: "Receiver ID is required!" });
  }
  
  if (tokenUserId === receiverId) {
    return res.status(400).json({ message: "Cannot create chat with yourself!" });
  }
  
  try {
    // Check if chat already exists between these two users
    const existingChat = await prisma.chat.findFirst({
      where: {
        userIDs: {
          hasEvery: [tokenUserId, receiverId],
        },
      },
    });

    if (existingChat) {
      console.log("Existing chat found:", existingChat.id);
      return res.status(200).json(existingChat);
    }

    // Create new chat if it doesn't exist
    const newChat = await prisma.chat.create({
      data: {
        userIDs: [tokenUserId, receiverId],
        seenBy: [tokenUserId], // Current user has seen the chat
      },
    });
    
    console.log("New chat created:", newChat.id);
    res.status(200).json(newChat);
  } catch (err) {
    console.log("Error creating chat:", err);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      data: {
        seenBy: {
          set: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};
