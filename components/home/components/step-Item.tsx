import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  lable: string;
  description: string;
};

export default function StepItem({ icon, lable, description }: Step) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
          <div className="text-rose-500">{icon}</div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-center font-bold text-xl">{lable}</h4>
          <p className="text-center text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
