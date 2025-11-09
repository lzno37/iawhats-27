"use client";
import React, { useState, useEffect } from "react";
import {
  Languages,
  Menu,
  Plus,
  CornerDownRight,
  ChevronDown,
  X,
  Binoculars,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ES");
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Language content object
  const content = {
    EN: {
      services: "Other Solutions",
      partners: "Precios",
      // signIn: "Sign In",
      tryNow: "Try Now",
    },
    ES: {
      services: "Otras Soluciones",
      partners: "Precios",
      // signIn: "Iniciar Sesión",
      tryNow: "Probar Ahora",
      serviceList: [
        { name: "Agentes de voz", href: "https://iacall.es" },
        { name: "Agentes de WhatsApp", href: "/" },
        { name: "Automatizaciones", href: "https://iacall.es/automations" },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    // Load saved language preference
    const savedLang = localStorage.getItem("preferred-language");
    if (savedLang) {
      setCurrentLanguage(savedLang);
      document.documentElement.lang = savedLang === "ES" ? "es" : "en";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "EN" ? "ES" : "EN";
    setCurrentLanguage(newLang);
    localStorage.setItem("preferred-language", newLang);
    document.documentElement.lang = newLang === "ES" ? "es" : "en";
    window.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { language: newLang },
      })
    );
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.65)"
            : "rgba(255, 255, 255, 0)",
          marginLeft: isScrolled ? 16 : 0,
          marginRight: isScrolled ? 16 : 0,
          marginTop: isScrolled ? 16 : 0,
          borderRadius: isScrolled ? 50 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(24px) saturate(180%)"
            : "none",
          boxShadow: isScrolled
            ? "0 8px 32px 0 rgba(31, 38, 135, 0.18)"
            : "none",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.18)" : "none",
        }}
      >
        {/* Web Version of Navbar */}
        <motion.div
          className="hidden lg:flex items-center justify-between relative"
          animate={{
            paddingLeft: isScrolled ? 24 : 32,
            paddingRight: isScrolled ? 24 : 32,
            paddingTop: isScrolled ? 12 : 24,
            paddingBottom: isScrolled ? 12 : 24,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Pages */}
          <motion.div
            className="flex gap-2 items-center"
            animate={{
              gap: isScrolled ? 8 : 16,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <motion.button
                className="flex gap-2 items-center rounded-full border border-gray-200 text-black font-medium group"
                animate={{
                  paddingLeft: isScrolled ? 12 : 16,
                  paddingRight: isScrolled ? 12 : 16,
                  paddingTop: isScrolled ? 6 : 8,
                  paddingBottom: isScrolled ? 6 : 8,
                  fontSize: isScrolled ? 14 : 16,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {content[currentLanguage].services}
                <ChevronDown
                  size={isScrolled ? 10 : 12}
                  className={`transition-transform duration-200 ${
                    isIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 w-70 bg-white/90 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg p-6 z-50"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {content[currentLanguage].serviceList.map(
                        (service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            className="px-3 py-2 text-sm col-span-1 text-gray-700 hover:bg-gray-100/50 rounded-lg transition-colors"
                          >
                            {service.name}
                          </a>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#pricing"
              className="flex gap-2 items-center rounded-full border border-gray-200 text-black font-medium group"
              animate={{
                paddingLeft: isScrolled ? 12 : 16,
                paddingRight: isScrolled ? 12 : 16,
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
                fontSize: isScrolled ? 14 : 16,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {content[currentLanguage].partners}
              <CornerDownRight
                size={isScrolled ? 10 : 12}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          {/* Logo */}
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <motion.a
              href="/"
              className="text-black tracking-tight"
              animate={{}}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <Image
                src="/Logo.png"
                alt="Aiphier Logo"
                width={130}
                height={40}
              />
            </motion.a>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex gap-2 items-center"
            animate={{
              gap: isScrolled ? 8 : 16,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* <motion.button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 text-black flex items-center gap-2 hover:bg-gray-50 transition-colors"
              animate={{
                paddingLeft: isScrolled ? 8 : 10,
                paddingRight: isScrolled ? 8 : 10,
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <Languages size={isScrolled ? 14 : 16} />
              <span className="text-sm font-medium">{currentLanguage}</span>
            </motion.button> */}
            {/* <motion.a
              href="https://cpanel.iacall.es/en/auth/login"
              className="rounded-full border border-gray-200 text-black font-medium"
              animate={{
                paddingLeft: isScrolled ? 12 : 16,
                paddingRight: isScrolled ? 12 : 16,
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
                fontSize: isScrolled ? 14 : 16,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {content[currentLanguage].signIn}
            </motion.a> */}
            <motion.a
              href="#contact"
              className="rounded-full bg-[black] text-white font-bold"
              animate={{
                paddingLeft: isScrolled ? 16 : 24,
                paddingRight: isScrolled ? 16 : 24,
                paddingTop: isScrolled ? 6 : 10,
                paddingBottom: isScrolled ? 6 : 10,
                fontSize: isScrolled ? 14 : 16,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {content[currentLanguage].tryNow}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Mobile Version */}
        <motion.div
          className="lg:hidden flex items-center justify-between"
          animate={{
            paddingLeft: isScrolled ? 16 : 24,
            paddingRight: isScrolled ? 16 : 24,
            paddingTop: isScrolled ? 12 : 16,
            paddingBottom: isScrolled ? 12 : 16,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <motion.a
            href="/"
            className="font-bold text-black tracking-tight"
            animate={{}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <Image src="/Logo.png" alt="Aiphier Logo" width={100} height={40} />
          </motion.a>
          <motion.div
            className="flex items-center"
            animate={{
              gap: isScrolled ? 8 : 12,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* <motion.button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition-colors"
              animate={{
                paddingLeft: isScrolled ? 6 : 8,
                paddingRight: isScrolled ? 6 : 8,
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <Languages size={isScrolled ? 12 : 14} />
              <span className="text-xs font-medium">{currentLanguage}</span>
            </motion.button> */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-full bg-[black] text-white font-bold"
              animate={{
                paddingLeft: isScrolled ? 12 : 16,
                paddingRight: isScrolled ? 12 : 16,
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
                fontSize: isScrolled ? 12 : 14,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <Menu size={isScrolled ? 14 : 16} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Overlay */}
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <Image
                  src="/Logo.png"
                  alt="Aiphier Logo"
                  width={100}
                  height={40}
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-4">
                {/* Mobile Industries Dropdown */}
                <div className="rounded-xl border border-gray-200">
                  <button
                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                    className="flex items-center justify-between w-full p-4"
                  >
                    <span className="text-lg font-medium">
                      {content[currentLanguage].services}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`transform transition-transform ${
                        isIndustriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 space-y-2 bg-gray-50">
                          {content[currentLanguage].serviceList.map(
                            (service, index) => (
                              <a
                                key={index}
                                href={service.href}
                                className="px-3 py-2 text-sm block text-gray-700 hover:bg-gray-100/50 rounded-lg transition-colors"
                              >
                                {service.name}
                              </a>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/partners"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50"
                >
                  <span className="text-lg font-medium">
                    {content[currentLanguage].partners}
                  </span>
                  <CornerDownRight size={20} />
                </a>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-4">
                  {/* <a
                    href="https://cpanel.iacall.es/en/auth/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center p-4 rounded-full border border-gray-200 font-medium"
                  >
                    {content[currentLanguage].signIn}
                  </a> */}
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center p-4 rounded-full bg-[black] text-white font-bold"
                  >
                    {content[currentLanguage].tryNow}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
