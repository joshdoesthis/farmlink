import { Link } from "react-router-dom"

import Broccoli from "../../public/broccoli.png"
import Cabbage from "../../public/cabbage.png"
import Capsicum from "../../public/capsicum.png"
import Carrot from "../../public/carrot.png"
import Cauliflower from "../../public/cauliflower.png"
import Egg from "../../public/egg.png"
import Eggplant from "../../public/eggplant.png"
import Grape from "../../public/grape.png"
import Honey from "../../public/honey.png"
import Mushroom from "../../public/mushroom.png"
import Parsnip from "../../public/parsnip.png"
import Radish from "../../public/radish.png"
import Strawberry from "../../public/strawberry.png"
import Tomato from "../../public/tomato.png"
import Watermelon from "../../public/Watermelon.png"
import Header from "../component/Header"

const Component = () => {
  return (
    <>
      <Header />
      <main>
        <div className="grid grow grid-flow-col items-start gap-8 bg-[#00806C]/50 p-8">
          <Link className="inline-flex flex-col overflow-clip rounded-4xl bg-white" to="/store/1">
            <div className="inline-flex items-center justify-end bg-[#00806C]/10 p-8">
              <span className="rounded-full bg-white p-4 text-xl font-bold">100m</span>
            </div>
            <div className="inline-flex items-center justify-between gap-x-4 p-8">
              <img className="h-12" src={Cauliflower} />
              <img className="h-12" src={Carrot} />
              <img className="h-12" src={Capsicum} />
              <img className="h-12" src={Eggplant} />
              <img className="h-12" src={Cabbage} />
            </div>
          </Link>
          <Link className="inline-flex flex-col overflow-clip rounded-4xl bg-white" to="/store/2">
            <div className="inline-flex items-center justify-end bg-[#00806C]/10 p-8">
              <span className="rounded-full bg-white p-4 text-xl font-bold">150m</span>
            </div>
            <div className="inline-flex items-center justify-between gap-x-4 p-8">
              <img className="h-12" src={Broccoli} />
              <img className="h-12" src={Strawberry} />
              <img className="h-12" src={Egg} />
            </div>
          </Link>
          <Link className="inline-flex flex-col overflow-clip rounded-4xl bg-white" to="/store/3">
            <div className="inline-flex items-center justify-end bg-[#00806C]/10 p-8">
              <span className="rounded-full bg-white p-4 text-xl font-bold">300m</span>
            </div>
            <div className="inline-flex items-center justify-between gap-x-4 p-8">
              <img className="h-12" src={Honey} />
              <img className="h-12" src={Grape} />
              <img className="h-12" src={Mushroom} />
              <img className="h-12" src={Parsnip} />
            </div>
          </Link>
          <Link className="inline-flex flex-col overflow-clip rounded-4xl bg-white" to="/store/4">
            <div className="inline-flex items-center justify-end bg-[#00806C]/10 p-8">
              <span className="rounded-full bg-white p-4 text-xl font-bold">500m</span>
            </div>
            <div className="inline-flex items-center justify-between gap-x-4 p-8">
              <img className="h-12" src={Radish} />
              <img className="h-12" src={Tomato} />
              <img className="h-12" src={Watermelon} />
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Component
