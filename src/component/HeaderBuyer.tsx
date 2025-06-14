import { useState } from "react"

import stores from "../../data/stores.json"
console.log(stores)

// {
//   "store": [
//     {
//       "id": 1,
//       "name": "Apple Orchard",
//       "street": "456 Orchard Lane, Fruitville, BC 67890",
//       "city": "Fruitville",
//       "products": [
//         {
//           "id": 1,
//           "name": "Apple",
//           "category": "Fruits",
//           "price": 0.5,
//           "description": "Fresh and juicy apples, perfect for snacking or baking."
//         },
//         {
//           "id": 2,
//           "name": "Pear",
//           "category": "Fruits",
//           "price": 0.75,
//           "description": "Sweet and ripe pears, great for salads or desserts."
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "name": "Berry Farm",
//       "street": "789 Berry Blvd, Berry Town, BC 13579",
//       "city": "Berry Town",
//       "products": [
//         {
//           "id": 3,
//           "name": "Strawberry",
//           "category": "Berries",
//           "price": 2.0,
//           "description": "Fresh strawberries, perfect for desserts or smoothies."
//         },
//         {
//           "id": 4,
//           "name": "Blueberry",
//           "category": "Berries",
//           "price": 2.5,
//           "description": "Sweet blueberries, great for snacking or baking."
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "name": "Vegetable Patch",
//       "street": "321 Veggie Ave, Green City, BC 24680",
//       "city": "Green City",
//       "products": [
//         {
//           "id": 5,
//           "name": "Carrot",
//           "category": "Root Vegetables",
//           "price": 1.0,
//           "description": "Crunchy carrots, perfect for salads or snacks."
//         },
//         {
//           "id": 6,
//           "name": "Broccoli",
//           "category": "Cruciferous Vegetables",
//           "price": 1.75,
//           "description": "Fresh broccoli, great for steaming or stir-frying."
//         }
//       ]
//     }
//   ]
// }

const Component = () => {
  const [search, setSearch] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const filteredStores = stores.store.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <header className="inline-flex items-center justify-between bg-gray-800 p-4 text-lg font-bold text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Farmlink</a>
          </li>
        </ul>
      </nav>
      <nav className="relative">
        <input
          className="rounded-lg bg-gray-700 p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search stores..."
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          onFocus={() => {
            setShowSuggestions(true)
          }}
          // onBlur={() => {setTimeout(() => setShowSuggestions(false), 100)}}
        />
        {showSuggestions && filteredStores.length > 0 && (
          <ul className="absolute left-0 z-10 mt-1 w-full rounded-lg bg-white text-gray-900 shadow-lg">
            {filteredStores.map((store) => (
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                key={store.id}
                onMouseDown={() => {
                  setSearch(store.name)
                  setShowSuggestions(false)
                }}
              >
                {store.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a className="text-2xl" href="/buyer">
              <span className="material-symbol">home</span>
            </a>
          </li>
          <li>
            <a className="text-2xl" href="/buyer/account">
              <span className="material-symbol">account_circle</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Component
