import { cva } from "class-variance-authority";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function MinimalButton({ href, children, size = "md", className }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  }[size];

  return (
    <Link href={href} className={cn(baseStyles, sizeStyles, className)}>
      {children}
    </Link>
  );
}

// ✅ Variants for Pricing Column Layout
const pricingColumnVariants = cva(
  "relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:border-[#195f96]/30",
        glow: "hover:border-[#195f96]/40 hover:shadow-lg",
        "glow-brand":
          "border-[#195f96]/50 hover:shadow-[0_0_40px_-10px_#195f96]/30 hover:border-[#195f96]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ✅ Main Component
export function PricingColumn({
  name,
  icon,
  description,
  price,
  priceNote,
  cta,
  features,
  variant,
  className,
  Pro,
  ...props
}) {
  return (
    <div
      className={cn(
        pricingColumnVariants({ variant, className }),
        `overflow-visible ${Pro ? "-mt-6 shadow-[0_0_40px_-10px_#195f96]/30" : ""}`
      )}
      {...props}
    >
      {/* Header */}
      {Pro && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#195f96] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Más elegido
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {icon && <div className="text-[#195f96]">{icon}</div>}
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Price Section */}
      <div className="flex items-end justify-start gap-2">
        <span className="text-5xl font-thin text-gray-900">{price}</span>
        <span className="text-gray-500 text-sm mb-1 font-medium">/mes</span>
      </div>

      {/* CTA */}
      <MinimalButton
        href={cta.href}
        variant={cta.variant || "primary"}
        size="lg"
        className={`mt-2 ${
          Pro
            ? "bg-[black] text-white"
            : "bg-white text-black border border-gray-300"
        }`}
      >
        {cta.label}
      </MinimalButton>

      {/* Price note */}
      {priceNote && <p className="text-gray-500 text-xs mt-3">{priceNote}</p>}

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <CircleCheckBig className="text-[#195f96] size-4 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { pricingColumnVariants };
