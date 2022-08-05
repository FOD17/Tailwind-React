import React from "react"

export default function ZIndex() {
  return (
    <div className="flex justify-center   p-6 border-2 bg-slate-200">
      <div className="bg-fuchsia-200 rounded-full z-40 w-[100px] text-center text-2xl relative left-16 border-2 border-slate-500">
        1
      </div>
      <div className="bg-fuchsia-200 rounded-full z-30 w-[100px] text-center text-2xl relative left-11 border-2 border-slate-500">
        2
      </div>
      <div className="bg-fuchsia-200 rounded-full z-20 w-[100px] text-center text-2xl relative left-7 border-2 border-slate-500">
        3
      </div>
      <div className="bg-fuchsia-200 rounded-full z-10 w-[100px] text-center text-2xl relative left-3 border-2 border-slate-500">
        4
      </div>
    </div>
  )
}
