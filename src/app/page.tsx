import { Sidebar } from "@/components/layout/sidebar";
import { CollectionList } from "@/components/collections/collection-list";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">
            Welcome to PKOS
          </h2>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                0 uploaded
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collections</CardTitle>
              </CardHeader>
              <CardContent>
                0 collections
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                Coming soon
              </CardContent>
            </Card>
          </div>

          {/* Collections Section */}
          <div className="mt-8">
            <CollectionList />
          </div>

        </section>

      </div>
    </main>
  );
}