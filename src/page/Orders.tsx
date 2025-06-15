import { Link } from "react-router-dom"

import Broccoli from "../../public/broccoli.png"
// import Cabbage from "../../public/cabbage.png"
// import Capsicum from "../../public/capsicum.png"
// import Carrot from "../../public/carrot.png"
// import Cauliflower from "../../public/cauliflower.png"
import Egg from "../../public/egg.png"
// import StoreMap from "../../public/store-map.png"
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
        <div className="grid grow grid-flow-row content-start gap-8 bg-[#9BBEB6] p-8">
          <div className="inline-flex gap-x-4">
            <Link
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xl"
              to="/dashboard"
            >
              <span className="material-symbol">dashboard</span>
              Dashboard
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xl font-bold"
              to="/orders"
            >
              <span className="material-symbol">orders</span>
              Orders
            </Link>
          </div>
          <div className="inline-flex flex-col rounded-2xl bg-white p-8">
            <div className="inline-flex items-center justify-between">
              <h1 className="text-2xl font-bold">Active Orders</h1>
            </div>
            <div className="mt-8 inline-grid grid-cols-4 border-b-2 border-[#00806C]/20 pb-4">
              <span className="font-bold md:text-xl">Items</span>
              <span className="font-bold md:text-xl">Total</span>
              <span className="font-bold md:text-xl">Status</span>
              <span className="font-bold md:text-xl">When</span>
            </div>
            <div className="grid divide-y-2 divide-[#00806C]/20">
              <div className="inline-grid grid-cols-4 items-center py-4">
                <div className="inline-flex items-center justify-start gap-x-2 md:gap-x-4">
                  <div className="inline-flex flex-col items-center gap-y-2">
                    <img className="h-8 md:h-12" src={Egg} />
                    <span className="md:text-xl">x6</span>
                  </div>
                </div>
                <div>
                  <span className="md:text-xl">$4.50</span>
                </div>
                <div>
                  <span className="md:text-xl">Picking Up</span>
                </div>
                <div>
                  <span className="md:text-xl">Today 5:00pm</span>
                </div>
              </div>
              <div className="inline-grid grid-cols-4 items-center py-4">
                <div className="inline-flex items-center justify-start gap-x-2 md:gap-x-4">
                  <div className="inline-flex flex-col items-center gap-y-2">
                    <img className="h-8 md:h-12" src={Broccoli} />
                    <span className="md:text-xl">x1</span>
                  </div>
                  <div className="inline-flex flex-col items-center gap-y-2">
                    <img className="h-8 md:h-12" src={Strawberry} />
                    <span className="md:text-xl">200g</span>
                  </div>
                </div>
                <div>
                  <span className="md:text-xl">$5.00</span>
                </div>
                <div>
                  <span className="md:text-xl">Picking Up</span>
                </div>
                <div>
                  <span className="md:text-xl">Today 5:30pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col rounded-2xl bg-white p-8">
            <div className="inline-flex items-center justify-between">
              <h1 className="text-2xl font-bold">Complete Orders</h1>
            </div>
            <div className="mt-8 inline-grid grid-cols-4 border-b-2 border-[#00806C]/20 pb-4">
              <span className="font-bold md:text-xl">Items</span>
              <span className="font-bold md:text-xl">Total</span>
              <span className="font-bold md:text-xl">Status</span>
              <span className="font-bold md:text-xl">When</span>
            </div>
            <div className="grid divide-y-2 divide-[#00806C]/20">
              <div className="inline-grid grid-cols-4 items-center py-4">
                <div className="inline-flex items-center justify-start gap-x-2 md:gap-x-4">
                  <div className="inline-flex flex-col items-center gap-y-2">
                    <img className="h-8 md:h-12" src={Egg} />
                    <span className="md:text-xl">x6</span>
                  </div>
                </div>
                <div>
                  <span className="md:text-xl">$4.50</span>
                </div>
                <div>
                  <span className="md:text-xl">Collected</span>
                </div>
                <div>
                  <span className="md:text-xl">Yesterday 5:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Component
