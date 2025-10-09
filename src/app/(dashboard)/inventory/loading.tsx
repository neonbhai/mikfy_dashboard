export default function Loading() {
  return (
    <div className="min-h-screen p-6">
      <div className="animate-pulse">
        {/* Page Title skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-80"></div>
        </div>

        {/* Stats Cards - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 mb-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-[20px] border border-[rgba(21,21,21,0.1)]"
            >
              <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
              <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-28"></div>
            </div>
          ))}
        </div>

        {/* Product Catalog Card */}
        <div className="w-full bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] p-[23px_30px]">
          {/* Inventory Header */}
          <div className="flex justify-between items-center mb-[30px]">
            <div className="flex items-center gap-[15px]">
              <div className="h-[30px] w-[30px] bg-gray-200 rounded"></div>
              <div className="h-5 bg-gray-200 rounded w-48"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 bg-gray-200 rounded w-32"></div>
              <div className="h-10 w-10 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="flex flex-col gap-[15px]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] p-[23px_30px]"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="h-[162px] w-[162px] bg-gray-200 rounded-[10px]"></div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 rounded w-64"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                      <div className="h-5 bg-gray-200 rounded w-24"></div>
                    </div>

                    {/* Stock Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="h-3 bg-gray-200 rounded w-16"></div>
                        <div className="h-3 bg-gray-200 rounded w-20"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-end justify-between">
                    <div className="h-6 bg-gray-200 rounded-full w-12"></div>
                    <div className="flex gap-2">
                      <div className="h-10 w-10 bg-gray-200 rounded"></div>
                      <div className="h-10 w-10 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
