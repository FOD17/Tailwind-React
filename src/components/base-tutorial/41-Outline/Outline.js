import React from "react"

export default function Outline() {
  return (
    <div className="bg-slate-300 p-10">
      <div className="w-[100px] h-[100px] bg-slate-900 m-auto outline-8 outline-amber-400 outline">
        square
      </div>
      <br />
      <div className="w-[100px] h-[100px] bg-slate-900 m-auto border-4 border-rose-500 outline-8 outline-amber-400 outline">
        square
      </div>
    </div>
  )
}
