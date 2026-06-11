"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function CreateCollectionForm() {
  const [name, setName] = useState("");

  async function createCollection() {
    if (!name.trim()) return;

    const { error } = await supabase
      .from("collections")
      .insert({
        name,
      });

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    window.location.reload();
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Collection name"
        className="border rounded px-3 py-2"
      />

      <button
        onClick={createCollection}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </div>
  );
}