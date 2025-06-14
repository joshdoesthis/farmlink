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
        <div className="grid grow grid-flow-row items-start gap-8 bg-[#00806C]/50 p-8">
          <div className="inline-flex flex-col gap-y-8 rounded-2xl bg-white p-8">
            <div className="inline-flex items-center justify-between">
              <h1 className="text-3xl font-bold">Mike&apos;s Store Dashboard</h1>
              <Link
                className="inline-flex items-center justify-center gap-x-2 text-xl font-bold text-[#00806C]"
                to="/product"
              >
                Edit Profile
                <span className="material-symbol text-4xl font-bold">edit</span>
              </Link>
            </div>
            <div className="inline-flex flex-col items-start justify-center gap-y-2">
              <div className="inline-flex items-center gap-x-2">
                <span className="material-symbol text-2xl">location_on</span>
                <span className="text-xl">42 Orchard Lane, Greenfield, Auckland</span>
              </div>
              <div className="inline-flex items-center justify-start gap-x-4">
                <span className="font-bold">Available</span>
                <span>Mornings 7-10am</span>
                <span>Evenings 5-6pm</span>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col gap-y-8 rounded-2xl bg-white p-8">
            <div className="inline-flex items-center justify-between">
              <h1 className="text-2xl font-bold">Item&apos;s You Are Selling</h1>
              <Link
                className="inline-flex items-center justify-center gap-x-2 text-xl font-bold text-[#00806C]"
                to="/product"
              >
                Add Item
                <span className="material-symbol text-4xl font-bold">add_circle</span>
              </Link>
            </div>
            <div className="grid grid-flow-col items-start gap-8">
              <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl border-2 border-[#00806C]/20 p-8">
                <div className="inline-flex items-center justify-center gap-x-4">
                  <img className="h-12" src={Broccoli} />
                </div>
                <div className="inline-flex flex-col items-center justify-between gap-4">
                  <span className="text-2xl font-bold">Broccoli</span>
                  <div className="inline-flex items-center justify-between gap-x-2">
                    <span className="material-symbol text-xl font-bold">remove</span>
                    <span className="rounded-2xl bg-[#00806C]/20 px-4 py-2 text-2xl font-bold">
                      5
                    </span>
                    <span className="material-symbol text-xl font-bold">add</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl border-2 border-[#00806C]/20 p-8">
                <div className="inline-flex items-center justify-center gap-x-4">
                  <img className="h-12" src={Strawberry} />
                </div>
                <div className="inline-flex flex-col items-center justify-between gap-4">
                  <span className="text-2xl font-bold">Strawberry</span>
                  <div className="inline-flex items-center justify-between gap-x-2">
                    <span className="material-symbol text-xl font-bold">remove</span>
                    <span className="rounded-2xl bg-[#00806C]/20 px-4 py-2 text-2xl font-bold">
                      30
                    </span>
                    <span className="material-symbol text-xl font-bold">add</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col gap-4 overflow-clip rounded-4xl border-2 border-[#00806C]/20 p-8">
                <div className="inline-flex items-center justify-center gap-x-4">
                  <img className="h-12" src={Egg} />
                </div>
                <div className="inline-flex flex-col items-center justify-between gap-4">
                  <span className="text-2xl font-bold">Egg</span>
                  <div className="inline-flex items-center justify-between gap-x-2">
                    <span className="material-symbol text-xl font-bold">remove</span>
                    <span className="rounded-2xl bg-[#00806C]/20 px-4 py-2 text-2xl font-bold">
                      10
                    </span>
                    <span className="material-symbol text-xl font-bold">add</span>
                  </div>
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
