import React from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-[95px] h-[95px] rounded-[10px] overflow-hidden bg-gray-100 flex-shrink-0">
      <Image src={src} alt={alt} fill className="object-cover" sizes="95px" />
    </div>
  );
};

export default ProductImage;

