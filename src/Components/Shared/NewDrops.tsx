import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css";
import "swiper/css/navigation";

import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import type { newDropsProps } from "../../types/requiredTypes";
import { useState, useEffect } from "react";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const NewDrops = ({ products }: { products: newDropsProps[] }) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalBullets = 4;

  const isHomePage = location.pathname === "/";

  // 🔥 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: "ease-out-cubic",
      once: true,  
      offset: 80,  
    });
  }, []);

  return (
    <section className="px-4 md:px-10 md:py-12 py-6 bg-[#EAE9E5]">
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-8 gap-4">
        <div>
          {isHomePage ? (
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-7xl rubik-600 font-semibold uppercase leading-tight text-[#232321]"
            >
              Don't miss out <br /> New Drops
            </h2>
          ) : (
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-7xl rubik-600 font-semibold uppercase leading-tight text-[#232321]"
            >
              You may also like
            </h2>
          )}
        </div>

        {isHomePage ? (
          <button className="bg-[#4A69E2] cursor-pointer text-white md:px-8 px-3 md:py-3 py-2 w-fit rubik-500 text-sm rounded-lg hover:scale-110 transition-transform font-bold uppercase hover:bg-blue-700 active:scale-95">
            Shop Now
          </button>
        ) : (
          <div className="flex gap-2">
            {/* Prev Button */}
            <button className="prev-btn cursor-pointer bg-[#70706E] hover:bg-black text-white md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-lg transition-all flex items-center justify-center">
              <MdKeyboardArrowLeft size={24} />
            </button>

            {/* Next Button */}
            <button className="next-btn cursor-pointer bg-black text-white md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-lg transition-all flex items-center justify-center border border-gray-200">
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        )}
      </div>

      {/* Home Page Grid */}
      {isHomePage ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products?.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 120} // stagger animation
            >
              {/* Card Body */}
              <div className="bg-[#FAFAFA] rounded-[20px] md:rounded-[24px]  border-2 md:border-4 border-white aspect-square relative overflow-hidden group">
                <span className="absolute top-0 left-0 rubik-600 font-semibold bg-[#4A69E2] text-white px-2 md:px-4 py-1 md:py-2 rounded-br-xl md:rounded-br-3xl text-xs">
                  New
                </span>

                <img
                  src={product.image || product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:rotate-[-15deg] transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="mt-3 md:mt-4">
                <h3 className="font-semibold text-sm md:text-2xl rubik-600 uppercase text-black mb-2 md:mb-3 h-10 md:h-14 overflow-hidden line-clamp-2">
                  {product.title}
                </h3>
                <Link to={`/product/${product.id}`}>
                  <button className="cursor-pointer w-full bg-[#232321] text-white py-2 md:py-3 rounded-lg md:rounded-xl rubik-500 uppercase text-[12px] md:text-sm">
                    View Product -{" "}
                    <span className="text-[#FFA52F]">{product.price}</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Swiper Carousel
        <Swiper
          modules={[Navigation, Pagination, Grid]}
          spaceBetween={15}
          slidesPerView={2}
          grid={{
            rows: 2,
            fill: "row",
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex % totalBullets);
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            1024: { slidesPerView: 4, grid: { rows: 1 } },
          }}
          className="mySwiper"
        >
          {products?.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100} // stagger animation
              >
                <div className="bg-[#FAFAFA] rounded-[20px] md:rounded-[24px]  border-2 md:border-4 border-white aspect-square relative overflow-hidden group">
                  <span className="absolute top-0 left-0 rubik-600 font-semibold bg-[#4A69E2] text-white px-2 md:px-4 py-1 md:py-2 rounded-br-xl md:rounded-br-3xl text-xs">
                    New
                  </span>
                  <img
                    src={product.image || product.images?.[0]}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:rotate-[-15deg] transition-transform duration-500"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-sm md:text-2xl rubik-600 uppercase text-black mb-2 md:mb-3 h-10 md:h-14 overflow-hidden line-clamp-2">
                    {product.title}
                  </h3>
                  <Link to={`/product/${product.id}`}>
                    <button className="cursor-pointer w-full bg-[#232321] text-white py-2 md:py-3 rounded-lg md:rounded-xl rubik-500 uppercase text-[12px] md:text-sm">
                      View Product -{" "}
                      <span className="text-[#FFA52F]">{product.price}</span>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-4">
            {Array.from({ length: totalBullets }).map((_, i) => (
              <span
                key={i}
                className={`swiper-pagination-bullet ${
                  i === activeIndex ? "swiper-pagination-bullet-active" : ""
                }`}
              ></span>
            ))}
          </div>
        </Swiper>
      )}
    </section>
  );
};

export default NewDrops;