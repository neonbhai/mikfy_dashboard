export default function Loading() {
  return (
    <div className="min-h-screen p-6">
      <div className="animate-pulse">
        {/* Page Title skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-80"></div>
        </div>

        {/* Avatar and Status */}
        <div className="flex items-center gap-[26px] mt-8 mb-8">
          <div className="h-[100px] w-[100px] bg-gray-200 rounded-full"></div>
          <div className="flex items-center gap-[5px]">
            <div className="h-2.5 w-2.5 bg-gray-200 rounded-full"></div>
            <div className="h-5 bg-gray-200 rounded w-16"></div>
          </div>
        </div>

        {/* Form Fields - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[36px] gap-y-[31px]">
          {/* Left Column */}
          <div className="space-y-[31px]">
            {/* User Name */}
            <div className="flex flex-col gap-[15px]">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-[52px] bg-[#ECECEC] rounded-lg w-full"></div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[15px]">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-[52px] bg-[#ECECEC] rounded-lg w-full"></div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[15px]">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-[52px] bg-[#ECECEC] rounded-lg w-full"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-[31px]">
            {/* Phone Number */}
            <div className="flex flex-col gap-[15px]">
              <div className="h-4 bg-gray-200 rounded w-28"></div>
              <div className="h-[52px] bg-[#ECECEC] rounded-lg w-full"></div>
            </div>

            {/* Role */}
            <div className="flex flex-col gap-[15px]">
              <div className="h-4 bg-gray-200 rounded w-12"></div>
              <div className="h-[52px] bg-[#ECECEC] rounded-lg w-full"></div>
            </div>

            {/* Department */}
            <div className="flex flex-col gap-[15px]">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-[52px] bg-[#ECECEC] rounded-lg w-full"></div>
            </div>
          </div>
        </div>

        {/* Reset Password Link */}
        <div className="mt-[19px]">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>

        {/* Save Button */}
        <div className="mt-[41px]">
          <div className="h-[52px] bg-gray-200 rounded-lg w-32"></div>
        </div>
      </div>
    </div>
  );
}
