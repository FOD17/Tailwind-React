import React from "react"

/**
 * 
 * The container class sets the max-width of an element to match the min-width of the current * breakpoint. This is useful if you’d prefer to design for a fixed set of screen 
 * sizes * instead of trying to accommodate a fully fluid viewport.

 * Note that unlike containers you might have used in other frameworks, Tailwind’s 
 * container does not center itself automatically and does not have any built-in horizontal  * padding.
 */

export default function TailwindContainer() {
  return (
    <>
      <div className="container mx-auto text-center px-5 py-5 bg-gray-300">
        <p className="text-amber-600-900">Tailwind Standard Container</p>
      </div>
      <div className="sm:container sm:mx-auto sm:text-center px-5 py-5 bg-gray-500">
        <p className="text-amber-800">Responsive Small Container sm (640px)</p>
      </div>
      <div className="md:container md:mx-auto md:text-center px-5 py-5 bg-gray-600">
        <p className="text-amber-700">Responsive Medium Container md (768px)</p>
      </div>
      <div className="lg:container lg:mx-auto lg:text-center px-5 py-5 bg-gray-700">
        <p className="text-amber-600">Responsive Large Container lg (1024px)</p>
      </div>
      <div className="xl:container xl:mx-auto xl:text-center px-5 py-5 bg-gray-800">
        <p className="text-amber-500">
          Responsive Extra Large Large Container xl (1280px)
        </p>
      </div>
      <div className="2xl:container 2xl:mx-auto 2xl:text-center px-5 py-5 bg-gray-900">
        <p className="text-amber-600">
          Responsive Extra Extra Large Large Container 2xl (1536px)
        </p>
      </div>
    </>
  )
}
