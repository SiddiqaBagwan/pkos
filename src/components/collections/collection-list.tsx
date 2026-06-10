"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CollectionList() {
  const [collections, setCollections] = useState([
    "AI",
    "Research",
    "College",
    "Projects",
    "Certificates",
  ]);

  const [newCollection, setNewCollection] = useState("");

  const addCollection = () => {
    if (!newCollection.trim()) return;

    setCollections([...collections, newCollection]);
    setNewCollection("");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Collections
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              + New Collection
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Create Collection
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <Input
                placeholder="Collection name"
                value={newCollection}
                onChange={(e) =>
                  setNewCollection(e.target.value)
                }
              />

              <Button
                onClick={addCollection}
                className="w-full"
              >
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Card key={collection}>
            <CardContent className="p-6">
              📁 {collection}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}