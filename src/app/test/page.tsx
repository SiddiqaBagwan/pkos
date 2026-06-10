import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("collections")
    .select("*");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}