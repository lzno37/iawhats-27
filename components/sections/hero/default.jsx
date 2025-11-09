import { ArrowRightIcon, MessageSquare, Users, Hand } from "lucide-react";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import Glow from "../../ui/glow";
import PixelBlast from "@/components/PixelBlast";

export default function Hero({
  title = "Agentes IA para WhatsApp",
  description = "Responde clientes, agenda citas y envía recordatorios automáticamente.",
  className,
}) {
  const badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground bg-white">IAWhats</span>
    </Badge>
  );

  const buttons = [
    {
      text: "Probar Ahora",
    },
    {
      text: "Ver Demo",
      icon: <ArrowRightIcon className="w-4 h-4" />,
    },
  ];

  const youtubeMockup = (
    <div className="relative w-full max-w-[700px] aspect-video overflow-hidden rounded-2xl shadow-lg border border-border mx-auto hover:scale-[1.02] transition-transform duration-300">
      <video
        controls
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full"
      >
        <source src="/Demo.mp4" type="video/mp4" />
      </video>
    </div>
  );

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#195f96"
        patternScale={6}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        speed={0.6}
        edgeFade={0.25}
        transparent
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: -1,
        }}
      />
      <section
        className={cn(
          "fade-bottom overflow-hidden py-16 sm:py-20 md:py-30",
          className
        )}
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-8 sm:gap-10">
          {/* Badge & Title */}
          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-normal text-balance text-transparent sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="animate-appear max-w-2xl text-center text-lg text-muted-foreground ">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="animate-appear flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
            <a href="#contact">
              <button className="rounded-full bg-[black] text-white px-6 py-3 font-bold transition-colors">
                {buttons[0].text}
              </button>
            </a>
            <a href="#youtube-video">
              <button className="rounded-full flex bg-white gap-2 items-center px-6 py-3 border border-gray-200 text-black font-medium hover:bg-gray-50 transition-colors">
                {buttons[1].text} {buttons[1].icon}
              </button>
            </a>
          </div>

          {/* === Feature Boxes Section === */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full max-w-5xl px-4">
            {/* Box 1 */}
            <div className="border border-border rounded-2xl p-6 text-center bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[#195f96]/40 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-[#195f96]/10">
                <MessageSquare className="w-6 h-6 text-[#195f96]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[black]">
                Automatiza
              </h3>
              <p className="text-muted-foreground text-sm">
                IAWhats responde automáticamente a tus clientes, explica
                servicios y envía recordatorios personalizados.
              </p>
            </div>

            {/* Box 2 */}
            <div className="border border-border rounded-2xl p-6 text-center bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[#195f96]/40 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-[#195f96]/10">
                <Users className="w-6 h-6 text-[#195f96]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[black]">
                Centraliza
              </h3>
              <p className="text-muted-foreground text-sm">
                Visualiza y gestiona todas las conversaciones de WhatsApp desde
                un solo panel.
              </p>
            </div>

            {/* Box 3 */}
            <div className="border border-border rounded-2xl p-6 text-center bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[#195f96]/40 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-[#195f96]/10">
                <Hand className="w-6 h-6 text-[#195f96]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[black]">
                Controla
              </h3>
              <p className="text-muted-foreground text-sm">
                Intervén manualmente cuando lo necesites — el agente IA te avisa
                y puedes tomar el control en segundos.
              </p>
            </div>
          </div>

          {/* YouTube Video */}
          <div id="youtube-video" className="relative w-full mt-12">{youtubeMockup}</div>
        </div>
      </section>
    </div>
  );
}
