const Component = () => {
  return (
    <header className="inline-flex items-center justify-between bg-gray-800 p-4 text-lg font-bold text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Farmlink</a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <a className="text-2xl" href="/seller">
              <span className="material-symbol">home</span>
            </a>
          </li>
          <li>
            <a className="text-2xl" href="/seller/account">
              <span className="material-symbol">account_circle</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Component
