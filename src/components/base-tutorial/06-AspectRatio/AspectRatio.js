import React from 'react';

/**
 *
 * aspect-auto	aspect-ratio: auto; this means  The default value, which specifies that the element has no preferred aspect ratio and should size itself as it normally would. Therefore, replaced elements, like images with an intrinsic aspect ratio, use that aspect ratio. source: https://css-tricks.com/almanac/properties/a/aspect-ratio/
 *
 * aspect-square	aspect-ratio: 1 / 1; this means equal width and height
 *
 * aspect-video	aspect-ratio: 16 / 9; this is the typical view
 *
 * Example Below: use w-full to make the width full to make the changes more apparent
 */

export default function AspectRatio() {
  return (
    <iframe
      className="w-full aspect-video"
      src="https://www.youtube.com/embed/CwzcQTGqN6A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
