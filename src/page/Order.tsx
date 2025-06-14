// import { Link } from "react-router-dom"

// import Broccoli from "../../public/broccoli.png"
// import Cabbage from "../../public/cabbage.png"
// import Capsicum from "../../public/capsicum.png"
// import Carrot from "../../public/carrot.png"
// import Cauliflower from "../../public/cauliflower.png"
// import Egg from "../../public/egg.png"
import StoreMap from "../../public/store-map.png"
// import Eggplant from "../../public/eggplant.png"
// import Grape from "../../public/grape.png"
// import Honey from "../../public/honey.png"
// import Mushroom from "../../public/mushroom.png"
// import Parsnip from "../../public/parsnip.png"
// import Radish from "../../public/radish.png"
// import Strawberry from "../../public/strawberry.png"
// import Tomato from "../../public/tomato.png"
// import Watermelon from "../../public/watermelon.png"
import Header from "../component/Header"

const Component = () => {
  return (
    <>
      <Header />
      <main>
        <div className="grow bg-[#00806C]/50 p-8">
          <div className="mb-8 inline-flex flex-col gap-y-4 rounded-4xl bg-white p-8">
            <div className="relative inline-flex items-center justify-end overflow-clip rounded-2xl bg-[#00806C]/10 p-8">
              <img className="absolute right-0 left-0 rounded-2xl" src={StoreMap} />
              <span className="z-10 rounded-full bg-white p-4 text-xl font-bold">150m</span>
            </div>
            <h1 className="text-4xl font-bold">Cindy&apos;s Store</h1>
            <p></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Component
