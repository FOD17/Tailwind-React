import React from "react"

/**
 * Can put flex in parent component to make flex or use grid for obvious outcomes
 * Pretty much just type the display value and it will apply to all children or itself
 *
 */
export default function Display() {
  return (
    <div className="flex">
      <div className=" text-2xl bg-gray-700 text-fuchsia-500">Display One</div>
      <div className="hidden text-2xl bg-gray-700 text-fuchsia-500">
        Display Two
      </div>
    </div>
  )
}
