import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function Blur() {
  return (
    <div className="flex flex-wrap justify-around p-3">
      <img src={bernie} alt="bernie" className="w-[15%] blur-sm" />
      <img src={bernie} alt="bernie" className="w-[15%] blur" />
      <img src={bernie} alt="bernie" className="w-[15%] blur-md" />
      <img src={bernie} alt="bernie" className="w-[15%] blur-lg" />
      <img src={bernie} alt="bernie" className="w-[15%] blur-xl" />
      <img src={bernie} alt="bernie" className="w-[15%] blur-2xl" />
      <img src={bernie} alt="bernie" className="w-[15%] blur-3xl" />
    </div>
  )
}
