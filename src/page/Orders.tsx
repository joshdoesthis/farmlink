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
        <div className="grid grow grid-flow-row content-start gap-8 bg-[#00806C]/50 p-8">
          <div className="inline-flex gap-x-4">
            <Link
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xl font-bold"
              to="/dashboard"
            >
              <span className="material-symbol">dashboard</span>
              Dashboard
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xl"
              to="/orders"
            >
              <span className="material-symbol">orders</span>
              Orders
            </Link>
          </div>
          <div className="inline-flex flex-col gap-y-8 rounded-2xl bg-white p-8">
            <div className="inline-flex items-center justify-between">
              <h1 className="text-2xl font-bold">Active Orders</h1>
            </div>
            <div className="grid grid-flow-col items-start gap-8">
              <div className="inline-flex items-center justify-start gap-x-4">
                <img className="h-12" src={Egg} />
                <span className="text-xl font-bold">x6</span>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col gap-y-8 rounded-2xl bg-white p-8">
            <div className="inline-flex items-center justify-between">
              <h1 className="text-2xl font-bold">Complete Orders</h1>
            </div>
            <div className="grid grid-flow-col items-start gap-8">
              <div className="inline-flex items-center justify-start gap-x-4">
                <img className="h-12" src={Broccoli} />
                <span className="text-xl font-bold">x1</span>
                <img className="h-12" src={Strawberry} />
                <span className="text-xl font-bold">200g</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Component
