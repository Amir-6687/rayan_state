import { useState, useEffect, useMemo } from "react";
import "./editPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import CloudinaryUploadWidget from "../../components/uploadWidget/uploadWidget";
import { useNavigate, useParams } from "react-router-dom";

function EditPostPage() {
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bedroom: "",
  });
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await apiRequest.get(`/posts/${id}`);
        const post = res.data;
        setFormData({
          title: post.title || "",
          price: post.price || "",
          address: post.address || "",
          city: post.city || "",
          bedroom: post.bedroom || "",
        });
        setValue(post.postDetail?.desc || "");
        setImages(post.images || []);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchPost();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Debug: Log images state changes
  useEffect(() => {
    console.log("Images state updated:", images);
  }, [images]);

  // Memoize uwConfig to prevent re-initialization
  const uwConfig = useMemo(
    () => ({
      multiple: true,
      cloudName: "dm7su2dhx",
      uploadPreset: "amirestate",
      folder: "posts",
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const postData = {
        ...formData,
        images,
      };

      const postDetail = {
        desc: value,
      };

      const res = await apiRequest.put(`/posts/${id}`, {
        postData,
        postDetail,
      });

      if (res.status === 200) {
        navigate(`/post/${id}`);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("آیا مطمئن هستید که می‌خواهید این آگهی را حذف کنید؟")) {
      try {
        setLoading(true);
        setError(false);

        const res = await apiRequest.delete(`/posts/${id}`);

        if (res.status === 200) {
          navigate("/list");
        }
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading)
    return (
      <div className="editPostPage">
        <div className="formContainer">
          <div className="loading">
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>⏳</div>
            Loading post data...
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="editPostPage">
        <div className="formContainer">
          <div className="error">
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>❌</div>
            Something went wrong! Please try again.
          </div>
        </div>
      </div>
    );

  return (
    <div className="editPostPage">
      <div className="formContainer">
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter property title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              placeholder="Enter price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="Enter address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              placeholder="Enter city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bedroom">Bedroom Number</label>
            <input
              id="bedroom"
              type="number"
              placeholder="Enter bedroom count"
              name="bedroom"
              value={formData.bedroom}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <div className="editor">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Enter property description"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Images</label>
            <div className="images">
              {images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt="post"
                  onClick={() => {
                    setImages(images.filter((_, i) => i !== index));
                  }}
                  title="Click to remove"
                />
              ))}
            </div>
            <div className="upload-section">
              <CloudinaryUploadWidget
                uwConfig={uwConfig}
                setState={setImages}
                state={images}
              />
            </div>
          </div>
          <div className="buttons">
            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Post"}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="delete-btn"
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete Post"}
            </button>
          </div>
          {error && <span className="error">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default EditPostPage;
