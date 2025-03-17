import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";

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
    <div className="relative max-w-lg w-full hover:scale-105 hover:transition-all duration-300">
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
        <div className="space-y-2.5 leading-relaxed flex-1">
          {items.map((items, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon size={18} />
              <span>{items}</span>
            </li>
          ))}
        </div>
        <div className="flex justify-center space-y-2 w-full">
          <Link
            href={paymentLink}
            className={cn(
              "flex items-center justify-center w-full rounded-full gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2",
              id === "premium"
                ? "border-rose-900"
                : "border-rose-100 from-rose-400 to-rose-500"
            )}
          >
            Comprar <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
