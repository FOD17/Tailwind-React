import React from "react"

export default function JustifyAlign() {
  return (
    <div>
      <h1>Justify for Flexbox: justify </h1>
      <div className="flex p-10  justify-between bg-purple-300">
        <div className="bg-violet-400 text-xl w-[100px] h-[50px] rounded">
          01
        </div>
        <div className="bg-violet-600 text-xl w-[100px] h-[50px] rounded">
          02
        </div>
        <div className="bg-violet-400 text-xl w-[100px] h-[50px] rounded">
          03
        </div>
      </div>
      <br />
      <h1>Justify for Flexbox: items </h1>
      <div className="flex h-[300px]  justify-between items-baseline bg-purple-300 border-2 border-stone-900">
        <div className="bg-violet-400 text-xl w-[100px] h-[50px] rounded border-2 border-stone-900">
          01
        </div>
        <div className="bg-violet-600 text-xl w-[100px] h-[50px] rounded border-2 border-stone-900">
          02
        </div>
        <div className="bg-violet-400 text-xl w-[100px] h-[50px] rounded border-2 border-stone-900">
          03
        </div>
      </div>
    </div>
  )
}
