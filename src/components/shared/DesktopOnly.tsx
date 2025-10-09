import React from "react";

/**
 * DesktopOnly component
 * Displays a full-screen message on screens smaller than 1024px
 * informing users to open the application on desktop
 */
export default function DesktopOnly() {
  return (
    <div className="lg:hidden fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <rect
              x="2"
              y="3"
              width="20"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 21H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 17V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Desktop Only
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          This application is optimized for desktop screens. Please open it on a
          device with a screen width of at least 1024px for the best experience.
        </p>
      </div>
    </div>
  );
}
