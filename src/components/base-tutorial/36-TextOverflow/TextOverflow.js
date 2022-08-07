import React from "react"

export default function TextOverflow() {
  return (
    <>
      <div className="w-96 h-12  bg-slate-500">
        <p className="text-3xl  truncate">
          There was one time I forgot pasta sauce at the store and I wanted to
          make spaghetti and I decided to use bbq sauce instead and it was the
          worst ever. Don't do it.
        </p>
      </div>
      <br />
      <div className="w-96 h-12  bg-slate-500">
        <p className="text-3xl overflow-hidden text-ellipsis">
          Tjhd;ajkf;ljhdfljas;hf;dhjfl;kdhfds
        </p>
      </div>
      <br />
      <div className="w-96 h-12  bg-slate-500">
        <p className="text-3xl overflow-hidden text-clip">
          Tjhd;ajkf;ljhdfljas;hf;dhjfl;kdhfds
        </p>
      </div>
    </>
  )
}
