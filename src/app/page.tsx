

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-5">
          <h1 className="text-2xl font-bold mb-8">PKOS</h1>

          <nav className="space-y-4">
            <div className="p-3 rounded-lg bg-gray-100 cursor-pointer">
              📁 Collections
            </div>

            <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              🤖 AI Assistant
            </div>

            <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              📚 Research
            </div>

            <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              🚀 Projects
            </div>

            <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              🏆 Certificates
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">
            Welcome to PKOS
          </h2>

          <input
            type="text"
            placeholder="Search your knowledge..."
            className="w-full p-4 border rounded-xl mb-8"
          />

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg">
                Documents
              </h3>
              <p className="text-gray-500 mt-2">
                0 Uploaded
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg">
                Collections
              </h3>
              <p className="text-gray-500 mt-2">
                0 Collections
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg">
                AI Insights
              </h3>
              <p className="text-gray-500 mt-2">
                Coming Soon
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}