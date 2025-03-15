import StepItem from "./components/step-Item";

import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  lable: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    lable: "Faça o Upload do seu PDF",
    description: "Escolha um PDF do seu computador para começar a resumir.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    lable: "Analise da AI",
    description: "A AI vai analisar seu arquivo para fazer a conversão.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    lable: "Baixe o PDF",
    description: "A AI vai analisar seu arquivo para fazer a conversão.",
  },
];

export default function HowitWorkSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl mt-20"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 64,4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1% )",
            }}
            className="relative left-[calc(50%-3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(40%-30rem)] sm:w-[40.1875rem]"
          />
        </div>
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">
            Como funciona
          </h2>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto">
            Transforme qualquer PDF em um resumo fácil de ler em três etapas
            simples
          </h3>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div className="relative flex items-stretch">
              <StepItem key={index} {...step} />
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <MoveRight
                    size={32}
                    strokeWidth={1}
                    className="text-rose-400"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
