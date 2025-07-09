import { useEffect, useRef } from "react";

const CloudinaryUploadWidget = ({ uwConfig, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    const initializeUploadWidget = () => {
      if (window.cloudinary && uploadButtonRef.current) {
        uploadWidgetRef.current = window.cloudinary.createUploadWidget(
          uwConfig,
          (error, result) => {
            if (!error && result && result.event === "success") {
              console.log("Upload successful:", result.info);
              setState((prev) => [...prev, result.info.secure_url]);
            }
          }
        );

        const handleUploadClick = () => {
          if (uploadWidgetRef.current) {
            uploadWidgetRef.current.open();
          }
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener("click", handleUploadClick);

        return () => {
          buttonElement.removeEventListener("click", handleUploadClick);
        };
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setState]); // اینجا اصلاح شد

  return (
    <button
      ref={uploadButtonRef}
      id="upload_widget"
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        backgroundColor: "#1e90ff",
        color: "white",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        minWidth: "100px",
        userSelect: "none",
      }}
    >
      Upload
    </button>
  );
};

export default CloudinaryUploadWidget;
