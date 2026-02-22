import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules'; // Grid মডিউল ইমপোর্ট করুন
import { ArrowUpRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid'; // Grid CSS ইমপোর্ট করতে ভুলবেন না

const Category = () => {
  const categories = [
    { id: 1, title: "Lifestyle Shoes", img: "lifestyle.png" },
    { id: 2, title: "Basketball Shoes", img: "basketball.png" },
    { id: 3, title: "Running Shoes", img: "running.png" },
    { id: 4, title: "Hiking Shoes", img: "hiking.png" },
  ];

  return (
    <section className="bg-[#232321] py-8 px-4 md:px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-3xl md:text-6xl font-bold uppercase">Categories</h2>
        <div className="flex gap-2">
          <button className="cat-prev bg-[#70706E] text-white w-10 h-10 flex items-center justify-center rounded-lg">&lt;</button>
          <button className="cat-next bg-white text-black w-10 h-10 flex items-center justify-center rounded-lg">&gt;</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Grid]}
        slidesPerView={1}
        grid={{
          rows: 2, // মোবাইলে ২টা রো (একটি স্লাইডে ২টা কার্ড উপরে-নিচে)
          fill: 'row',
        }}
        spaceBetween={10}
        navigation={{
          prevEl: '.cat-prev',
          nextEl: '.cat-next',
        }}
        breakpoints={{
          // ডেস্কটপে গ্রিড থাকবে না, পাশাপাশি ২টা স্লাইড দেখাবে
          1024: {
            slidesPerView: 2,
            grid: { rows: 1 },
            spaceBetween: 20
          },
        }}
        className="categoriesSwiper h-[950px] md:h-[600px]" // হাইট সেট করা জরুরি
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id} className="h-full">
            <div className="relative group bg-[#EAE9E5] rounded-[24px] md:rounded-[32px] overflow-hidden h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center p-6">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex justify-between items-end">
                <h3 className="text-[#232321] text-2xl font-bold uppercase leading-tight w-2/3">
                  {cat.title}
                </h3>
                <div className="bg-[#232321] text-white p-3 rounded-xl">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;