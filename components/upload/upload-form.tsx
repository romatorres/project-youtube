"use client";

import UploadFormInput from "./upload-form-input";
import { z } from "zod";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Arquivo invalido" })
    .refine((file) => file.size <= 20 * 1024 * 1024, "Arquivo maior que 20mb")
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "O arquivo deve ser um PDF"
    ),
});

export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submetido");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validatedFields = schema.safeParse({ file });

    console.log(validatedFields);

    if (!validatedFields.success) {
      console.log(
        validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Arquivo invalido"
      );
      return;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
