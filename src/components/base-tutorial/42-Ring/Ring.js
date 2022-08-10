import React from "react"

/**
 *
 * Utilities for creating outline rings with box-shadows.
 */

export default function Ring() {
  return (
    <div className="flex justify-around p-6 bg-slate-700 text-red-200">
      <button class="p-2 rounded ring-offset-2 ring-violet-500 ring">
        Button A
      </button>
      <button class="p-2 rounded ring-offset-2 ring-violet-500 ring-2">
        Button B
      </button>
      <button class="p-2 rounded ring-offset-2 ring-violet-500 ring-4">
        Button C
      </button>
      <button class="p-2 rounded ring-offset-2 ring-violet-500 ring-offset ring-offset-red-600 ring-8">
        Button D
      </button>
    </div>
  )
}
