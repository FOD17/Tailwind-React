import React from "react"

/**
 *
 * Use invisible to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with .hidden from the display documentation).
 */
export default function Visibility() {
  return (
    <div>
      <div className="bg-fuchsia-300 invisible rounded-full w-1/4 text-4xl text-center p-9">
        Silly Circle
      </div>
      <div className="bg-fuchsia-300  visible rounded-full w-1/4 text-4xl text-center p-9 mt-9">
        Silly Circle
      </div>
    </div>
  )
}
