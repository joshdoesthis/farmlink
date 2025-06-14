// import { Link } from "react-router-dom"

// import Broccoli from "../../public/broccoli.png"
// import Cabbage from "../../public/cabbage.png"
// import Capsicum from "../../public/capsicum.png"
// import Carrot from "../../public/carrot.png"
// import Cauliflower from "../../public/cauliflower.png"
import { Link } from "react-router"

import Egg from "../../public/egg.png"
// import Eggplant from "../../public/eggplant.png"
// import Grape from "../../public/grape.png"
// import Honey from "../../public/honey.png"
// import Mushroom from "../../public/mushroom.png"
// import Parsnip from "../../public/parsnip.png"
// import Radish from "../../public/radish.png"
// import Strawberry from "../../public/strawberry.png"
// import Tomato from "../../public/tomato.png"
// import Watermelon from "../../public/watermelon.png"
// import StoreMap from "../../public/store-map.png"
import Header from "../component/Header"

const Component = () => {
  return (
    <>
      <Header />
      <main>
        <div className="inline-flex grow flex-col gap-y-8 bg-[#00806C]/50 p-8">
          <div className="mb-8 inline-flex flex-col gap-y-4 rounded-4xl bg-white p-8">
            {/* <div className="relative inline-flex items-center justify-end overflow-clip rounded-2xl bg-[#00806C]/10 p-8">
              <img className="absolute right-0 left-0 rounded-2xl" src={StoreMap} />
              <span className="z-10 rounded-full bg-white p-4 text-xl font-bold">150m</span>
            </div> */}
            <div>
              <h1 className="text-4xl font-bold">Mike&apos;s Store</h1>
              <p>
                <span className="text-xl font-bold">150m</span>
              </p>
            </div>
            <div>
              <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl border-2 border-[#00806C]/20 p-8">
                <div className="inline-flex items-center justify-center gap-x-4">
                  <img className="h-12" src={Egg} />
                </div>
                <div className="inline-flex flex-col items-center justify-between gap-4">
                  <span className="text-2xl font-bold">Egg</span>
                  <div className="inline-flex items-center justify-between gap-x-2">
                    <span className="material-symbol text-xl font-bold">remove</span>
                    <span className="rounded-2xl bg-[#00806C]/20 px-4 py-2 text-2xl font-bold">
                      5
                    </span>
                    <span className="material-symbol text-xl font-bold">add</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-end">
            <Link
              className="inline-flex items-center justify-center gap-x-2 rounded-2xl bg-[#F3C430] px-4 py-2 text-xl font-bold text-black"
              to="/order"
            >
              <span className="material-symbol">shopping_cart</span>
              Place Order
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Component
