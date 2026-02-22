import { useState } from "react";
import type { ProductType } from "../../types/requiredTypes";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addToCart } from "./fetaures/cartSlice";

export default function CartPage({
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
  };

  const colors = ["black", "green"];
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  return (
    <div className="bg-[#E7E7E3] w-full px-4 md:px-14 py-5 ">
      {/* PC layout */}
      <div className="hidden md:grid md:grid-cols-2 rounded-[48px] gap-8">
        <div className="grid grid-cols-2 gap-2 rounded-[48px] ">
          {pro_details?.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={pro_details?.title}
              className={`w-full h-60 md:h-80 object-cover cursor-pointer 
                ${
                  index === 0
                    ? "rounded-tl-[48px]"
                    : index === 1
                      ? "rounded-tr-[48px]"
                      : index === 2
                        ? "rounded-bl-[48px]"
                        : index === 3
                          ? "rounded-br-[48px]"
                          : ""
                }  `}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
            New Release
          </span>
          <h1 className="text-2xl md:text-4xl font-semibold">
            {pro_details?.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 font-semibold">
            ${pro_details?.price}
          </p>

          {/* Color Selection */}
          <div className="flex items-center gap-3 mt-4">
            <span className="font-semibold">Color:</span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                    selectedColor === color
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <span className="font-semibold">Size:</span>
            <div className="flex gap-2 flex-wrap mt-1">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer ${
                    selectedSize === size ? "bg-gray-300" : "bg-white"
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
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-2 rounded"
            >
              Add to Cart
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Buy It Now
            </button>
          </div>

          {/* About Product */}
          <div className="mt-4">
            <h2 className="font-semibold text-lg mb-2">About the Product</h2>
            <p>{pro_details?.description}</p>
          </div>
        </div>
      </div>

      {/* Mobile layout (similar, can reuse same logic) */}

      <div>
        <div className="md:hidden flex flex-col rounded-lg gap-4">
          {/* Main image */}
          <img
            src={pro_details?.images[selectedImage]}
            alt={pro_details?.title}
            className="w-full h-64 object-contain rounded-lg"
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
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
            New Release
          </span>
          <h1 className="text-2xl font-semibold">{pro_details?.title}</h1>
          <p className="text-xl text-blue-700 font-semibold">
            ${pro_details?.price}
          </p>

          {/* Color Selection */}
          <div className="flex items-center gap-3 mt-2">
            <span className="font-semibold">Color:</span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                    selectedColor === color
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-2">
            <span className="font-semibold">Size:</span>
            <div className="flex gap-2 flex-wrap mt-1">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer ${
                    selectedSize === size ? "bg-gray-300" : "bg-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-2 rounded"
            >
              Add to Cart
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
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
