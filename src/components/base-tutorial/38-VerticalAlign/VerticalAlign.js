import React from "react"

/**
 *
 * Utilities for controlling the vertical alignment of an inline or table-cell box.
 *
 * align-baseline	vertical-align: baseline;
 * align-top	vertical-align: top;
 * align-middle	vertical-align: middle;
 * align-bottom	vertical-align: bottom;
 * align-text-top	vertical-align: text-top;
 * align-text-bottom	vertical-align: text-bottom;
 * align-sub	vertical-align: sub;
 * align-super	vertical-align: super;
 */

export default function VerticalAlign() {
  return (
    <div className="p-8 bg-slate-100">
      <p className="text-3xl">
        Text:
        <span className=" bg-violet-300 text-gray-900 text-3xl align-sub">
          My dog likes to sniff dog's butts
        </span>
      </p>
    </div>
  )
}
