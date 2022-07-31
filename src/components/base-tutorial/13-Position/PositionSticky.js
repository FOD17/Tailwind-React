import React from 'react';

/**
 *
 * static: as is in flow
 * relative: Use relative to position an element according to the normal flow of the document.
 * absolute: Use absolute to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn’t exist.
 * sticky: Use sticky to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen.
 * fixed: An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
 */
export default function PositionSticky() {
  return (
    <div class="static bg-orange-100 p-5 h-[5000px]">
      <p>Static parent</p>
      <div class="sticky bottom-0 left-0 top-0 bg-orange-400 p-5">
        <p>Child</p>
      </div>
    </div>
  );
}
