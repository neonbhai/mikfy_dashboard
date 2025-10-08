"use client";

import { useState } from "react";

interface SaveButtonProps {
  onSave: () => void;
}

export function SaveButton({ onSave }: SaveButtonProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const handleClick = () => {
    console.log("Save button clicked");
    setIsSaving(true);

    // Call the parent's save handler
    onSave();

    // Simulate save operation
    setTimeout(() => {
      setIsSaving(false);
      setShowDone(true);
      console.log("Save completed - showing Done");

      // Reset back to "Save Edits" after 2 seconds
      setTimeout(() => {
        setShowDone(false);
        console.log("Resetting to Save Edits");
      }, 2000);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSaving || showDone}
      className="px-10 py-5 bg-[#1D222E] text-white text-base leading-[1.25] font-normal rounded-[390px] hover:bg-[#2a3040] active:scale-95 active:bg-[#0f1419] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#1D222E] disabled:active:scale-100 relative overflow-hidden"
    >
      <span
        className={`inline-block transition-all duration-300 ${
          showDone ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {isSaving ? "Saving..." : "Save Edits"}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          showDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Done
      </span>
    </button>
  );
}

