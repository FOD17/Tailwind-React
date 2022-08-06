import React from "react"

export default function Grid() {
  return (
    <div>
      <h1>Grid Fun: setup Basic </h1>
      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="bg-slate-400 rounded">01</div>
        <div className="bg-slate-400 rounded">02</div>
        <div className="bg-slate-400 rounded">03</div>
        <div className="bg-slate-400 rounded">04</div>
        <div className="bg-slate-400 rounded">05</div>
        <div className="bg-slate-400 rounded">06</div>
        <div className="bg-slate-400 rounded">07</div>
        <div className="bg-slate-400 rounded">08</div>
        <div className="bg-slate-400 rounded">09</div>
      </div>
      <br />
      <h1>Grid Col-Span: Basic </h1>
      <div class="grid grid-cols-3  gap-4">
        <div className="bg-slate-400 rounded">01</div>
        <div className="bg-slate-600 rounded col-span-2">02</div>
        <div className="bg-slate-400 rounded">03</div>
        <div className="bg-slate-400 rounded">04</div>
        <div className="bg-slate-400 rounded">05</div>
        <div className="bg-slate-400 rounded">06</div>
        <div className="bg-slate-600 rounded col-span-2">07</div>
        <div className="bg-slate-400 rounded">08</div>
        <div className="bg-slate-400 rounded">09</div>
      </div>
      <br />
      <h1>Grid Row Span: Basic </h1>
      <div class="grid grid-rows-5 grid-flow-col gap-4">
        <div className="bg-slate-400 rounded">01</div>
        <div className="bg-slate-600 rounded ">02</div>
        <div className="bg-slate-400 rounded">03</div>
        <div className="bg-slate-400 rounded">04</div>
        <div className="bg-slate-400 rounded">05</div>
        <div className="bg-slate-400 rounded">06</div>
        <div className="bg-slate-600 rounded ">07</div>
        <div className="bg-slate-400 rounded">08</div>
        <div className="bg-slate-400 rounded">09</div>
      </div>
      <h1>Grid Row-Span: Basic </h1>
      <div class="grid grid-rows-5 grid-flow-col gap-4">
        <div className="bg-slate-400 rounded col-span-2">01</div>
        <div className="bg-slate-600 rounded row-span-3">02</div>
        <div className="bg-slate-400 rounded">03</div>
        <div className="bg-slate-400 rounded">04</div>
        <div className="bg-slate-400 rounded">05</div>
        <div className="bg-slate-400 rounded">06</div>
        <div className="bg-slate-600 rounded row-span-3">07</div>
        <div className="bg-slate-400 rounded">08</div>
        <div className="bg-slate-400 rounded">09</div>
      </div>
    </div>
  )
}
