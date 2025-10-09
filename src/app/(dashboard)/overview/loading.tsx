export default function Loading() {
  return (
    <div className="min-h-screen p-6">
      <div className="animate-pulse">
        {/* Page Title skeleton */}
        <div className="max-w-[1600px] mx-auto mb-6">
          <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-96"></div>
        </div>

        {/* Stats Cards - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 max-w-[1600px] mx-auto mb-6">
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

        {/* Notifications and Recent Orders - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1600px] mx-auto mb-6">
          {/* Notifications skeleton */}
          <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-[23px_30px]">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="flex items-center gap-[15px]">
                <div className="h-[30px] w-[30px] bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-48"></div>
              </div>
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#F3F3EE] rounded-[10px] p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="h-5 bg-gray-200 rounded w-48"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-32"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders skeleton */}
          <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-[23px_30px]">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="flex items-center gap-[15px]">
                <div className="h-[30px] w-[30px] bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-[rgba(30,30,30,0.1)] rounded-[10px] p-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[11px]">
                      <div className="h-[51px] w-[51px] bg-gray-200 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-5 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                      </div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Stats Cards - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 max-w-[1600px] mx-auto mb-6">
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

        {/* Billing & Invoice skeleton */}
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-[18px_30px]">
            <div className="flex justify-between items-center mb-[27px]">
              <div className="flex items-center gap-[15px]">
                <div className="h-[30px] w-[30px] bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded-full w-[316px]"></div>
            </div>
            {/* Table header */}
            <div className="bg-[#F2F2F2] rounded-[10px] p-4 mb-2">
              <div className="flex justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-300 rounded w-20"></div>
                ))}
              </div>
            </div>
            {/* Table rows */}
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex justify-between items-center py-3">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-200 rounded w-20"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
