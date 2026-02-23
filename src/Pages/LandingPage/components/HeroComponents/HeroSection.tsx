import NewDrops from "../../../../Components/Shared/NewDrops";
import Banner from "./Banner";

import type { newDropsProps } from "../../../../types/requiredTypes";
import { useNewDrops } from "../../../../customHooks/useNewDrop";

function HeroSection() {
  const product = useNewDrops().product;

  const shoesProducts = product.filter(
    (item) => item.category?.name === "Shoes",
  );
  const p: newDropsProps[] = shoesProducts || [];

  return (
    <div className="">
      <div className="flex justify-center ">
        <h1 className="uppercase rubik-700 font-bold text-black  xl:text-[200px] lg:text-[150px] md:text-[100px] sm:text-[54px]  text-[48px] w-fit text-center">
          Do it <span className="text-[#4A69E2]">right</span>
        </h1>
      </div>
      <Banner />
      <NewDrops products={p} />
    </div>
  );
}

export default HeroSection;
