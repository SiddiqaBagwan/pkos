"use client";

import { DocumentCard } from "./document-card";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function UploadZone() {
  const [files, setFiles] = useState<
    { name: string; collection: string }[]
  >([]);

  const [selectedCollection, setSelectedCollection] =
    useState("Research");

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    const filePath = `${Date.now()}-${selectedFile.name}`;

    // Upload file to Supabase Storage
    const { error: uploadError } = await supabase
      .storage
      .from("documents")
      .upload(filePath, selectedFile);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    // Get public URL
    const { data } = supabase
      .storage
      .from("documents")
      .getPublicUrl(filePath);

    const fileUrl = data.publicUrl;

    // Save metadata in documents table
    const { error: dbError } = await supabase
      .from("documents")
      .insert({
        title: selectedFile.name,
        file_url: fileUrl,
        collection_id: 1, // temporary
      });

    if (dbError) {
      alert(dbError.message);
      return;
    }

    // Update UI
    setFiles([
      ...files,
      {
        name: selectedFile.name,
        collection: selectedCollection,
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed rounded-lg p-12 text-center">
        <h2 className="text-2xl font-semibold">
          Upload Knowledge
        </h2>

        <p className="text-muted-foreground mt-2">
          PDFs, DOCX, Images, Notes
        </p>

        <select
          value={selectedCollection}
          onChange={(e) =>
            setSelectedCollection(e.target.value)
          }
          className="border rounded p-2 mt-4"
        >
          <option>AI</option>
          <option>Research</option>
          <option>College</option>
          <option>Projects</option>
          <option>Certificates</option>
        </select>

        <div>
          <input
            type="file"
            onChange={handleUpload}
            className="mt-4"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">
          Uploaded Files
        </h3>

        {files.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {files.map((file, index) => (
              <DocumentCard
                key={index}
                name={file.name}
                collection={file.collection}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}