import React from "react"

export default function ListStylePosition() {
  return (
    <div>
      <h1 className="text-4xl mb-8">How to order food online</h1>
      <ul class="list-inside ml-10 list-disc p-6 space-y-2  text-4xl max-w-[400px] bg-slate-300">
        <li>Pick up the phone and open a delivery app</li>
        <li>Look at the dozens of choices in your area</li>
        <li>Let out a massive sigh as you can't decide</li>
        <li>
          Start an order, then realize it won't make you happy then close the
          app
        </li>
        <li>Starting cleaning your place</li>
        <li>
          Open the delivery app later and realize everywhere but Denny's is
          closed
        </li>
      </ul>

      <ul class="list-outside ml-10 list-none p-6 space-y-2  text-4xl max-w-[400px] bg-slate-500">
        <li>Pick up the phone and open a delivery app</li>
        <li>Look at the dozens of choices in your area</li>
        <li>Let out a massive sigh as you can't decide</li>
        <li>
          Start an order, then realize it won't make you happy then close the
          app
        </li>
        <li>Starting cleaning your place</li>
        <li>
          Open the delivery app later and realize everywhere but Denny's is
          closed
        </li>
      </ul>
    </div>
  )
}
