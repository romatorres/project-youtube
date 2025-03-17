import Link from "next/link";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  description: string;
  price: number;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

export default function PlanItems({
  name,
  description,
  price,
  items,
  id,
  paymentLink,
}: Plan) {
  return (
    <div className="relative max-w-lg w-full">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 p-8 rounded-2xl border-[1px] border-gray-500/20",
          id === "premium" && "border-rose-500 gap-5 border-2"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <h3 className="text-lg lg:text-xl font-bold capitalize">{name}</h3>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-5xl tracking-tight font-extrabold">R${price}</h2>
          <div className="text-xs font-semibold">
            <p>reais</p>
            <p>/mês</p>
          </div>
        </div>
        <div>
          {items.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </div>
        <div>
          <Link href={paymentLink}>Comprar</Link>
        </div>
      </div>
    </div>
  );
}
