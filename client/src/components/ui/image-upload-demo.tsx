import { Button } from "./button";
import { Input } from "./input";
import { useImageUpload } from "../hooks/use-image-upload";
import { ImagePlus, X, Upload, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import { cn } from "../../lib/utils";

interface ImageUploadDemoProps {
  onUpload?: (urls: string[]) => void;
}

export function ImageUploadDemo({ onUpload }: ImageUploadDemoProps) {
  const {
    previewUrls,
    fileNames,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload({
    onUpload: onUpload || ((urls) => console.log("Uploaded image URLs:", urls)),
    multiple: true,
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files || []);
      const imageFiles = files.filter((file) => file.type.startsWith("image/"));

      if (imageFiles.length > 0) {
        const fakeEvent = {
          target: {
            files: imageFiles,
          },
        } as any;
        handleFileChange(fakeEvent);
      }
    },
    [handleFileChange]
  );

  return (
    <div className="w-full max-w-2xl space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Image Upload</h3>
        <p className="text-sm text-muted-foreground">
          Supported formats: JPG, PNG, GIF
        </p>
      </div>

      <Input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        onClick={(e) => {
          // Reset the input value to allow selecting the same files again
          e.currentTarget.value = "";
        }}
      />

      {previewUrls.length === 0 ? (
        <div
          onClick={handleThumbnailClick}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex h-80 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted",
            isDragging && "border-primary/50 bg-primary/5"
          )}
        >
          <div className="rounded-full bg-background p-3 shadow-sm">
            <ImagePlus className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">
              Click to select multiple images
            </p>
            <p className="text-xs text-muted-foreground">
              or drag and drop files here
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {previewUrls.length} image(s) selected
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={handleThumbnailClick}
              className="h-8 px-3"
            >
              <Upload className="h-4 w-4 mr-2" />
              Add More
            </Button>
          </div>

          <div className="flex flex-col" style={{ gap: "1px" }}>
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <div className="relative h-40 w-full overflow-hidden rounded-lg border">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleThumbnailClick}
                      className="h-10 w-10 p-0 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 shadow-lg"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleRemove(index)}
                      className="h-10 w-10 p-0 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {fileNames[index] && (
                  <div
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                    style={{
                      marginTop: "0px !important",
                      paddingTop: "0px !important",
                    }}
                  >
                    <span className="truncate">{fileNames[index]}</span>
                    <button
                      onClick={() => handleRemove(index)}
                      className="ml-auto rounded-full p-1 hover:bg-muted"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {previewUrls.length > 0 && (
            <div className="flex justify-center">
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleRemove()}
                className="h-8 px-4"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove All
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
