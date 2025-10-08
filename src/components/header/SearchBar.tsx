"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Sync with URL params
  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchQuery(query);
  }, [searchParams]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex items-center gap-2 px-4 py-3 border border-[#1E1E1E]/10 rounded-full w-[488px] h-[40px]"
    >
      <Image src="/icons/search-icon.svg" alt="Search" width={16} height={16} />
      <input
        type="text"
        placeholder="Search for products, analytics etc..."
        className="flex-1 bg-transparent outline-none text-base text-[#737373] placeholder:text-[#737373] font-normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

