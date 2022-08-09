import React from "react"

export default function Border() {
  return (
    <div>
      <div className="text-2xl mt-5 border-solid border-gray-500 border-2">
        Example #1
      </div>
      <div className="text-2xl mt-5 border-dotted border-gray-600 border-4">
        Example #2
      </div>
      <div className="text-2xl mt-5 border-dashed border-gray-700 border-8">
        Example #3
      </div>
      <div className="w-[100px] text-2xl mt-5 border-solid border-gray-500 border-2 rounded-3xl">
        Example #1
      </div>
    </div>
  )
}
