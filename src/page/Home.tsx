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
import PersonFour from "../../public/person-four.png"
import PersonOne from "../../public/person-one.png"
import PersonThree from "../../public/person-three.png"
import PersonTwo from "../../public/person-two.png"
import Radish from "../../public/radish.png"
import Strawberry from "../../public/strawberry.png"
import Tomato from "../../public/tomato.png"
import Watermelon from "../../public/watermelon.png"
import Header from "../component/Header"

const Component = () => {
  return (
    <>
      <Header />
      <main>
        <div className="grid grow grid-flow-row items-start gap-8 bg-[#00806C]/50 p-8">
          <Link className="inline-flex overflow-clip rounded-4xl bg-white" to="/store/1">
            <div className="inline-flex items-start gap-8 bg-[#00806C]/10 p-8">
              <div className="inline-flex flex-col items-center justify-between gap-y-4">
                <div className="relative inline-flex size-24 items-center justify-center overflow-clip rounded-full bg-white">
                  <img className="absolute top-2 w-3xl" src={PersonOne} />
                </div>
                <span className="text-xl font-bold">Cindy</span>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-y-2">
                <span className="rounded-2xl bg-white p-4 text-xl font-bold">100m</span>
                <div className="inline-flex flex-col gap-y-1 rounded-2xl bg-white p-4 text-sm">
                  <span className="font-bold">Available</span>
                  <span>Mornings 8-9am</span>
                  <span>Evenings 4-6pm</span>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col gap-6 p-8">
              <p className="text-xl font-bold">I am selling...</p>
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Cauliflower} />
                <img className="h-12" src={Carrot} />
                <img className="h-12" src={Capsicum} />
                <img className="h-12" src={Eggplant} />
                <img className="h-12" src={Cabbage} />
              </div>
              <p>
                <Link
                  className="inline-flex items-center gap-2 text-xl text-[#00806C]"
                  to="/store/1"
                >
                  View my store
                  <span className="material-symbol">arrow_forward</span>
                </Link>
              </p>
            </div>
          </Link>
          <Link className="inline-flex overflow-clip rounded-4xl bg-white" to="/store/2">
            <div className="inline-flex items-start gap-8 bg-[#00806C]/10 p-8">
              <div className="inline-flex flex-col items-center justify-between gap-y-4">
                <div className="relative inline-flex size-24 items-center justify-center overflow-clip rounded-full bg-white">
                  <img className="absolute top-2 w-3xl" src={PersonTwo} />
                </div>
                <span className="text-xl font-bold">Mike</span>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-y-2">
                <span className="rounded-2xl bg-white p-4 text-xl font-bold">150m</span>
                <div className="inline-flex flex-col gap-y-1 rounded-2xl bg-white p-4 text-sm">
                  <span className="font-bold">Available</span>
                  <span>Mornings 7-10am</span>
                  <span>Evenings 5-6pm</span>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col gap-6 p-8">
              <p className="text-xl font-bold">I am selling...</p>
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Broccoli} />
                <img className="h-12" src={Strawberry} />
                <img className="h-12" src={Egg} />
              </div>
              <p>
                <Link
                  className="inline-flex items-center gap-2 text-xl text-[#00806C]"
                  to="/store/2"
                >
                  View my store
                  <span className="material-symbol">arrow_forward</span>
                </Link>
              </p>
            </div>
          </Link>
          <Link className="inline-flex overflow-clip rounded-4xl bg-white" to="/store/3">
            <div className="inline-flex items-start gap-8 bg-[#00806C]/10 p-8">
              <div className="inline-flex flex-col items-center justify-between gap-y-4">
                <div className="relative inline-flex size-24 items-center justify-center overflow-clip rounded-full bg-white">
                  <img className="absolute top-2 w-3xl" src={PersonThree} />
                </div>
                <span className="text-xl font-bold">Ethan</span>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-y-2">
                <span className="rounded-2xl bg-white p-4 text-xl font-bold">300m</span>
                <div className="inline-flex flex-col gap-y-1 rounded-2xl bg-white p-4 text-sm">
                  <span className="font-bold">Available</span>
                  <span>Mornings 8-11am</span>
                  <span>Evenings 3-5pm</span>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col gap-6 p-8">
              <p className="text-xl font-bold">I am selling...</p>
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Honey} />
                <img className="h-12" src={Grape} />
                <img className="h-12" src={Mushroom} />
                <img className="h-12" src={Parsnip} />
              </div>
              <p>
                <Link
                  className="inline-flex items-center gap-2 text-xl text-[#00806C]"
                  to="/store/3"
                >
                  View my store
                  <span className="material-symbol">arrow_forward</span>
                </Link>
              </p>
            </div>
          </Link>
          <Link className="inline-flex overflow-clip rounded-4xl bg-white" to="/store/4">
            <div className="inline-flex items-start gap-8 bg-[#00806C]/10 p-8">
              <div className="inline-flex flex-col items-center justify-between gap-y-4">
                <div className="relative inline-flex size-24 items-center justify-center overflow-clip rounded-full bg-white">
                  <img className="absolute top-2 w-3xl" src={PersonFour} />
                </div>
                <span className="text-xl font-bold">Emma</span>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-y-2">
                <span className="rounded-2xl bg-white p-4 text-xl font-bold">500m</span>
                <div className="inline-flex flex-col gap-y-1 rounded-2xl bg-white p-4 text-sm">
                  <span className="font-bold">Available</span>
                  <span>Mornings 6-8am</span>
                  <span>Evenings 3-5pm</span>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col gap-6 p-8">
              <p className="text-xl font-bold">I am selling...</p>
              <div className="inline-flex items-center justify-between gap-x-4">
                <img className="h-12" src={Radish} />
                <img className="h-12" src={Tomato} />
                <img className="h-12" src={Watermelon} />
              </div>
              <p>
                <Link
                  className="inline-flex items-center gap-2 text-xl text-[#00806C]"
                  to="/store/4"
                >
                  View my store
                  <span className="material-symbol">arrow_forward</span>
                </Link>
              </p>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Component
