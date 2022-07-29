import React from 'react';

export default function DarkMode() {
  return (
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 shadow-xl">
      <h3 class="text-slate-900 dark:text-white mt-5 font-medium ">
        Some text right here because we can
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Watch as I turn on Dark Mode...somehow
      </p>
    </div>
  );
}
