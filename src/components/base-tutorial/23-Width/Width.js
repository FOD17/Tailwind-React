import React from "react"

export default function Width() {
  return (
    <div>
      <div className="bg-black w-4/6">WIDTH STUFF</div>
      <div className="bg-black w-[600px]">WIDTH STUFF</div>
      <div className="bg-black w-screen">WIDTH STUFF: VW</div>
      <br />
      <h1>WITH FLEX</h1>
      <div className="flex space-x-1">
        <div className="w-1/4 bg-blue-300">1</div>
        <div className="w-1/2 bg-blue-300">2</div>
      </div>
      <br />
      <h1>MIN WIDTH/MAX WIDTH</h1>
      <div className="min-w-0 bg-blue-300">1</div>
      <div className="max-w-lg bg-blue-300">2</div>
      <br />
      <h1>MIN WIDTH Content</h1>
      <div className="w-[100px] bg-blue-300">
        <div className="min-w-min bg-blue-300">
          I really like my dog named Bernie
        </div>
        <div className="min-w-max bg-blue-300">
          I really like my dog named Bernie
        </div>
        <div className="min-w-fit bg-blue-300">
          I really like my dog named Bernie
        </div>
      </div>
    </div>
  )
}
