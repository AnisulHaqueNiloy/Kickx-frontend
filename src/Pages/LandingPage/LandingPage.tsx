import CategorySection from "./components/CategoryComponents/CategorySection"
import HeroSection from "./components/HeroComponents/HeroSection"
import ReviewSection from "./components/ReviewComponents/ReviewSection"



function LandingPage() {
  return (
    <div className="text-4xl text-red-500 opens-500">

    <HeroSection/>
    <CategorySection/>
    <ReviewSection/>


    </div>
  )
}

export default LandingPage