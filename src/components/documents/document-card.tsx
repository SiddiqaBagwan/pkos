type DocumentCardProps = {
  name: string;
  collection: string;
};

export function DocumentCard({
  name,
  collection,
}: DocumentCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold">
        📄 {name}
      </h3>

      <p className="text-sm text-muted-foreground mt-2">
        Collection: {collection}
      </p>
    </div>
  );
}