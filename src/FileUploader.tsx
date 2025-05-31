import React from "react";
import { uploadData } from "aws-amplify/storage";

export default function FileUploader() {
  const [file, setFile] = React.useState<File>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  const handleClick = () => {
    if (!file) {
      return;
    }
    uploadData({
      path: `photos/${file.name}`,
      data: file,
    });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Upload</button>
    </div>
  );
}
