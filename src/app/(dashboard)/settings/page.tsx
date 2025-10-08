"use client";

import { useState } from "react";
import { PageTitle } from "@/components/shared";
import { CustomDropdown, SaveButton } from "@/components/settings";
import Image from "next/image";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    userName: "Mikfy PVT LTD",
    email: "mikfy@co.kr",
    password: "********",
    phoneNumber: "+82-10-1234-5678",
    role: "Administrator",
    department: "Operations",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveEdits = () => {
    // TODO: Implement actual save functionality
  };

  const handleResetPassword = () => {
    // TODO: Implement password reset functionality
  };

  return (
    <div className="min-h-screen p-6">
      <PageTitle
        title="Settings"
        description="Manage your account and system preferences"
      />

      {/* Avatar and Status */}
      <div className="flex items-center gap-[26px] mt-8">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="/avatars/avatar-settings-user.png"
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="w-2.5 h-2.5 rounded-[5px] bg-[rgba(1,171,49,0.23)] flex items-center justify-center p-[2px]">
            <div className="w-[6px] h-[6px] bg-[#01AB31] rounded-full"></div>
          </div>
          <span className="text-[#01AB31] text-xl leading-[1.3] font-normal">
            Active
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[36px] gap-y-0 mt-[31px]">
        {/* Left Column */}
        <div className="space-y-[31px]">
          {/* User Name */}
          <div className="flex flex-col gap-[15px]">
            <label className="block text-black text-base leading-[1.3] font-normal opacity-80">
              User Name
            </label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) => handleInputChange("userName", e.target.value)}
              className="w-full px-5 py-3.5 h-[52px] bg-[#ECECEC] rounded-lg text-[#1D222E] text-base leading-[1.3] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[15px]">
            <label className="block text-black text-base leading-[1.3] font-normal opacity-80">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-5 py-3.5 h-[52px] bg-[#ECECEC] rounded-lg text-[#1D222E] text-base leading-[1.3] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[15px]">
            <label className="block text-black text-base leading-[1.3] font-normal opacity-80">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="w-full px-5 py-3.5 h-[52px] bg-[#ECECEC] rounded-lg text-[#1D222E] text-base leading-[1.3] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-[31px]">
          {/* Phone Number */}
          <div className="flex flex-col gap-[15px]">
            <label className="block text-black text-base leading-[1.3] font-normal opacity-80">
              Phone number
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="w-full px-5 py-3.5 h-[52px] bg-[#ECECEC] rounded-lg text-[#1D222E] text-base leading-[1.3] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Role */}
          <CustomDropdown
            label="Role"
            value={formData.role}
            options={["Administrator", "Manager", "Employee"]}
            onChange={(value) => handleInputChange("role", value)}
          />

          {/* Department */}
          <CustomDropdown
            label="Department"
            value={formData.department}
            options={["Operations", "Sales", "Marketing", "Finance", "HR"]}
            onChange={(value) => handleInputChange("department", value)}
          />
        </div>
      </div>

      {/* Reset Password Link */}
      <div className="mt-[19px]">
        <button
          onClick={handleResetPassword}
          className="text-black text-base leading-[1.3] font-normal opacity-80 hover:opacity-100 transition-opacity underline"
        >
          Reset Password
        </button>
      </div>

      {/* Save Button */}
      <div className="mt-[41px]">
        <SaveButton onSave={handleSaveEdits} />
      </div>
    </div>
  );
}
