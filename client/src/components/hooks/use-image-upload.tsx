import { useCallback, useEffect, useRef, useState } from "react";

interface UseImageUploadProps {
  onUpload?: (urls: string[]) => void;
  multiple?: boolean;
}

export function useImageUpload({
  onUpload,
  multiple = true,
}: UseImageUploadProps = {}) {
  const previewRefs = useRef<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleThumbnailClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      if (files.length > 0) {
        const newUrls: string[] = [];
        const newNames: string[] = [];

        files.forEach((file) => {
          if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            newUrls.push(url);
            newNames.push(file.name);
            previewRefs.current.push(url);
          }
        });

        if (multiple) {
          setPreviewUrls((prev) => {
            const updatedUrls = [...prev, ...newUrls];
            onUpload?.(updatedUrls);
            return updatedUrls;
          });
          setFileNames((prev) => [...prev, ...newNames]);
        } else {
          setPreviewUrls(newUrls);
          setFileNames(newNames);
          onUpload?.(newUrls);
        }
      }
    },
    [onUpload, multiple]
  );

  const handleRemove = useCallback(
    (index?: number) => {
      if (index !== undefined) {
        // Remove specific image
        const urlToRemove = previewUrls[index];
        if (urlToRemove) {
          URL.revokeObjectURL(urlToRemove);
        }
        const newUrls = previewUrls.filter((_, i) => i !== index);
        const newNames = fileNames.filter((_, i) => i !== index);
        setPreviewUrls(newUrls);
        setFileNames(newNames);
        previewRefs.current = newUrls;
        onUpload?.(newUrls);
      } else {
        // Remove all images
        previewUrls.forEach((url) => URL.revokeObjectURL(url));
        setPreviewUrls([]);
        setFileNames([]);
        previewRefs.current = [];
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        onUpload?.([]);
      }
    },
    [previewUrls, fileNames, onUpload]
  );

  useEffect(() => {
    return () => {
      previewRefs.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  return {
    previewUrls,
    fileNames,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  };
}
