"use client";

import { AlertTriangle, Info, CheckCircle, Filter } from "lucide-react";

interface NotificationItem {
  id: string;
  type: "warning" | "info" | "success";
  message: string;
  action: string;
}

const notifications: NotificationItem[] = [
  {
    id: "1",
    type: "warning",
    message: "18 products have low stock levels",
    action: "Review Inventory →",
  },
  {
    id: "2",
    type: "info",
    message: "5 B2B orders require approval",
    action: "Review Order →",
  },
  {
    id: "3",
    type: "success",
    message: "Monthly revenue goal achieved",
    action: "View Analytics →",
  },
];

const typeConfig = {
  warning: {
    bgColor: "bg-[#B5200C]",
    textColor: "text-[#B5200C]",
    label: "Warning",
    icon: AlertTriangle,
  },
  info: {
    bgColor: "bg-[#747474]",
    textColor: "text-[#747474]",
    label: "info",
    icon: Info,
  },
  success: {
    bgColor: "bg-[#406146]",
    textColor: "text-[#406146]",
    label: "Success",
    icon: CheckCircle,
  },
};

export default function NotificationPanel() {
  return (
    <div className="bg-white rounded-[20px] border-[0.5px] border-[rgba(21,21,21,0.1)] p-[23px_30px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[30px]">
        <div className="flex items-center gap-[15px]">
          <div className="w-[30px] h-[30px] bg-[#1D222E] rounded-[5px] flex items-center justify-center">
            <span className="text-white text-xl">✨</span>
          </div>
          <h2 className="text-[20px] font-normal leading-[1em] text-[#151515]">
            Alert & Notification
          </h2>
        </div>
        <button className="w-[30px] h-[30px] flex items-center justify-center">
          <Filter className="w-5 h-5 text-[#151515]" />
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex flex-col gap-[15px]">
        {notifications.map((notification) => {
          const config = typeConfig[notification.type];
          return (
            <div
              key={notification.id}
              className="bg-white border-[0.5px] border-[#F3F3EE] rounded-[10px] p-4"
            >
              <div className="flex flex-col gap-[10px]">
                {/* Message and Badge */}
                <div className="flex justify-between items-start gap-10">
                  <p className="text-[20px] font-normal leading-[1em] text-[#151515]">
                    {notification.message}
                  </p>
                  <div
                    className={`${config.bgColor} rounded-full px-[15px] py-[10px] h-[24px] flex items-center justify-center`}
                  >
                    <span className="text-[14px] font-normal leading-[1em] text-white">
                      {config.label}
                    </span>
                  </div>
                </div>

                {/* Action Link */}
                <a
                  href="#"
                  className="text-[14px] font-light leading-[1.3em] text-[#B5200C] hover:underline"
                >
                  {notification.action}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
