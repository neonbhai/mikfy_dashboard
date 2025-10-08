"use client";

import React, { useState } from "react";
import InventoryHeader from "./InventoryHeader";
import ProductCard, { Product } from "./ProductCard";

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Vitamin C Brightening Serum",
      sku: "MIKFY-VC-30ML",
      price: "₩89,000",
      stock: 45,
      maxStock: 100,
      image: "/products/vitamin-c-serum.png",
      isActive: true,
    },
    {
      id: "2",
      name: "Vitamin C Brightening Serum",
      sku: "MIKFY-VC-30ML",
      price: "₩89,000",
      stock: 45,
      maxStock: 100,
      image: "/products/vitamin-c-serum.png",
      isActive: true,
    },
    {
      id: "3",
      name: "Vitamin C Brightening Serum",
      sku: "MIKFY-VC-30ML",
      price: "₩89,000",
      stock: 45,
      maxStock: 100,
      image: "/products/vitamin-c-serum.png",
      isActive: true,
    },
  ]);

  const handleToggle = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isActive: !product.isActive }
          : product
      )
    );
    console.log(`Toggled product ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Edit product ${id}`);
    // TODO: Implement edit functionality
  };

  return (
    <div className="w-full bg-white border-[0.5px] border-[rgba(21,21,21,0.1)] rounded-[20px] p-[23px_30px] flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[30px]">
        <InventoryHeader />

        <div className="flex flex-col gap-[15px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggle={handleToggle}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
