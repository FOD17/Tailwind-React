import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { AiFillBulb } from 'react-icons/ai';

export default function Animation() {
  return (
    <div className="flex flex-col justify-center p-6 space-y-4 w-52 m-auto">
      <button
        type="button"
        class="bg-indigo-500 text-xl w-[200px] flex justify-center items-center p-5 text-slate-300 rounded-full"
        disabled
      >
        <AiOutlineLoading className="animate-spin h-5 w-5 mr-3 text-slate-100" />
        Animate Spin
      </button>
      <button
        type="button"
        class="bg-indigo-500 text-xl w-[200px] flex justify-center items-center p-5 text-slate-300 rounded-full"
        disabled
      >
        <AiFillBulb className="animate-ping h-5 w-5 mr-3 text-yellow-300" />
        Animate Pin
      </button>
      <button
        type="button"
        class="bg-indigo-500 text-xl w-[200px] flex justify-center items-center p-5 text-slate-300 rounded-full"
        disabled
      >
        <AiFillBulb className="animate-pulse h-5 w-5 mr-3 text-yellow-300" />
        Animate Pulse
      </button>
      <button
        type="button"
        class="bg-indigo-500 text-xl w-[200px] flex justify-center items-center p-5 text-slate-300 rounded-full"
        disabled
      >
        <AiFillBulb className="animate-bounce h-5 w-5 mr-3 text-yellow-300" />
        Animate Bounce
      </button>
    </div>
  );
}
