"use client";
import Image from "next/image";
import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Pricing from "@/components/sections/pricing/default";
import Faqs from "@/components/Faqs";
import Form from "@/components/Contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <Items />
      <Pricing />
      <Faqs />
      <Form />
    </div>
  );
}
