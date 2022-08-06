import React from "react"

/**
 *
 *Use the basis-{size} utilities to set the initial size of flex items.
 */
export default function Flex() {
  return (
    <div>
      <h1>Flex Basis Example</h1>
      <div class="flex flex-row bg-blue-300 p-6 rounded-full">
        <div class="basis-1/4 bg-blue-500 rounded-full">01</div>
        <div class="basis-1/4 bg-blue-500 rounded-full">02</div>
        <div class="basis-1/2 bg-blue-500 rounded-full">03</div>
      </div>
      <br />
      <h1>Flex Direction: row, col, col-reverse, row-reverse</h1>
      <div class="flex flex-col-reverse bg-blue-300 p-6 rounded-full">
        <div class="bg-blue-500 rounded-full w-10 h-10 text-center">01</div>
        <div class="bg-blue-500 rounded-full w-10 h-10 text-center">02</div>
        <div class="bg-blue-500 rounded-full w-10 h-10 text-center">03</div>
      </div>
      <br />
      <h1>Flex Wrap Example: wrap, no-wrap, wrap-reverse</h1>
      <div class="flex flex-row bg-blue-300 p-6 rounded-full flex-wrap">
        <div class="bg-blue-500 rounded-full w-[350px]">01</div>
        <div class="bg-blue-500 rounded-full w-[350px]">02</div>
        <div class="bg-blue-500 rounded-full w-[350px]">03</div>
      </div>
      <br />
      <h1>Flew Grow for taking up available space: 1/0</h1>
      <div class="flex flex-row bg-blue-300 p-6 rounded-full flex-wrap">
        <div class="bg-blue-500 rounded-full grow-0">01</div>
        <div class="bg-blue-500 rounded-full grow">02</div>
        <div class="bg-blue-500 rounded-full grow">03</div>
      </div>
      <br />
      <h1>Flew Shrink for freeing up available space: 1/0</h1>
      <div class="flex flex-row bg-blue-300 p-6 rounded-full flex-wrap">
        <div class="bg-blue-500 rounded-full grow">01</div>
        <div class="bg-blue-500 rounded-full shrink-0 w-[100px]">02</div>
        <div class="bg-blue-500 rounded-full grow">03</div>
      </div>
      <br />
      <h1>Flex Order</h1>
      <div class="flex flex-row bg-blue-300 p-6 rounded-full flex-wrap">
        <div class="bg-blue-500 rounded-full grow order-3">01</div>
        <div class="bg-blue-500 rounded-full grow">02</div>
        <div class="bg-blue-500 rounded-full grow order-1">03</div>
      </div>
    </div>
  )
}
