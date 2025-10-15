export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="animate-pulse flex flex-col items-center gap-8">
        {/* Search illustration placeholder */}
        <div className="h-[200px] w-[200px] bg-gray-200 rounded-lg"></div>

        {/* Main message skeleton */}
        <div className="text-center space-y-2">
          <div className="h-10 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>

        {/* Back to Home button skeleton */}
        <div className="h-10 bg-gray-200 rounded-md w-32"></div>
      </div>
    </div>
  );
}
