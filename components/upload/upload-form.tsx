"use client";

import UploadFormInput from "./upload-form-input";

export default function UploadForm() {
  const handleSubmit = () => {
    console.log("Submetido");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
