import React from "react";

export default function Loader() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="h-10 w-10 border-4 border-current border-t-transparent rounded-full animate-spin text-black dark:text-white" aria-label="Loading" role="status" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}


