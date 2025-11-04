import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import USPQuote from "@/components/USPQuote";
import PartnerLogos from "@/components/PartnerLogos";
import Pricing from "@/components/Pricing";
import B2BSection from "@/components/B2BSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="dashboard">
          <Dashboard />
        </div>
        <USPQuote />
        <PartnerLogos />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="b2b">
          <B2BSection />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </main>
    </>
  );
}
