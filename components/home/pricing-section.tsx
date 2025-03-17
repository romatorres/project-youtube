import PlanItems from "./components/plan-items";

type Plan = {
  name: string;
  description: string;
  price: number;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plan: Plan[] = [
  {
    name: "Básico",
    description: "Para quem precisa de uma solução rápida e simples.",
    price: 10,
    items: [
      "5 PDF por mês",
      "Velocidade básica no processamento",
      "Email suporte",
    ],
    id: "básico",
    paymentLink: "",
    priceId: "",
  },
  {
    name: "Premium",
    description: "Para quem precisa de uma solução rápida e simples.",
    price: 20,
    items: [
      "PDFs ilimitados",
      "Velocidade alta no processamento",
      "Email suporte",
      "Suporte 24/7",
    ],
    id: "premium",
    paymentLink: "",
    priceId: "",
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">
            Preços
          </h2>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
          {plan.map((plan, index) => (
            <div key={index} className="relative flex items-stretch">
              <PlanItems {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
