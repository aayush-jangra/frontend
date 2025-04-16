import { useState } from "react";
import "./fileUploadStyles.css";

const FilesPreview = ({ files, removeItem }) => {
  return (
    <div className="files-container">
      {files.map((file) => (
        <div key={file.name} className="file-preview">
          {file.type.includes("image") && (
            <img
              className="file-preview-image"
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
          )}
          <div className="files-info">
            <div>{file.name}</div>
            <div style={{ color: "var(--text-subtitle)" }}>
              {(file.size / 1024).toFixed(2)} KB
            </div>
          </div>
          <button
            onClick={() => removeItem(file.name)}
            className="file-delete-btn"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const addFiles = (files) => {
    setFiles((prev) => [
      ...files,
      ...prev.filter(
        (item) => ![...files].map((file) => file.name).includes(item.name)
      ),
    ]);
  };

  const removeItem = (fileName) => {
    setFiles((prev) => [...prev.filter((file) => file.name !== fileName)]);
  };

  return (
    <div className="file-upload-container">
      <div
        className={`file-upload ${isDragging ? "file-upload-dragged" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          addFiles(e.dataTransfer.files);
        }}
        onDragEnter={() => {
          setIsDragging(true);
        }}
        onDragLeave={() => {
          setIsDragging(false);
        }}
      >
        <div>Drag and drop file here</div>
        <div>or</div>
        <input
          value=""
          style={{ display: "none" }}
          type="file"
          multiple
          id="file-upload-input"
          onChange={(e) => {
            addFiles(e.target.files);
          }}
        />
        <label className="file-browse-btn" htmlFor="file-upload-input">
          Browse Files
        </label>
      </div>
      {files.length > 0 && (
        <FilesPreview files={files} removeItem={removeItem} />
      )}
    </div>
  );
};
