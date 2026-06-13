import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 border-r p-6">
      <h1 className="text-4xl font-bold mb-10">
        PKOS
      </h1>

      <nav className="space-y-6">

        <Link
          href="/collections"
          className="block hover:text-blue-600"
        >
          📁 Collections
        </Link>

        <Link
          href="/documents"
          className="block hover:text-blue-600"
        >
          📄 Documents
        </Link>

        <Link
          href="/search"
          className="block hover:text-blue-600"
        >
          🔍 Search
        </Link>

        <Link
          href="/chat"
          className="block hover:text-blue-600"
        >
          🤖 AI Chat
        </Link>

        <Link
          href="/analytics"
          className="block hover:text-blue-600"
        >
          📊 Analytics
        </Link>

      </nav>
    </aside>
  );
}