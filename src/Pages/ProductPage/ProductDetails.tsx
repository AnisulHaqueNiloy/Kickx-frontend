import { useState } from "react";
import type { ProductType } from "../../types/requiredTypes";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addToCart } from "../CartPage/fetaures/cartSlice";

import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";

export default function ProductDetails({
  pro_details,
}: {
  pro_details: ProductType;
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedSize, setSelectedSize] = useState<number>(41);

  const dispatch = useAppDispatch();

  const selector = useAppSelector((state) => state?.cart.items);
  console.log("Cart Items:", selector);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...pro_details,
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
      }),
    );

    toast.success("Product added to cart!", {
      position: "top-right",
      duration: 3000,
    });
  };

  const colors = ["black", "#707E6E"];
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  return (
    <div className="bg-[#E7E7E3] w-full px-4 md:px-15 md:py-8 py-6">
      {/* PC layout */}
      <div className="hidden md:grid md:grid-cols-3 rounded-[48px] gap-8">
        <div className="col-span-2 w-full">
          <div className="grid grid-cols-2 gap-2 w-full">
            {pro_details?.images?.map((img, index) => {
              const corners = [
                "rounded-tl-[48px]",
                "rounded-tr-[48px]",
                "rounded-bl-[48px]",
                "rounded-br-[48px]",
              ];

              return (
                <img
                  key={index}
                  src={img}
                  alt={pro_details?.title}
                  className={`w-full h-full block object-cover  cursor-pointer ${corners[index] || ""}`}
                  onClick={() => setSelectedImage(index)}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="bg-blue-600 text-white text-xs rubik-600 font-semibold  md:px-4 md:py-3 rounded-[12px] w-fit">
              New Release
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold rubik-600 uppercase">
              {pro_details?.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 font-semibold rubik-600">
              ${pro_details?.price}.00
            </p>
          </div>

          {/* Color Selection */}
          <div className="flex flex-col  gap-2 mt-4">
            <span className="font-semibold rubik-600 text-lg">Color:</span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center justify-center w-14 h-14 rounded-full border-2 cursor-pointer ${
                    selectedColor === color
                      ? "border-[#232321]"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="font-semibold rubik-600 text-lg ">Size:</span>
              <span className="font-medium rubik-500 text-[14px] uppercase underline">
                Size chart
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mt-1">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center p-4 rounded-lg cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black cursor-pointer text-white rubik-500 text-[14px] py-2 rounded-lg"
              >
                Add to Cart
              </button>

              <button className="w-fit p-2 md:p-4 bg-black cursor-pointer text-white rubik-500 text-[14px] rounded-lg">
                <CiHeart size={20} />
              </button>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer text-white rubik-500 text-[14px] p-4 rounded-lg">
              Buy It Now
            </button>
          </div>

          {/* About Product */}
          <div className="mt-4">
            <h2 className="font-semibold text-lg rubik-600 mb-2">
              About the Product
            </h2>
            <p className="opens-400 text-[#232321]  text-[14px]">
              {pro_details?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout  */}

      <div>
        <div className="md:hidden flex flex-col rounded-lg gap-2">
          {/* Main image */}
          <img
            src={pro_details?.images[selectedImage]}
            alt={pro_details?.title}
            className="w-full h-64 object-cover rounded-xl"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {pro_details?.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={pro_details?.title}
                className={`w-20 h-20 object-contain rounded-lg border cursor-pointer ${
                  selectedImage === index
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          {/* Product info */}
          <span className="bg-blue-600 text-white text-xs rubik-600 font-semibold  px-4 py-2 rounded-[12px] mt-2 w-fit">
            New Release
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold rubik-600 uppercase">
            {pro_details?.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 font-semibold rubik-600">
            ${pro_details?.price}.00
          </p>

          {/* Color Selection */}
          <div className="flex flex-col  gap-3 mt-2">
            <span className="font-semibold">Color:</span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 cursor-pointer ${
                    selectedColor === color
                      ? "border-[#232321]"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-2">
            <div className="flex justify-between">
              <span className="font-semibold rubik-600 text-lg ">Size:</span>
              <span className="font-medium rubik-500 text-[14px] uppercase underline">
                Size chart
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mt-1">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center p-4 rounded-lg cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black cursor-pointer text-white rubik-500 text-[14px] p-4 rounded-lg"
              >
                Add to Cart
              </button>

              <button className="w-fit p-4 md:p-4 bg-black cursor-pointer text-white rubik-500 text-[14px] rounded-lg">
                <CiHeart size={20} />
              </button>
            </div>
            <button className="w-full bg-blue-600 cursor-pointer text-white rubik-500 text-[14px] p-4 rounded-lg">
              Buy It Now
            </button>
          </div>

          {/* About Product */}
          <div className="mt-2">
            <h2 className="font-semibold text-lg mb-2">About the Product</h2>
            <p>{pro_details?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
