import { Metadata } from "next";

import About from "@/components/landing/about";
import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import GetStarted from "@/components/landing/get-started";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Security from "@/components/landing/security";
import Testimonials from "@/components/landing/testimonials";

export const metadata: Metadata = {
  title: "SME - Sistema de Gerenciamento de Currículos",
  description:
    "Uma plataforma inovadora para gerenciar currículos e conectar candidatos a oportunidades de emprego.",
};

export default async function Home() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),

  // });

  // if (!session) {
  //   return <p>You are not logged in</p>;
  // }

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        {/* <ResumeSuggester /> */}
        <Testimonials />
        <Pricing />
        <Faq />
        <GetStarted />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
