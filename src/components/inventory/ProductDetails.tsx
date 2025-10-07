import React from "react";
import StockProgress from "./StockProgress";

interface ProductDetailsProps {
  name: string;
  sku: string;
  price: string;
  stock: number;
  maxStock?: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  sku,
  price,
  stock,
  maxStock = 100,
}) => {
  return (
    <div className="flex flex-col gap-[10px] w-[265px]">
      <h3 className="font-normal text-[20px] leading-[1em] text-[#151515]">
        {name}
      </h3>

      <div className="flex items-center gap-[9px] text-[14px] font-light leading-[1.3em] text-[#151515]">
        <span>SKU: {sku}</span>
        <div className="w-[1px] h-[18px] bg-[#151515]" />
        <span>Price: {price}</span>
      </div>

      <p className="font-normal text-[14px] leading-[1.3em] text-[#00961B]">
        In Stock: {stock}
      </p>

      <StockProgress current={stock} max={maxStock} />
    </div>
  );
};

export default ProductDetails;

