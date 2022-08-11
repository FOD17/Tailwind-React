import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function Sephia() {
  return (
    <div className="flex flex-wrap justify-around p-3 bg-slate-100">
      <img src={bernie} alt="bernie" className="w-[25%] sepia-0-0" />
      <img src={bernie} alt="bernie" className="w-[25%] sepia" />
    </div>
  )
}
