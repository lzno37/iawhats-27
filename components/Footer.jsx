import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-gray-300 px-6 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/Logo.png"
              alt="IAWHATS logo"
              width={150}
              height={150}
              className="invert"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            El agente de WhatsApp con inteligencia artificial de IACALL
          </p>
        </div>

        {/* Soluciones */}
        <div>
          <h3 className="text-white font-semibold mb-3">Soluciones</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                IAWhats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Otras soluciones
              </a>
            </li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="text-white font-semibold mb-3">Empresa</h3>
          <ul className="space-y-2">
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">
                Precios
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="hover:text-white transition-colors">
                Políticas de privacidad
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition-colors">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="/legal" className="hover:text-white transition-colors">
                Aviso Legal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 IACALL. Todos los derechos reservados.
      </div>
    </footer>
  );
}
