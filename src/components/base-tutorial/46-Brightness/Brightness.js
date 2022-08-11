import React from "react"
import bernie from "../../../assets/bernie.jpg"

export default function Brightness() {
  return (
    <div className="flex flex-wrap justify-around p-3">
      <img src={bernie} alt="bernie" className="w-[15%] brightness-0" />
      <img src={bernie} alt="bernie" className="w-[15%] brightness-50" />
      <img src={bernie} alt="bernie" className="w-[15%] brightness-75" />
      <img src={bernie} alt="bernie" className="w-[15%] brightness-90" />
      <img src={bernie} alt="bernie" className="w-[15%] brightness-100" />
      <img src={bernie} alt="bernie" className="w-[15%] brightness-125" />
      <img src={bernie} alt="bernie" className="w-[15%] brightness-200" />
    </div>
  )
}
