import React from "react"

export default function Columns() {
  const stupidSquare = () => {
    return <div className="bg-gray-200 rounded-lg px-3 py-3 shadow-xl"></div>
  }
  return (
    <div className="container mx-auto px-5 py-5 bg-gray-300">
      <div className="space-y-6 md:columns-4 sm:columns-2 ">
        {Array.from({ length: 12 }).map((_, index) => {
          return stupidSquare()
        })}
      </div>
    </div>
  )
}
