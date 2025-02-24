export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Downsizing Calculator
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Your Items</h2>
          
          {/* Input form will go here */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter item name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Value
              </label>
              <input 
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="$"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Add Item
            </button>
          </form>

          {/* Items list will go here */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Your Items</h3>
            {/* We'll add the items list here */}
          </div>
        </div>
      </main>
    </div>
  )
}