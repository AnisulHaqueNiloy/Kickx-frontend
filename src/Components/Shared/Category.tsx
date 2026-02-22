  // // Swiper Styles
  // import "swiper/css";
  // import "swiper/css/navigation";
  // import "swiper/css/grid"; // Grid CSS ইমপোর্ট করতে ভুলবেন না
  // import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
  // import { ExternalLink } from "lucide-react";


  // const Category = () => {
  //   const categories = [
  //     { id: 1, title: "Lifestyle Shoes", img: "lifestyle.png" },
  //     { id: 2, title: "Basketball Shoes", img: "basketball.png" },
  //     { id: 3, title: "Running Shoes", img: "running.png" },
  //     { id: 4, title: "Hiking Shoes", img: "hiking.png" },
  //   ];

  //   return (
  //     <section className="bg-[#232321]  px-4 md:px-10">
  //       {/* text area and the buttons */}
  //       <div className="flex justify-between">
  //         <h1 className="uppercase text-white rubik-600 font-semibold md:text-[74px] text-4xl md:pt-22.5 md:pb-16">
  //           Categories
  //         </h1>
  //         <div className="flex gap-2 justify-end items-center">
  //           {/* Prev Button */}
  //           <button className="prev-btn cursor-pointer bg-[#70706E] hover:bg-black text-white md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-lg transition-all flex items-center justify-center">
  //             <MdKeyboardArrowLeft size={24} />
  //           </button>

  //           {/* Next Button */}
  //           <button className="next-btn cursor-pointer bg-[#E7E7E3] text-white md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-lg transition-all flex items-center justify-center border border-gray-200">
  //             <MdKeyboardArrowRight size={24} />
  //           </button>
  //         </div>
  //       </div>
  //       {/* carousel section  */}
  //       <div className="grid grid-cols-2 ">
  //         <div className="bg-amber-100 rounded-tl-[64px]  ">
  //           <div className="flex justify-center items-center bg-transparent h-[600px] rounded-tl-[64px]">
  //             <img src="https://i.imgur.com/QkIa5tT.jpeg" className="object-contain h-full w-full rounded-tl-[64px]" alt="Lifestyle Shoes" />
  //           </div>
  //           <div className="p-8 flex items-end justify-between gap-4">
  //             <h3 className="text-2xl md:text-4xl font-semibold rubik-600 text-[#232321] whitespace-pre-line leading-tight flex-1">
  //               <h1>asdasdasdad</h1>
  //             </h3>
  //             <button className="w-10 h-10 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0 hover:bg-zinc-800 transition-colors">
  //               <ExternalLink className="w-5 h-5" />
  //             </button>
  //           </div>
  //         </div>
  //         <div className="bg-amber-400 md:-mr-10  ">
  //           <div className="flex justify-center items-center bg-transparent h-[600px] ">
  //             <img src="https://i.imgur.com/QkIa5tT.jpeg" className="object-contain h-full w-full " alt="Lifestyle Shoes" />
  //           </div>
  //           <div className="p-8 flex items-end justify-between gap-4">
  //             <h3 className="text-2xl md:text-4xl font-semibold rubik-600 text-[#232321] whitespace-pre-line leading-tight flex-1">
  //               <h1>asdasdasdad</h1>
  //             </h3>
  //             <button className="w-10 h-10 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0 hover:bg-zinc-800 transition-colors">
  //               <ExternalLink className="w-5 h-5" />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default Category;


  "use client";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ExternalLink } from "lucide-react";

type CategoryType = {
  id: number;
  title: string;
  img: string;
};

const Category = () => {
  const categories: CategoryType[] = [
    { id: 1, title: "Lifestyle Shoes", img: "https://i.imgur.com/QkIa5tT.jpeg" },
    { id: 2, title: "Basketball Shoes", img: "https://i.imgur.com/QkIa5tT.jpeg" },
    { id: 3, title: "Running Shoes", img: "https://i.imgur.com/QkIa5tT.jpeg" },
    { id: 4, title: "Hiking Shoes", img: "https://i.imgur.com/QkIa5tT.jpeg" },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev + 2 >= categories.length ? 0 : prev + 2
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev - 2 < 0 ? categories.length - 2 : prev - 2
    );
  };

  const visibleItems = categories.slice(activeIndex, activeIndex + 2);

  return (
    <section className="bg-[#232321] px-4 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="uppercase text-white rubik-600 font-semibold md:text-[74px] text-4xl md:pt-22.5 md:pb-16">
          Categories
        </h1>

        <div className="flex gap-2 justify-end items-center">
          <button
            onClick={handlePrev}
            className="cursor-pointer bg-[#70706E] hover:bg-black text-white md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-lg flex items-center justify-center"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="cursor-pointer bg-[#E7E7E3] text-black md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-lg flex items-center justify-center border border-gray-200"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 transition-all duration-500">
        {visibleItems.map((item, index) => {
          const isFirstCard = index === 0;
          const isOddDesktop = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`
                ${isFirstCard ? "rounded-tl-[64px]" : ""}
                ${isOddDesktop ? "md:-mr-10" : ""}
                bg-amber-100 transition-all duration-500
              `}
            >
              <div
                className={`
                  flex justify-center items-center h-[400px] md:h-[600px]
                  ${isFirstCard ? "rounded-tl-[64px]" : ""}
                `}
              >
                <img
                  src={item.img}
                  className={`
                    object-contain h-full w-full
                    ${isFirstCard ? "rounded-tl-[64px]" : ""}
                  `}
                  alt={item.title}
                />
              </div>

              <div className="p-6 md:p-8 flex items-end justify-between gap-4">
                <h3 className="text-xl md:text-4xl font-semibold rubik-600 text-[#232321] leading-tight flex-1">
                  {item.title}
                </h3>

                <button className="w-10 h-10 rounded-md bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;