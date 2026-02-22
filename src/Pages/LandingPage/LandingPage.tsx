import CategorySection from "./components/CategoryComponents/CategorySection";
import HeroSection from "./components/HeroComponents/HeroSection";
import ReviewSection from "./components/ReviewComponents/ReviewSection";

function LandingPage() {
  return (
    <div>
      <div className="text-4xl text-red-500 opens-500 bg-[#E7E7E3] md:px-8 px-1 py-4">
        <HeroSection />
      </div>

     <div className="w-full bg-black">
       <CategorySection />
     </div>
      <ReviewSection />
    </div>
  );
}

export default LandingPage;
