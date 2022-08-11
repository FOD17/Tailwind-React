import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function HueRotation() {
  return (
    <div className="flex flex-wrap justify-around p-3 bg-slate-100">
      <img src={bernie} alt="bernie" className="w-[25%] hue-rotate-0" />
      <img src={bernie} alt="bernie" className="w-[25%] hue-rotate-15" />
      <img src={bernie} alt="bernie" className="w-[25%] hue-rotate-30" />
      <img src={bernie} alt="bernie" className="w-[25%] hue-rotate-60" />
      <img src={bernie} alt="bernie" className="w-[25%] hue-rotate-90" />
      <img src={bernie} alt="bernie" className="w-[25%] hue-rotate-180" />
    </div>
  )
}
