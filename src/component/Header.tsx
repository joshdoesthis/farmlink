import { Link } from "react-router-dom"

import FarmlinkIcon from "../../public/farmlink-icon.svg"

const Component = () => {
  return (
    <header className="flex bg-[#00806C]/50 p-8">
      <div className="flex grow items-center justify-between rounded-2xl bg-[#00806C] px-8 py-4 text-lg font-bold text-white">
        <nav>
          <Link to="/">
            <img className="h-8" src={FarmlinkIcon} />
          </Link>
        </nav>
        <nav>
          <Link
            className="inline-flex items-center justify-center gap-x-2 rounded-xl bg-[#9BBFB6]/50 px-4 py-2 font-bold text-white"
            to="/browse"
          >
            <span className="material-symbol text-2xl">search</span>
            Find Produce&hellip;
          </Link>
        </nav>
        <nav>
          <Link
            className="inline-flex items-center justify-center gap-x-2 rounded-xl bg-[#F3C430] px-4 py-2 font-bold text-black"
            to="/dashboard"
          >
            Become a Seller
            <span className="material-symbol">arrow_forward</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Component
