import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function UploadHeader() {
  return (
    <section className="flex flex-col items-center mx-auto">
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
        <Badge
          variant="secondary"
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
        >
          <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
          <p className="text-base text-rose-600">Criação de conteúdo com IA</p>
        </Badge>
      </div>
      <div className="capitalize text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center mt-6">
        Comece a enviar
        <span className="relative inline-block">
          <span className="relative px-2 z-10"> Seus PDFs</span>
          <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
        </span>
      </div>
      <div className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl ">
        <p>Carregue seu pdf e deixe nossa IA fazer a mágica!</p>
      </div>
    </section>
  );
}
