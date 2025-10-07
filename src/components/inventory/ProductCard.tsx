import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductActions from "./ProductActions";

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: string;
  stock: number;
  maxStock?: number;
  image: string;
  isActive: boolean;
}

interface ProductCardProps {
  product: Product;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onToggle,
  onEdit,
}) => {
  return (
    <div className="w-[1044px] bg-white border border-[#F3F3EE] rounded-[10px] p-4 flex items-center justify-between gap-[458px]">
      <div className="flex items-center gap-[18px]">
        <ProductImage src={product.image} alt={product.name} />
        <ProductDetails
          name={product.name}
          sku={product.sku}
          price={product.price}
          stock={product.stock}
          maxStock={product.maxStock}
        />
      </div>

      <ProductActions
        isActive={product.isActive}
        onToggle={() => onToggle(product.id)}
        onEdit={() => onEdit(product.id)}
      />
    </div>
  );
};

export default ProductCard;

