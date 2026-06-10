import { UploadZone } from "@/components/documents/upload-zone";

export default function DocumentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Documents
      </h1>

      <UploadZone />
    </div>
  );
}