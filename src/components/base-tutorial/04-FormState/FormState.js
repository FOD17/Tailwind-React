import React from 'react';

export default function FormState() {
  return (
    <div className="md:container px-10 py-4 bg-slate-300 mx-auto">
      <form>
        <label class="block">
          <span class="block font-bold text-slate-700 text-2xl">Username</span>
          <input
            type="text"
            placeholder="Bernie, the Dog"
            class="mt-1 block w-full px-3 py-2 text-2xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>

        <label class="block">
          <span class="block font-bold text-slate-700 text-2xl">
            Email, for spam...
          </span>
          <input
            type="Email"
            placeholder="Bernie, the Dog"
            class="mt-1 block w-full px-3 py-2 text-2xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
          />
        </label>
      </form>
    </div>
  );
}
