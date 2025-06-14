import { Link } from "react-router-dom"

import Header from "../component/Header"

const Component = () => {
  return (
    <>
      <Header />
      <main>
        <div className="flex grow items-center justify-center gap-4 p-4">
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-[#4285F4] p-4 text-2xl font-bold text-white"
            to="/buyer"
          >
            Buyer
            <span className="material-symbol">arrow_forward</span>
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-[#4285F4] p-4 text-2xl font-bold text-white"
            to="/seller"
          >
            Seller
            <span className="material-symbol">arrow_forward</span>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Component
