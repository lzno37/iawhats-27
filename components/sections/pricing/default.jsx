import { User, Users, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingColumn } from "../../ui/pricing-column";

export default function Pricing({
  title = "Planes inteligentes para crecer",
  description = "Elige el plan de inversión que mejor se adapte a tu negocio",

  plans = [
    {
      name: "Básico",
      description: "Desde",
      price: "59€",
      priceNote: "",
      cta: {
        label: "Comenzar",
        href: "#contact",
      },
      features: [
        "1 Agente de IA Personalizado",
        "Acceso para 3 usuarios",
        "1,500 Créditos de IA/mes",
        "Envía recordatorios automáticos de citas, pagos y reservas",
        "Notificaciones y avisos personalizados a clientes",
        "Responde preguntas frecuentes de forma natural",
      ],
      variant: "default",
      className: "hidden lg:flex",
      Pro: false,
    },
    {
      name: "Pro",
      icon: <User className="size-4" />,
      description: "Desde",
      price: "159€",
      priceNote: "",
      cta: {
        label: "Comenzar",
        href: "#contact",
      },
      features: [
        `1 Agente de IA con capacidades avanzadas`,
        `Acceso para 5 usuarios`,
        `7,500 Créditos de IA/mes`,
        `Agenda, modifica o cancela citas automáticamente`,
        `Responde sobre productos, precios o disponibilidad en segundos`,
        `Integración CRM básica`,
        `Soporte prioritario`,
      ],
      variant: "glow-brand",
      Pro: true,
    },
    {
      name: "Premium",
      icon: <Users className="size-4" />,
      description: "Desde",
      price: "399€",
      priceNote: "",
      cta: {
        label: "Comenzar",
        href: "#contact",
      },
      features: [
        "1 Agente de IA altamente personalizado",
        "Acceso ilimitado de usuarios",
        "20,000 Créditos de IA/mes",
        "Gestiona el ciclo completo del cliente: bienvenida, seguimiento, venta y postventa",
        "Crea pedidos o genera facturas desde WhatsApp",
        "Integración con CRM, ERP o sistemas propios mediante API",
        "Panel avanzado con dashboards y métricas",
        "Gestor de cuenta dedicado y soporte 24/7",
      ],
      variant: "glow",
      Pro: false,
    },
  ],

  className = "",
}) {
  return (
    <section
    id="pricing"
      className={cn(
        "relative w-full py-24 sm:py-28 md:py-32 bg-white",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 sm:px-8">
        {/* Header */}
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-black">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-2xl text-gray-600 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Pricing Grid */}
        {plans && plans.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   w-full">
            {plans.map((plan, index) => (
              <PricingColumn
                key={index}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
                Pro={plan.Pro}
              />
            ))}
          </div>
        )}

        {/* Enterprise Card */}
        <div className="border border-gray-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-white shadow-sm hover:shadow-md transition w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p className="text-gray-600">
              Soluciones personalizadas para grandes empresas
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <ul className="flex flex-col gap-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-sky-700" />
                Volumen ilimitado
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-sky-700" />
                Implementación dedicada
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-sky-700" />
                SLA garantizado
              </li>
            </ul>
            <a href="#contact">
              <button className="bg-[black] text-white hover:bg-[black] px-6 py-2.5 text-sm rounded-full  cursor-pointer transition">
                Contáctanos
              </button>
            </a>
          </div>
        </div>
        <div className="max-w-2xl text-center text-gray-600 text-sm leading-relaxed">
          Todos los planes incluyen consultoría, entrenamiento y mejora
          continua.
          <br /> Los créditos de IA se adaptan según tu volumen y necesidades
          reales.
        </div>
      </div>
    </section>
  );
}
