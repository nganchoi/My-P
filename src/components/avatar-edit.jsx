import React, { useState } from "react";
import "./avatar.styles.css";

function ProfilePicture() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (event) => {
    const selected = event.target.files[0];
    if (!selected.type.startsWith("image/")) {
      alert("Please select an image file!");
      return;
    }
    if (selected.size > 1000000) {
      alert("Image size should be less than 1MB!");
      return;
    }
    setSelectedFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
  };

  return (
    <div className="avatar">
      <input
        className="input-file"
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
      />
      {previewUrl && <img className="img" src={previewUrl} alt="Preview" />}
    </div>
  );
}

export default ProfilePicture;
