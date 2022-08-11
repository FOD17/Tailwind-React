import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function Saturate() {
  return (
    <div className="flex flex-wrap justify-around p-3 bg-slate-100">
      <img src={bernie} alt="bernie" className="w-[15%] saturate-0" />
      <img src={bernie} alt="bernie" className="w-[15%] saturate-50" />
      <img src={bernie} alt="bernie" className="w-[15%] saturate-100" />
      <img src={bernie} alt="bernie" className="w-[15%] saturate-150" />
      <img src={bernie} alt="bernie" className="w-[15%] saturate-2000" />
    </div>
  )
}
