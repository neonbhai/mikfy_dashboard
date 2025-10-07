"use client";

import React from "react";
import { HomeIcon } from "../icons";

type BizMode = "b2b" | "b2c";

type BizSwitcherProps = {
  defaultMode?: BizMode;
  onChange?: (mode: BizMode) => void;
};

export default function BizSwitcher({
  defaultMode = "b2c",
  onChange,
}: BizSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<BizMode>(defaultMode);

  React.useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem("bizMode")) as BizMode | null;
    if (saved === "b2b" || saved === "b2c") setMode(saved);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("bizMode", mode);
    onChange?.(mode);
    console.log("[BizSwitcher] mode", mode);
  }, [mode, onChange]);

  const select = (m: BizMode) => {
    setMode(m);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between gap-2 rounded-[10px] bg-white text-[#1D222E] px-4 py-2 h-11 w-full"
      >
        <span className="flex items-center gap-2">
          <HomeIcon className="text-[#1D222E]" />
          <span className="text-sm">{mode.toUpperCase()}</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1D222E]/70"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <div className="absolute left-0 top-full mt-2 w-full rounded-xl bg-white text-[#1D222E] shadow-lg ring-1 ring-black/5">
          {(["b2b", "b2c"] as BizMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => select(m)}
              className={[
                "w-full text-left px-4 py-2.5 flex items-center gap-2",
                mode === m ? "bg-[#1D222E]/5 font-medium" : "hover:bg-black/5",
              ].join(" ")}
            >
              <span className="text-sm uppercase">{m}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
