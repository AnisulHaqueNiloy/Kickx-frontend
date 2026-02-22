import React from "react";
import { useLocation } from "react-router-dom";
// Swiper Components এবং Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductSection = () => {
  const location = useLocation();
  // যদি পাথ '/' (home) হয় তবে একরকম, অন্যথায় 'You may also like'
  const isHomePage = location.pathname === "/";

  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      img: "shoe1.jpg",
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      img: "shoe2.jpg",
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      img: "shoe3.jpg",
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      img: "shoe4.jpg",
    },
    {
      id: 5,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      img: "shoe1.jpg",
    },
  ];

  return (
    <section className="px-4 md:px-10 md:py-12 py-6 bg-[#EAE9E5]">
      {/* routing based rendering */}
      <div className="flex flex-row justify-between items-center mb-8 gap-4">
        <div>
          {isHomePage ? (
            <h2 className="text-2xl md:text-7xl rubik-600 font-semibold uppercase leading-tight text-[#232321]">
              Don't miss out <br /> New Drops
            </h2>
          ) : (
            <h2 className="text-2xl md:text-7xl rubik-600 font-semibold uppercase leading-tight text-[#232321]">
              You may also like
            </h2>
          )}
        </div>

     
        {isHomePage ? (
          <button className="bg-[#4A69E2] cursor-pointer text-white md:px-8 px-3 md:py-3 py-2 w-fit rubik-500 text-sm rounded-lg hover:scale-110 transition-transform font-bold uppercase hover:bg-blue-700 transition-all active:scale-95">
            Shop Now
          </button>
        ) : (
          <div className="flex gap-2">
            <button className="prev-btn bg-gray-400 hover:bg-black text-white p-3 rounded-lg transition-all">
              &lt;
            </button>
            <button className="next-btn bg-[#232321] text-white p-3 rounded-lg transition-all">
              &gt;
            </button>
          </div>
        )}
      </div>

      {isHomePage ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Card Body */}
              <div className="bg-[#FAFAFA] rounded-[20px] md:rounded-[28px] p-2 md:p-4 border-2 md:border-4 border-white aspect-square relative overflow-hidden group">
                <span className="absolute top-0 left-0 rubik-600 font-semibold bg-[#4A69E2] text-white px-2 md:px-4 py-1 md:py-2 rounded-br-xl md:rounded-br-3xl text-xs  ">
                  New
                </span>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:rotate-[-15deg] transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="mt-3 md:mt-4">
               
                <h3 className="font-bold text-sm md:text-xl uppercase text-[#232321] mb-2 md:mb-3 h-10 md:h-14 overflow-hidden line-clamp-2">
                  {product.name}
                </h3>
                <button className="w-full bg-[#232321] text-white py-2 md:py-3 rounded-lg md:rounded-xl font-bold uppercase text-[10px] md:text-sm">
                  View - <span className="text-[#FFA52F]">{product.price}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        //  Product Carousel (Swiper)
        <Swiper
    modules={[Navigation]}
    spaceBetween={15}
    slidesPerView={2}
    navigation={{
      prevEl: ".prev-btn",
      nextEl: ".next-btn",
    }}
    breakpoints={{
      1024: { slidesPerView: 4 },
    }}
    className="mySwiper"
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
         {/* সেম ডিজাইন এখানেও থাকবে */}
         <div className="flex flex-col">
            <div className="bg-[#FAFAFA] rounded-[20px] p-2 border-2 border-white aspect-square relative overflow-hidden group">
               <img src={product.img} className="w-full h-full object-contain" />
            </div>
            <div className="mt-3">
               <h3 className="font-bold text-[12px] uppercase text-[#232321] line-clamp-2 h-10">{product.name}</h3>
               <button className="w-full bg-[#232321] text-white py-2 rounded-lg font-bold uppercase text-[10px]">
                  View - <span className="text-[#FFA52F]">{product.price}</span>
               </button>
            </div>
         </div>
      </SwiperSlide>
    ))}
  </Swiper>
      )}
    </section>
  );
};

export default ProductSection;
