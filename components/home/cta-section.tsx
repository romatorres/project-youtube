import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter ">
              Pronto para economizar horas de leitura?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl-text-xl/relaxed dark:text-gray-400">
              Transforme documentos extensos em arquivos argnizados e resumidos
              com nosso APP
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button
            size="lg"
            className="w-full min-[400px]:w-auto bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 text-white transition-colors duration-300"
          >
            <Link href="/#pricing" className="flex items-center justify-center">
              Começar <ArrowRight className="ml-2 w-4 h-4 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
