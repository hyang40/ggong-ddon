import Hero from "@/components/Hero";
import AIEngines from "@/components/AIEngines";
import Dashboard from "@/components/Dashboard";
import Pricing from "@/components/Pricing";
import B2BSection from "@/components/B2BSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AIEngines />
      <Dashboard />
      <Pricing />
      <B2BSection />
      <FAQ />
      <Footer />
    </main>
  );
}
