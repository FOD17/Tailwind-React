import React from "react"

export default function Padding() {
  return (
    <div>
      <h1>PADDING!!</h1>
      <div className="flex flex-row gap-5 h-14">
        <div className="pt-6 bg-green-300 mt-2 w-[100px]">pt-6</div>
        <div className="pr-4 bg-green-300 mt-2 w-[100px]">pr-4</div>
        <div className="pb-8 bg-green-300 mt-2 w-[100px]">pb-8</div>
        <div className="pl-2 bg-green-300 mt-2 w-[100px]">pl-2</div>
        <div className="px-4 bg-green-300 mt-2 w-[100px]">px-4</div>
        <div className="py-4 bg-green-300 mt-2 w-[100px]">py-4</div>
        <div className="py-[100px] bg-green-300 mt-2 w-[100px]">py-custom</div>
      </div>
    </div>
  )
}
