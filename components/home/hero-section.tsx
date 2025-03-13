import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section>
      <div>
        <div className="flex">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200">
              <Sparkles
                size={32}
                className="mr-2 text-rose-600 animate-pulse"
              />
              <p className="text-base text-rose-600">Feito com AI</p>
            </Badge>
          </div>
        </div>
        <h1>Transforme PDFs em índices organizados</h1>
        <p>Transforme PDFs em índices organizados em segundos com nosso app!</p>
        <Button>Testar Ídices</Button>
        <Sparkles size={32} className="mr-2 text-rose-600 animate-pulse" />
      </div>
    </section>
  );
}
