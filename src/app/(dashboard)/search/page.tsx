import Link from "next/link";

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      {/* Main message */}
      <div className="text-center">
        <h1 className="text-[32px] font-normal text-[#151515] leading-[1.2]">
          Connect Shopify to see search results
        </h1>
      </div>

      {/* Back to Home link */}
      <Link
        href="/overview"
        className="text-[16px] font-normal text-[#151515] underline hover:opacity-70 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  );
}

