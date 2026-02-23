import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../utils/ScrollToTop";

function MainLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
 
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <div className="bg-[#E7E7E3] md:px-14 px-4 py-2 md:py-8">
        <Navbar />
      </div>

      <main className="min-h-[calc(100vh-65px-80px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;