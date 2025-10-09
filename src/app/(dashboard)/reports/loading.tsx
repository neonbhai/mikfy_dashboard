export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6">
      <div className="animate-pulse">
        {/* Page Title skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-96"></div>
        </div>

        {/* Financial Chart */}
        <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 bg-gray-200 rounded w-40"></div>
            <div className="flex gap-2">
              <div className="h-8 bg-gray-200 rounded w-16"></div>
              <div className="h-8 bg-gray-200 rounded w-16"></div>
              <div className="h-8 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
          <div className="h-[400px] bg-gray-200 rounded"></div>
        </div>

        {/* Sales Goal and Donut Chart - 2 columns */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Sales Goal Chart */}
          <div className="flex-1 bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="flex gap-2">
                <div className="h-8 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-[300px] bg-gray-200 rounded"></div>
          </div>

          {/* Donut Chart */}
          <div className="flex-1 bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
            <div className="flex items-center justify-center h-[250px]">
              <div className="h-48 w-48 bg-gray-200 rounded-full"></div>
            </div>
            <div className="space-y-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Signups Line Chart */}
        <div className="bg-white rounded-[20px] border border-[rgba(21,21,21,0.1)] p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="text-right space-y-2">
              <div className="h-8 bg-gray-200 rounded w-20"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
          <div className="h-[300px] bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
