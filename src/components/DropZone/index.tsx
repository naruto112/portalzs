import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiCheckCircle } from "react-icons/fi";

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <FiCheckCircle size={30} className="check-circle" />
      ) : (
        <p>
          <FiUpload />
        </p>
      )}
    </div>
  );
};

export default Dropzone;
