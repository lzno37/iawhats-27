import React, { useState } from "react";

export default function Form({
  title = "Transforma tu atención en WhatsApp con IaWhats",
  description = "Descubre en una demo gratuita cómo automatizar respuestas, ahorrar tiempo y mejorar la experiencia de tus clientes.",
}) {
  const [formData, setFormData] = useState({
    company: "",
    phone: "",
    email: "",
    name: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/api/SendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("✅ Thank you! Your request has been submitted.");
          setFormData({
            company: "",
            phone: "",
            email: "",
            name: "",
            more: "",
            agreeComms: false,
            acceptTerms: false,
          });
          setTimeout(() => setSuccessMessage(""), 5000);
        } else {
          alert("Failed to submit demo request.");
        }
      })
      .catch((error) => {
        console.error("Error submitting demo request:", error);
        alert("Failed to submit demo request.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="w-full py-20 sm:py-24 bg-white flex flex-col items-center px-6"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-md leading-relaxed">
          {description}
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            disabled={loading}
            
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-[#195f96] focus:ring-1 focus:ring-[#195f96] outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Empresa"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-[#195f96] focus:ring-1 focus:ring-[#195f96] outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-[#195f96] focus:ring-1 focus:ring-[#195f96] outline-none transition-all"
          />
          <input
            type="tel"
            placeholder="Teléfono / WhatsApp"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-[#195f96] focus:ring-1 focus:ring-[#195f96] outline-none transition-all"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            value={formData.more}
            onChange={(e) => handleInputChange("more", e.target.value)}
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm resize-none focus:border-[#195f96] focus:ring-1 focus:ring-[#195f96] outline-none transition-all"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-2 rounded-lg bg-[black] text-white font-medium text-sm py-3 transition-all hover:bg-[#12486f] focus:ring-2 focus:ring-offset-2 focus:ring-[#195f96] ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#196f95] hover:bg-[#145a7a]"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </div>
            ) : (
              "Probar Ahora"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
