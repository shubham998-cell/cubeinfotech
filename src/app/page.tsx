import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import USPSection from "./components/USPSection";
import ClientsSection from "./components/ClientsSection";
import GrowthSection from "./components/GrowthSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import SubscriptionSection from "./components/SubscriptionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 w-full">
        <nav className="flex items-center justify-between py-4 px-0 w-full max-w-full mx-auto">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="CubeInfoTech Logo"
              width={150}
              height={40}
              priority
            />
          </div>
          <ul className="hidden md:flex space-x-8 font-semibold text-gray-900">
            <li>
              <a href="#home" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-orange-500 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-orange-500 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-orange-500 transition">
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Contact Us
          </a>
        </nav>
      </header>

      <main className="w-full max-w-full mx-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <USPSection />
        <ClientsSection />
        <GrowthSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <SubscriptionSection />
      </main>

      <Footer />
    </>
  );
}
