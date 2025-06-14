import { useState } from "react"

import stores from "../../data/stores.json"
import FarmlinkIcon from "../../public/farmlink-icon.svg"

console.log(FarmlinkIcon)

const Component = () => {
  const [search, setSearch] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const filteredStores = stores.store.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <header className="inline-flex items-center justify-between bg-[#00806C] p-4 text-lg font-bold text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">
              <img className="h-8" src={FarmlinkIcon} />
            </a>
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
            <a
              className="inline-flex items-center justify-center gap-x-2 rounded-lg bg-[#F3C430] px-4 py-2 font-bold text-black"
              href="/seller/signup"
            >
              Become a Seller
              <span className="material-symbol">arrow_forward</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Component
