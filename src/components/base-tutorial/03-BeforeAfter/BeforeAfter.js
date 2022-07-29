import React from 'react';

export default function BeforeAfter() {
  return (
    <>
      <div>
        <blockquote class=" mt-10 text-2xl font-semibold italic text-center text-slate-900">
          You totally should
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500  relative inline-block">
            <span class="relative text-white text-3xl inline-block mx-3">
              Subscribe to my channel
            </span>
          </span>
          or I will cry and soil myself.
        </blockquote>
      </div>
      <div>
        <p className="p-10 mt-10 text-2xl font-semibold after:content-['because it sucks@']">
          THis won't work
        </p>
        <p
          before=" becaue I am smart."
          className="p-10 mt-10 text-2xl font-semibold after:content-[attr(before)]"
        >
          THis will work
        </p>
        <p className="p-10 mt-10 text-2xl font-semibold after:content-['_because_I_am_smart']">
          This will also work
        </p>
      </div>
    </>
  );
}
