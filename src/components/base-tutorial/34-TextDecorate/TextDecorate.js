import React from "react"

export default function TextDecorate() {
  return (
    <div className="bg-stone-800 text-center">
      <p className="underline decoration-solid decoration-red-100 text-3xl mt-8 p-6 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-double decoration-red-200 text-3xl mt-8 p-6 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-dotted decoration-red-300 text-3xl mt-8 p-6 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-dashed decoration-red-400 text-3xl mt-8 p-6 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-wavy decoration-red-500 text-3xl mt-8 p-6 text-indigo-500">
        Bernie is my dog
      </p>
      <br />

      <p className="underline decoration-solid decoration-0 under text-3xl mt-8 p-6 underline-offset-0 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-double decoration-1 text-3xl mt-8 p-6 underline-offset-1 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-dotted decoration-2 text-3xl mt-8 p-6 underline-offset-2 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-dashed decoration-4 text-3xl mt-8 p-6 underline-offset-4 text-indigo-500">
        Bernie is my dog
      </p>
      <p className="underline decoration-wavy decoration-8 text-3xl mt-8 p-6 underline-offset-8 text-indigo-500">
        Bernie is my dog
      </p>
    </div>
  )
}
