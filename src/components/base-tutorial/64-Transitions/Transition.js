import React from 'react';

export default function Transition() {
  return (
    <div className="flex flex-col justify-center p-6 space-y-4 w-52 m-auto">
      <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-3 text-2xl">
        Save Changes
      </button>
      <button className="transition-colors ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-3 text-2xl">
        Save Changes
      </button>
    </div>
  );
}
