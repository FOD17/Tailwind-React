import React from "react"

export default function ListStyleType() {
  return (
    <div>
      <ul className="p-5 ml-4 text-2xl list-none ">
        <li>Pizza</li>
        <li>Bernie</li>
        <li>Hasbrowns</li>
      </ul>
      <ul className="p-5 ml-4 text-2xl list-disc ">
        <li>Pizza</li>
        <li>Bernie</li>
        <li>Hasbrowns</li>
      </ul>
      <ul className="p-5 ml-4 text-2xl list-decimal ">
        <li>Pizza</li>
        <li>Bernie</li>
        <li>Hasbrowns</li>
      </ul>
      <ul className="p-5 ml-4 text-2xl list-decimal ">
        <li>Pizza</li>
        <li>Bernie</li>
        <ul className="p-5 ml-4 text-2xl list-disc ">
          <li>Pizza</li>
          <li>Bernie</li>
          <li>Hasbrowns</li>
        </ul>
      </ul>
    </div>
  )
}
