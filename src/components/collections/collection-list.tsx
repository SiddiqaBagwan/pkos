import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export async function CollectionList() {
  const { data: collections, error } = await supabase
    .from("collections")
    .select("*");

  if (error) {
    return (
      <p>Error loading collections: {error.message}</p>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Collections
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collections?.map((collection) => (
  <Link
    key={collection.id}
    href={`/collections/${collection.id}`}
  >
    <Card>
      <CardContent className="p-6">
        📁 {collection.name}
      </CardContent>
    </Card>
  </Link>
))}
      </div>
    </div>
  );
}