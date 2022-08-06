import React from "react"

export default function SpaceBetween() {
  return (
    <div>
      <h1>Can be used for Flex or Grid: Impacts all but first item</h1>
      <div className="flex space-x-6  space-y-6">
        <div className="rounded bg-purple-500 w-14 h-14">01</div>
        <div className="rounded bg-purple-500 w-14 h-14">02</div>
        <div className="rounded bg-purple-500 w-14 h-14">03</div>
      </div>
      <br />
      <h1>Can be used for Flex or Grid: Impacts all but first item</h1>
      <div className="flex flex-row-reverse space-x-6 space-x-reverse space-y-6 ">
        <div className="rounded bg-purple-500 w-14 h-14">01</div>
        <div className="rounded bg-purple-500 w-14 h-14">02</div>
        <div className="rounded bg-purple-500 w-14 h-14">03</div>
      </div>
    </div>
  )
}
