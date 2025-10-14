"use client";

import React, { useEffect, useRef } from "react";

interface ConnectShopifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectShopifyModal: React.FC<ConnectShopifyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div
        ref={modalRef}
        className="bg-white rounded-[10px] p-8 max-w-md w-full mx-4 shadow-lg"
      >
        <h2 className="text-[#151515] font-normal text-2xl leading-[1.3] mb-4">
          Connect Shopify to Continue
        </h2>
        <p className="text-[#151515] opacity-70 font-light text-base leading-[1.5] mb-6">
          To access this feature, you need to connect your Shopify store first.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-[#151515] text-white rounded-[10px] font-normal text-base leading-[1.3] hover:bg-[#2a2a2a] transition-colors"
          >
            Connect Shopify
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-[#F3F3EE] text-[#151515] rounded-[10px] font-normal text-base leading-[1.3] hover:bg-[#F3F3EE] transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectShopifyModal;
