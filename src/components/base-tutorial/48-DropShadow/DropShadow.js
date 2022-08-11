import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function DropShadow() {
  return (
    <div className="flex flex-wrap justify-around p-3 bg-slate-100">
      <img src={bernie} alt="bernie" className="w-[15%] drop-shadow-sm" />
      <img src={bernie} alt="bernie" className="w-[15%] drop-shadow" />
      <img src={bernie} alt="bernie" className="w-[15%] drop-shadow-md" />
      <img src={bernie} alt="bernie" className="w-[15%] drop-shadow-lg" />
      <img src={bernie} alt="bernie" className="w-[15%] drop-shadow-xl" />
      <img src={bernie} alt="bernie" className="w-[15%] drop-shadow-2xl" />
    </div>
  )
}
