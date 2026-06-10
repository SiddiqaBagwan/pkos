export function Sidebar() {
  return (
    <aside className="w-64 border-r p-6">
      <h1 className="text-2xl font-bold mb-8">PKOS</h1>

      <nav className="space-y-6">
        <div>📁 Collections</div>
        <div>📄 Documents</div>
        <div>🔍 Search</div>
        <div>🤖 AI Chat</div>
        <div>📊 Analytics</div>
      </nav>
    </aside>
  );
}