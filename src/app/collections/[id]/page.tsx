import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollectionPage({
  params,
}: Props) {
  const { id } = await params;

  const { data: collection, error } = await supabase
    .from("collections")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return (
      <div className="p-8">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        📁 {collection.name}
      </h1>

      <p className="text-muted-foreground mt-2">
        Collection ID: {collection.id}
      </p>

      <div className="mt-8 border rounded-lg p-6">
        No documents yet.
      </div>
    </div>
  );
}