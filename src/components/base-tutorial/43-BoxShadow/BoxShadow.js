import React from "react"

export default function BoxShadow() {
  return (
    <>
      <div className="flex justify-around p-4 bg-slate-100">
        <div className="w-[100px] h-[150px] shadow-sm">BoxShadow</div>
        <div className="w-[100px] h-[150px] shadow-md">BoxShadow</div>
        <div className="w-[100px] h-[150px] shadow-lg">BoxShadow</div>
        <div className="w-[100px] h-[150px] shadow-xl">BoxShadow</div>
        <div className="w-[100px] h-[150px] shadow-2xl">BoxShadow</div>
        <div className="w-[100px] h-[150px] shadow-inner">BoxShadow</div>
      </div>
      <br />
      <div className="flex justify-around p-4 bg-slate-100">
        <div className="w-[100px] h-[150px] shadow-stone-400 shadow-sm">
          BoxShadow
        </div>
        <div className="w-[100px] h-[150px] shadow-stone-400 shadow-md">
          BoxShadow
        </div>
        <div className="w-[100px] h-[150px] shadow-stone-400 shadow-lg">
          BoxShadow
        </div>
        <div className="w-[100px] h-[150px] shadow-stone-400 shadow-xl">
          BoxShadow
        </div>
        <div className="w-[100px] h-[150px] shadow-stone-400 shadow-2xl">
          BoxShadow
        </div>
        <div className="w-[100px] h-[150px] shadow-stone-400 shadow-inner">
          BoxShadow
        </div>
      </div>
    </>
  )
}
