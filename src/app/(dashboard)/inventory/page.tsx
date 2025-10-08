import { ProductCatalog, StockMovementHistory } from "@/components/inventory";
import { PageTitle } from "@/components/shared";
import { StatsCardsRow } from "@/components/overview";

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
  const inventoryStats = [
    {
      title: "Total Products",
      value: "236",
      change: "+5.2% vs last month",
      isPositive: true,
      backgroundColor: "#FFFBEA",
    },
    {
      title: "Low Stock",
      value: "18",
      change: "-3.8% vs last month",
      isPositive: true,
      backgroundColor: "#EDE9FE",
    },
    {
      title: "Out of Stock",
      value: "30",
      change: "+2.4% vs last month",
      isPositive: false,
      backgroundColor: "#FECDD3",
    },
    {
      title: "Total Value",
      value: "₩156,340,000",
      change: "+18.6% vs last month",
      isPositive: true,
      backgroundColor: "#DCFCE7",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <PageTitle
        title="Inventory Management"
        description="Track and manage your product inventory"
      />

      <StatsCardsRow stats={inventoryStats} />

      <div className="flex flex-col gap-6">
        <ProductCatalog />
        <StockMovementHistory movements={sampleMovements} />
      </div>
    </div>
  );
}
