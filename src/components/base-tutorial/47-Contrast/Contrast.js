import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function Contrast() {
  return (
    <div className="flex flex-wrap justify-around p-3">
      <img src={bernie} alt="bernie" className="w-[15%] contrast-0" />
      <img src={bernie} alt="bernie" className="w-[15%] contrast-50" />
      <img src={bernie} alt="bernie" className="w-[15%] contrast-75" />
      <img src={bernie} alt="bernie" className="w-[15%] contrast-100" />
      <img src={bernie} alt="bernie" className="w-[15%] contrast-125" />
      <img src={bernie} alt="bernie" className="w-[15%] contrast-200" />
    </div>
  )
}
