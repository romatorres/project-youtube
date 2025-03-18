import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Page() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center z-0 py-16 sm:py-20 lg-pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div>
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant="secondary"
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
          >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-600">
              Criação de conteúdo com IA
            </p>
          </Badge>
        </div>
      </div>
      <h2 className="font-bold py-6 text-center">
        Comece a enviar seus{" "}
        <span className="relative inline-block">
          <span className="relative px-2 z-10">PDFs</span>
          <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
        </span>
      </h2>
    </section>
  );
}
