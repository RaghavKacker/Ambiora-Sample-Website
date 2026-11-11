import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FestivalIntroduction from "@/components/sections/FestivalIntroduction";
import FeaturedEvents from "@/components/sections/FeaturedEvents";
import SponsorsSection from "@/components/sections/SponsorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FestivalIntroduction />
        <FeaturedEvents />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  );
}
