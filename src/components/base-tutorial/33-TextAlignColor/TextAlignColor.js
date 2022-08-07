import React from "react"

/**
 *
 *   text-left	    text-align: left;
 *   text-center	text-align: center;
 *   text-right	    text-align: right;
 *   text-justify	text-align: justify;
 *   text-start	    text-align: start;
 *   text-end	    text-align: end;
 */

export default function TextAlignColor() {
  return (
    <>
      <div className="bg-pink-100 p-6 m-auto max-w-[800px]">
        <h1 className="text-4xl p-6"> Text Align</h1>
        <p className="text-2xl text-justify">
          "Fourscore and seven years ago our fathers brought forth, on this
          continent, a new nation, conceived in liberty, and dedicated to the
          proposition that all men are created equal. Now we are engaged in a
          great civil war, testing whether that nation, or any nation so
          conceived, and so dedicated, can long endure. We are met on a great
          battle-field of that war. We have come to dedicate a portion of that
          field, as a final resting-place for those who here gave their lives,
          that that nation might live.
        </p>

        <br />
        <h1 className="text-4xl p-6"> Text Color</h1>
        <p className="text-2xl text-justify text-slate-800">
          "Fourscore and seven years ago our fathers brought forth, on this
          continent, a new nation, conceived in liberty, and dedicated to the
          proposition that all men are created equal. Now we are engaged in a
          great civil war, testing whether that nation, or any nation so
          conceived, and so dedicated, can long endure. We are met on a great
          battle-field of that war. We have come to dedicate a portion of that
          field, as a final resting-place for those who here gave their lives,
          that that nation might live.
        </p>
        <br />
        <h1 className="text-4xl p-6"> Text Color:Opacity</h1>
        <p className="text-2xl text-justify text-slate-800/75">
          "Fourscore and seven years ago our fathers brought forth, on this
          continent, a new nation, conceived in liberty, and dedicated to the
          proposition that all men are created equal. Now we are engaged in a
          great civil war, testing whether that nation, or any nation so
          conceived, and so dedicated, can long endure. We are met on a great
          battle-field of that war. We have come to dedicate a portion of that
          field, as a final resting-place for those who here gave their lives,
          that that nation might live.
        </p>
        <br />
        <h1 className="text-4xl p-6"> Text Color:Opacity Alternate</h1>
        <p className="text-2xl text-justify text-slate-800/[.06]">
          "Fourscore and seven years ago our fathers brought forth, on this
          continent, a new nation, conceived in liberty, and dedicated to the
          proposition that all men are created equal. Now we are engaged in a
          great civil war, testing whether that nation, or any nation so
          conceived, and so dedicated, can long endure. We are met on a great
          battle-field of that war. We have come to dedicate a portion of that
          field, as a final resting-place for those who here gave their lives,
          that that nation might live.
        </p>
      </div>
    </>
  )
}
