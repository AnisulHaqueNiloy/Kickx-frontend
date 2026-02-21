import banner from "../../../../assets/banner.jpg";
import tip1 from "../../../../assets/tip1.jpg";
import tip2 from "../../../../assets/tip2.jpg";

function Banner() {
  return (
    <div className="relative w-full px-4 md:px-10 py-5">
      {/* { Main container} */}
      <div className="relative overflow-hidden rounded-4xl md:rounded-[64px] h-[500px] md:h-150 lg:h-187.5">
        {/* Background Image */}
        <img
          src={banner}
          alt="Nike Air Max Banner"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
        />

        <div className="md:p-6 p-2 absolute md:top-20 top-10 left-0 bg-[#232321] text-[#E7E7E3]  rounded-l-2xl text-xs md:text-[16px] font-semibold rubik-600 rotate-180 [writing-mode:vertical-lr]">
          Nike product of the year
        </div>

        <div className="">
          {/* Left Side (Text and Button) */}
          <div className="absolute bottom-8 left-6 md:bottom-16 md:left-12 flex flex-col gap-1 md:gap-3 ">
            <h1 className="text-white text-2xl md:text-7xl rubik-600 font-semibold uppercase leading-tight ">
              Nike Air Max
            </h1>
            <p className="text-[#E7E7E3] text-sm md:text-2xl opens-600 font-semibold max-w-[200px] sm:max-w-[240px] md:max-w-[500px] ">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="bg-[#4A69E2] cursor-pointer text-white md:px-8 px-4 md:py-3 py-2 w-fit rubik-500 text-sm rounded-lg hover:scale-110 transition-transform font-bold uppercase hover:bg-blue-700 transition-all active:scale-95">
              Shop Now
            </button>
          </div>

          {/* Right Side (Tips) */}
          <div className="absolute bottom-8 right-6 md:bottom-16 md:right-12 flex flex-col gap-4">
            <div className="w-20 h-20 md:w-32 md:h-32 border-2 border-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-xl cursor-pointer hover:scale-110 transition-transform">
              <img
                src={tip1}
                alt="Preview 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 border-2 border-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-xl cursor-pointer hover:scale-110 transition-transform">
              <img
                src={tip2}
                alt="Preview 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
