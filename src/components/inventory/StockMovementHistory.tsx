import { StarsIcon } from "@/components/icons";
import { FilterButton } from "@/components/shared";
import StockMovementItem from "./StockMovementItem";

interface StockMovement {
  id: string;
  productName: string;
  quantity: number;
  orderNumber: string;
  date: string;
}

interface StockMovementHistoryProps {
  movements?: StockMovement[];
}

export default function StockMovementHistory({
  movements = [],
}: StockMovementHistoryProps) {
  return (
    <div className="w-full bg-white border border-[#151515]/10 rounded-[20px] p-[23px_30px] flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between gap-16 w-full">
        <div className="flex items-center gap-[15px] w-[309px]">
          <StarsIcon className="w-[30px] h-[30px] text-[#1D222E]" />
          <h2 className="text-[#151515] text-xl font-normal leading-[1em]">
            Stock Movement History
          </h2>
        </div>
        <FilterButton />
      </div>

      {/* Movement List */}
      <div className="flex flex-col gap-[15px] w-full mt-[30px]">
        {movements.length === 0 ? (
          <p className="text-[#151515]/52 text-sm text-center py-8">
            No stock movements to display
          </p>
        ) : (
          movements.map((movement) => (
            <StockMovementItem
              key={movement.id}
              productName={movement.productName}
              quantity={movement.quantity}
              orderNumber={movement.orderNumber}
              date={movement.date}
            />
          ))
        )}
      </div>
    </div>
  );
}
