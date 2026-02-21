import Banner from "./Banner";

function HeroSection() {
  return (
    <div className="">
      <div className="flex justify-center my-6">
        <h1 className="uppercase rubik-700 font-bold text-black  xl:text-[200px] lg:text-[150px] md:text-[100px] sm:text-[54px]  text-[48px] w-fit text-center">
          Do it <span className="text-[#4A69E2]">right</span>
        </h1>
      </div>
      <Banner/>
    </div>
  );
}

export default HeroSection;
