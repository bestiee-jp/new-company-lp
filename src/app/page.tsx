import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import News from "@/components/News";
import Careers from "@/components/Careers";
import CyanBackground from "@/components/CyanBackground";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {/* Mission Section Wrapper with continuous cyan background */}
      <div style={{ position: 'relative', flex: '1 0 auto' }}>
        <CyanBackground />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Hero />
          <Mission />
          <AboutUs />
        </div>
      </div>
      <Services />
      <News />
      <Careers />
      <Footer />
    </main>
  );
}
