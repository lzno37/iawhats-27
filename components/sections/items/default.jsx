import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
} from "lucide-react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import RotatingText from "@/components/RotatingText";

export default function Items({
  description = "Automatización inteligente que libera horas de trabajo",
  items = [
    {
      title: "Recordatorios automáticos",
      description:
        "Envía recordatorios automáticos de citas y pagos para ahorrar tiempo.",
      icon: <ScanFaceIcon className="size-5 stroke-[1.5]" />,
    },
    {
      title: "Agenda reuniones",
      description:
        "Coordina y agenda reuniones directamente en tu calendario con IA.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-[1.5]" />,
    },
    {
      title: "Atención natural",
      description:
        "Responde preguntas frecuentes con un tono natural y empático.",
      icon: <EclipseIcon className="size-5 stroke-[1.5]" />,
    },
    {
      title: "Escala conversaciones",
      description:
        "Escala conversaciones a humanos sin perder el contexto ni el toque humano.",
      icon: <BlocksIcon className="size-5 stroke-[1.5]" />,
    },
    {
      title: "Libera tiempo",
      description:
        "Automatiza tareas repetitivas y enfoca tu equipo en lo importante.",
      icon: <FastForwardIcon className="size-5 stroke-[1.5]" />,
    },
    {
      title: "Panel IA",
      description:
        "Visualiza analíticas en tiempo real desde un panel intuitivo y moderno.",
      icon: <RocketIcon className="size-5 stroke-[1.5]" />,
    },
  ],
  className,
}) {
  return (
    <section
      className={`relative w-full py-20 sm:py-24 md:py-28 ${className || ""}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14 px-4">
        {/* ---- Heading ---- */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-black leading-tight">
            Todo lo que tu equipo haría en WhatsApp, ahora lo hace{" "}
            <span className="inline-block align-baseline  text-[#195f96]">
              {/* <RotatingText
                texts={[
                  "IaWhats",
                  "Automatización",
                  "Eficiencia",
                  "Productividad",
                  "Innovación",
                ]}
                mainClassName="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#195f96] text-white rounded-full"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              /> */}
              IAWhats
            </span>
          </h2>

          <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* ---- Items Grid ---- */}
        {items && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-[#195f96]/40 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#195f96]/10 text-[#195f96] group-hover:bg-[#195f96]/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
