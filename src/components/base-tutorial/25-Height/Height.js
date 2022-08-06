import React from "react"

export default function Height() {
  return (
    <div className="flex h-[500px] space-x-2 bg-cyan-200">
      <div class="h-96 bg-cyan-500 px-4">h-96</div>
      <div class="h-80 bg-cyan-500 px-4">h-80</div>
      <div class="h-64 bg-cyan-500 px-4">h-64</div>
      <div class="h-48 bg-cyan-500 px-4">h-48</div>
      <div class="h-40 bg-cyan-500 px-4">h-40</div>
      <div class="h-32 bg-cyan-500 px-4">h-32</div>
      <div class="h-24 bg-cyan-500 px-4">h-24</div>
      <div class="min-h-full bg-cyan-500 px-4">min h full</div>
      <div class="max-h-8 bg-cyan-500 px-4">max h full</div>
      <div class="max-h-[480px] bg-cyan-500 px-4">Custom Max Height</div>
    </div>
  )
}
