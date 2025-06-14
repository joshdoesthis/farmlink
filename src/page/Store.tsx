import { Link } from "react-router-dom"

import Broccoli from "../../public/broccoli.png"
// import Cabbage from "../../public/cabbage.png"
// import Capsicum from "../../public/capsicum.png"
// import Carrot from "../../public/carrot.png"
// import Cauliflower from "../../public/cauliflower.png"
import Egg from "../../public/egg.png"
import StoreMap from "../../public/store-map.png"
// import Eggplant from "../../public/eggplant.png"
// import Grape from "../../public/grape.png"
// import Honey from "../../public/honey.png"
// import Mushroom from "../../public/mushroom.png"
// import Parsnip from "../../public/parsnip.png"
// import Radish from "../../public/radish.png"
import Strawberry from "../../public/strawberry.png"
// import Tomato from "../../public/tomato.png"
// import Watermelon from "../../public/watermelon.png"
import Header from "../component/Header"

const Component = () => {
  return (
    <>
      <Header />
      <main>
        <div className="grow bg-[#00806C]/50 p-8">
          <div className="mb-8 inline-flex w-full flex-col gap-y-4 rounded-4xl bg-white p-8">
            <div className="relative inline-flex items-center justify-end overflow-clip rounded-2xl bg-[#00806C]/10 p-8">
              <img className="absolute right-0 left-0 rounded-2xl" src={StoreMap} />
              <span className="z-10 rounded-full bg-white p-4 text-xl font-bold">150m</span>
              <span className="material-symbol absolute top-4 right-4 left-1/2 text-6xl text-[#00806C]">
                location_on
              </span>
            </div>
            <h1 className="text-4xl font-bold">Mikes&apos;s Store</h1>
            <p>
              Welcome to Mikes&apos;s Store! Here you can find a variety of fresh produce and other
              items.
            </p>
            <div className="inline-flex items-center justify-start gap-x-4">
              <span className="font-bold">Available</span>
              <span>Mornings 7-10am</span>
              <span>Evenings 5-6pm</span>
            </div>
          </div>
          <div className="grid grid-flow-col items-start gap-8">
            <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl bg-white p-8">
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Broccoli} />
              </div>
              <div className="inline-flex flex-col items-start justify-between gap-x-4">
                <span className="text-2xl font-bold">Broccoli</span>
                <span className="text-2xl">5 left</span>
              </div>
              <div>
                <button className="rounded-2xl bg-[#00806C] px-4 py-2 font-bold text-white">
                  Buy
                </button>
              </div>
            </div>
            <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl bg-white p-8">
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Strawberry} />
              </div>
              <div className="inline-flex flex-col items-start justify-between gap-x-4">
                <span className="text-2xl font-bold">Strawberry</span>
                <span className="text-2xl">30 left</span>
              </div>
              <div>
                <button className="rounded-2xl bg-[#00806C] px-4 py-2 font-bold text-white">
                  Buy
                </button>
              </div>
            </div>
            <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl bg-white p-8">
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Egg} />
              </div>
              <div className="inline-flex flex-col items-start justify-between gap-x-4">
                <span className="text-2xl font-bold">Egg</span>
                <span className="text-2xl">10 left</span>
              </div>
              <div>
                <Link
                  className="inline-flex items-center justify-center rounded-2xl bg-[#00806C] px-4 py-2 font-bold text-white"
                  to="/cart"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Component
