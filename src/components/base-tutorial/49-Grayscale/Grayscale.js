import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function Grayscale() {
  return (
    <div className="flex flex-wrap justify-around p-3 bg-slate-100">
      <img src={bernie} alt="bernie" className="w-[25%] grayscale-0" />
      <img src={bernie} alt="bernie" className="w-[25%] grayscale" />
    </div>
  )
}
