import React from "react"

export default function TRBL() {
  return (
    <div>
      <div class="relative h-32 w-32 bg-slate-400">
        <div class="absolute rounded-full bottom-0 left-0 h-16 w-16 bg-red-300 text-center">
          07
        </div>
      </div>
      <br />
      <div class="relative h-32 w-32 bg-slate-400">
        <div class="absolute rounded-full bottom-0 right-0 h-16 w-16 bg-red-300 text-center">
          07
        </div>
      </div>
      <br />
      <div class="relative h-32 w-32 bg-slate-400">
        <div class="absolute rounded-full top-0 right-0 h-16 w-16 bg-red-300 text-center">
          07
        </div>
      </div>
      <br />
      <div class="relative h-32 w-32 bg-slate-400">
        <div class="absolute rounded-full top-0 left-0 h-16 w-16 bg-red-300 text-center">
          07
        </div>
      </div>
    </div>
  )
}
