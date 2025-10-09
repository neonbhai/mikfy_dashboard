export default function Loading() {
  return (
    <div className="min-h-screen p-8">
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

        {/* Attention Orders and Order Timeline - 2 columns */}
        <div className="flex flex-row gap-6 items-start mb-6">
          {/* Attention Orders */}
          <div className="bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] p-[23px_30px] w-full max-w-[521px]">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="flex items-center gap-[15px]">
                <div className="h-[30px] w-[30px] bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-40"></div>
              </div>
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-[rgba(21,21,21,0.1)] rounded-[10px] p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="h-5 bg-gray-200 rounded w-28"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-40"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-48"></div>
                  </div>
                  <div className="mt-3 h-9 bg-gray-200 rounded-lg w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Timeline */}
          <div className="bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] p-[23px_30px] w-full">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="flex items-center gap-[15px]">
                <div className="h-[30px] w-[30px] bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-[rgba(21,21,21,0.1)] rounded-[10px] p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-5 bg-gray-200 rounded w-32"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded w-48"></div>
                    <div className="h-4 bg-gray-200 rounded w-28"></div>
                  </div>
                  {/* Timeline steps */}
                  <div className="flex items-center gap-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="flex-1">
                        <div className="h-8 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-3 bg-gray-200 rounded w-20"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Orders List */}
        <div className="bg-white border border-[rgba(21,21,21,0.1)] rounded-[20px] p-[23px_30px]">
          <div className="flex justify-between items-center mb-[30px]">
            <div className="h-5 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-40"></div>
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="border-b border-[rgba(21,21,21,0.1)] pb-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-28"></div>
                    <div className="h-3 bg-gray-200 rounded w-40"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded"></div>
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
