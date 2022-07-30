import React from 'react';

/**
 *
 * static: as is in flow
 * relative: Use relative to position an element according to the normal flow of the document.
 * absolute: Use absolute to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn’t exist.
 * sticky: Use sticky to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen.
 * fixed: Use fixed to position an element relative to the browser window.
 */
export default function Position() {
  return (
    <div>
      <div class="static bg-orange-100 p-5">
        <p>Static parent</p>
        <div class="fixed bottom-0 left-10  bg-orange-400 p-5">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
