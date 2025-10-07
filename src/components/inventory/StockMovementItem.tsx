interface StockMovementItemProps {
  productName: string;
  quantity: number;
  orderNumber: string;
  date: string;
}

export default function StockMovementItem({
  productName,
  quantity,
  orderNumber,
  date,
}: StockMovementItemProps) {
  const isPositive = quantity >= 0;
  const bgColor = isPositive ? "bg-[#00961B]" : "bg-[#B5200C]";
  const quantityText = isPositive ? `+${quantity}` : `${quantity}`;

  return (
    <div className="flex flex-col gap-2.5 border border-[#F3F3EE] rounded-[10px] p-4 bg-white">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#151515] text-xl font-normal leading-[1em]">
          {productName}
        </h3>
        <div className="flex items-center gap-2.5">
          <div
            className={`${bgColor} rounded-full px-[15px] py-2.5 flex items-center justify-center h-6`}
          >
            <span className="text-white text-sm font-normal leading-[1em]">
              {quantityText}
            </span>
          </div>
        </div>
      </div>
      <p className="text-[#B5200C] text-sm font-light leading-[1.3em]">
        {orderNumber}
      </p>
      <p className="text-[#151515]/52 text-sm font-light leading-[1.3em]">
        {date}
      </p>
    </div>
  );
}

