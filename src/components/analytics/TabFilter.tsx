"use client";

interface TabFilterProps<T extends string> {
  options: readonly T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

export default function TabFilter<T extends string>({
  options,
  activeTab,
  onTabChange,
}: TabFilterProps<T>) {
  return (
    <div className="bg-[#F8F8FF] rounded-[10px] p-[6px]">
      <div className="flex gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onTabChange(option)}
            className={`px-4 py-2.5 text-sm uppercase tracking-[0.06em] transition-all ${
              activeTab === option
                ? "bg-[#1E1B39] text-white rounded-[10px]"
                : "text-[#9291A5]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
