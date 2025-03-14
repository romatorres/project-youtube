import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center z-0 py-16 sm:py-20 lg-pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant="secondary"
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
          >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-600">Feito com AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center">
        Transforme PDFs em índices organizados
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Transforme PDFs em índices organizados em segundos com nosso app!
      </p>
      <div>
        <Button className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 font-semibold shadow-lg transition-all duration-200">
          <Link href="#/pricing" className="flex gap-3 items-center">
            <span>Testar Ídices</span>
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
