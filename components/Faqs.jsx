import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function Faqs({
  title = "Preguntas frecuentes",
  faqs = [
    {
      question: "¿Puedo personalizar mi agente de IA?",
      answer:
        "Sí, cada agente puede adaptarse al tono, estilo y objetivos de tu negocio. Puedes configurarlo fácilmente desde tu panel.",
    },
    {
      question: "¿Qué pasa si supero mis créditos mensuales?",
      answer:
        "Puedes adquirir créditos adicionales en cualquier momento o pasar a un plan superior para más capacidad.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usarlo?",
      answer:
        "No, la configuración es sencilla y contamos con soporte para ayudarte a integrarlo sin código.",
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer:
        "Sí, todos los planes incluyen soporte básico, y los planes Pro y Premium tienen soporte prioritario.",
    },
  ],
}) {
  return (
    <section
      id="faq"
      className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto"
    >
      {/* Badge Section with animation */}
      {/* <div
        className="flex justify-center items-center lg:justify-start lg:items-start"
      >
        <span className="px-4 py-2 rounded-full mb-8 md:mb-12 border border-gray-200 bg-white text-[#196f95] text-xs font-light">
          {currentLanguage === "ES" ? "Preguntas Frecuentes" : "FAQ"}
        </span>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Title Section with animation */}
        <div className="w-full lg:w-[400px] flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
          <h2 className="text-black text-4xl md:text-5xl lg:text-5xl font-light mb-4 md:mb-5 leading-tight">
            <>
              Preguntas
              <br />
              Frecuentes
            </>
          </h2>
          <a
            href="#contact"
            className="text-[#196f9f] text-sm md:text-base hover:underline"
          >
            Contáctenos para saber más
          </a>
        </div>

        {/* FAQ Accordion Section with staggered animation */}
        <div className="flex flex-col gap-3 md:gap-4 w-full">
          {faqs.map((item, index) => (
            <div key={index}>
              <Accordion
                type="single"
                className="px-4 py-2 rounded-xl border border-gray-200 bg-white"
                collapsible
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="font-light text-gray-900 text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-light text-xs leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
