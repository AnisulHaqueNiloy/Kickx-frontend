import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ExternalLink } from "lucide-react";
import { useGetCategoryQuery } from "../../Pages/LandingPage/features/categoryApi";
import type { newDropsProps } from "../../types/requiredTypes";

const Category = () => {
  const { data, isLoading, isError } = useGetCategoryQuery();

  const categories: newDropsProps[] = data || [];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 2 >= categories.length ? 0 : prev + 2));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 2 < 0 ? categories.length - 2 : prev - 2));
  };

  const visibleItems = categories.slice(activeIndex, activeIndex + 2);

  return (
    <section className="bg-[#232321] px-4 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between ">
        <h1 className="uppercase text-white rubik-600 font-semibold md:text-[74px] text-4xl md:pt-22.5 pt-6 pb-6 md:pb-16">
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
      <div className="grid grid-cols-1 md:grid-cols-2 transition-all duration-500 md:py-0 py-6">
        {visibleItems?.map((item, index) => {
          const isFirstCard = index === 0;
          const isOddDesktop = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`
                ${isFirstCard ? "rounded-tl-[64px]" : ""}
                ${isOddDesktop ? "md:-mr-10" : ""}
                ${isOddDesktop ? "bg-[#F6F6F6]" : "bg-[#ECEEF0]"} transition-all duration-500
              `}
            >
              <div
                className={`
                  flex justify-center w-full items-center aspect-[4/3] md:aspect-[16/9]
                  ${isFirstCard ? "rounded-tl-[64px]" : ""}
                `}
              >
                <img
                  src={item.image}
                  className={`
                    object-contain h-full w-full bg-transparent
                    ${isFirstCard ? "rounded-tl-[64px]" : ""}
                  `}
                  alt={item.name}
                />
              </div>

              <div className="p-3 md:p-8 mx-6 md:mx-12 flex items-center justify-between gap-4">
                <h3 className="text-xl md:text-4xl lg:ml-5 xl:ml-12 font-semibold rubik-600 text-[#232321] leading-tight flex-1">
                  {item.name}
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
