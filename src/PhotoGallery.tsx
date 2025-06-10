import { useEffect, useState } from "react";
import { getUrl, list, uploadData } from "aws-amplify/storage";
import { CameraIcon } from "@heroicons/react/24/outline";

type ImageItem = {
  url: string;
  versionId?: string | undefined;
  contentType?: string | undefined;
  lastModified?: Date | undefined;
  size?: number | undefined;
  eTag?: string | undefined;
  path: string;
};

function PhotoGallery() {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const result = await list({
        path: "photos/",
      });

      const imagePromises = result.items.map(async (item) => {
        try {
          const url = await getUrl({
            path: item.path,
          });
          return {
            ...item,
            url: url.url.toString(),
          };
        } catch (error) {
          console.error("Error getting URL for", item.path, error);
          return null;
        }
      });

      const imageUrls = await Promise.all(imagePromises);
      const validImages = imageUrls.filter((img) => img !== null);
      console.log(validImages);

      validImages.sort(
        (a, b) =>
          (b.lastModified ? b.lastModified.getTime() : 0) -
          (a.lastModified ? a.lastModified.getTime() : 0)
      );

      setImages(validImages);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      fileArray.map((file) => {
        upload(file);
      });
      event.target.value = "";
    }
  };

  const upload = async (file: File) => {
    if (!file) {
      return;
    }
    const result = await uploadData({
      path: `photos/${file.name}`,
      data: file,
    }).result;

    const url = await getUrl({
      path: result.path,
    });
    const image = {
      ...result,
      url: url.url.toString(),
    };
    setImages([image, ...images]);
  };

  return (
    <div>
      <label
        htmlFor="file-upload"
        style={{
          // width: "4rem",
          // height: "4rem",
          padding: "0.5rem",
          borderRadius: "1rem",
          border: "2px solid #fa3636",
          backgroundColor: "#fdd5d8",
          color: "#fa3636",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        <CameraIcon style={{ height: "2rem", width: "2rem" }} />
        Upload Photos
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </label>
      <div
        style={{
          width: "100vw",
          height: "100dvh",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {images.map((image) => (
          <img
            key={image.path}
            src={image.url}
            alt={image.path}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
