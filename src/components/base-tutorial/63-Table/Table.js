import React from "react"

export default function Table() {
  return (
    <>
      <table className="border-separate border-spacing-2 table-auto border border-slate-500 w-[500px] m-auto bg-slate-200">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">First Name</th>
            <th className="border border-slate-600 ...">Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 ...">Bob</td>
            <td className="border border-slate-700 ...">Booty</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Ralph</td>
            <td className="border border-slate-700 ...">Sandwich</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Melissa</td>
            <td className="border border-slate-700 ...">Cereal</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Jeffrey</td>
            <td className="border border-slate-700 ...">
              The Town Pizza and Sweet Potato Eater
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
