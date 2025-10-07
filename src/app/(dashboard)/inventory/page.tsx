import { ProductCatalog, StockMovementHistory } from "@/components/inventory";

// Sample data - replace with actual API data
const sampleMovements = [
  {
    id: "1",
    productName: "Vitamin C Serum",
    quantity: -12,
    orderNumber: "Sales order #MK-2024-092",
    date: "2024-01-15",
  },
  {
    id: "2",
    productName: "Vitamin C Serum",
    quantity: 155,
    orderNumber: "Sales order #MK-2024-092",
    date: "2024-01-15",
  },
  {
    id: "3",
    productName: "Vitamin C Serum",
    quantity: -12,
    orderNumber: "Sales order #MK-2024-092",
    date: "2024-01-15",
  },
];

export default function InventoryPage() {
  return (
    <div className="min-h-screen p-6 flex flex-col gap-6">
      <ProductCatalog />
      <StockMovementHistory movements={sampleMovements} />
    </div>
  );
}
