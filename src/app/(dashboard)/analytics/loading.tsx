export default function Loading() {
  return (
    <div className="min-h-screen p-6">
      <div className="animate-pulse max-w-[1400px] mx-auto">
        {/* Page Title skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
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

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Sales Performance Chart - Full Width */}
          <div className="w-full bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 bg-gray-200 rounded w-48"></div>
              <div className="flex gap-2">
                <div className="h-8 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-[350px] bg-gray-200 rounded"></div>
          </div>

          {/* Bottom Row - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[510px_287px] gap-6">
            {/* Sales By Channel Chart */}
            <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-gray-200 rounded w-40"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="h-[300px] bg-gray-200 rounded"></div>
            </div>

            {/* Popular Countries Chart */}
            <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6">
              <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
