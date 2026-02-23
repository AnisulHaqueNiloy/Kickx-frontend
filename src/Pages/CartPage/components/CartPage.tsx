import { Heart, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { removeFromCart } from "../fetaures/cartSlice";
import toast from "react-hot-toast";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  //   calculate total amount from cart items
  const totalAmount = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    return sum + price * quantity;
  }, 0);
  const dispatch = useAppDispatch();
  const handleDeleteCart = (id: number) => {
    dispatch(removeFromCart(id));
    toast.error("Product removed from cart!", {
      position: "top-right",
      duration: 3000,
    });
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh] py-8">
          <h2 className="text-3xl font-bold text-center mt-20">
            Your cart is empty
          </h2>
        </div>
      ) : (
        <div className="bg-[#E7E7E3]  px-4 md:px-15 pt-2 pb-6 font-sans ">
          {/* Header */}
          <div className="mb-3 ">
            <h1 className="text-2xl md:text-[32px] font-semibold rubik-600 mb-2">
              Saving to celebrate
            </h1>
            <p className="text-sm text-[#232321] opens-600 text-[14px] font-semibold">
              Enjoy up to 60% off thousands of styles during the End of Year
              sale - while suppiles last. No code needed.{" "}
            </p>
            <div className="mt-2 text-sm font-semibold">
              <span className="underline cursor-pointer opens-600 text-[#232321] text-[14px]">
                Join us
              </span>{" "}
              or{" "}
              <span className="underline cursor-pointer opens-600 text-[#232321] text-[14px]">
                Sign-in
              </span>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Side : Items */}
            <div className="lg:col-span-2 bg-white rounded-[1.5rem] p-6 md:p-8 shadow-sm">
              <h2 className="text-[20px] md:text-3xl rubik-600 font-semibold  mb-1">
                Your Bag
              </h2>
              <p className="text-[#232321] opens-400 font-semibold text-[16px] ">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>

              <div className="">
                {cartItems?.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-3  gap-6  pt-8">
                    <div className="flex gap-6 col-span-2">
                      <div className="w-full md:w-48 h-48  rounded-lg  flex items-center justify-center">
                        <img
                          src={item.images?.[0]}
                          alt="Product"
                          className="object-cover rounded-xl w-full h-full"
                        />
                      </div>
                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="md:text-2xl text-[16px] font-semibold rubik-600 uppercase tracking-tight">
                              {item?.title}
                            </h3>
                            <p className="text-gray-500 mt-1 opens-600 text-[12px] md:text-[14px] font-light">
                              {item.description}
                            </p>
                            <p className="text-gray-500 opens-600 text-[12px] md:text-[14px] font-light">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex  md:gap-8 mt-6">
                          <div className="flex  md:gap-2 cursor-pointer group">
                            <span className="text-gray-500 opens-600 text-[14px] md:text-[18px] font-light">
                              Size {item?.size}
                            </span>
                          </div>
                          <div className="flex items-center md:gap-2 cursor-pointer group">
                            <span className="text-gray-500 opens-600 text-[14px] md:text-[18px] font-light">
                              Quantity {item?.quantity}
                            </span>
                          </div>
                        </div>

                        <div className="flex md:hidden">
                          <span className="text-[#4A69E2] md:text-2xl text-[16px] font-semibold rubik-600">
                            ${item?.price}
                          </span>
                        </div>

                        <div className="flex gap-4 mt-2 md:mt-10">
                          <Heart
                            size={22}
                            className="cursor-pointer hover:text-red-500 transition-colors"
                          />
                          <Trash2
                            size={22}
                            onClick={() => handleDeleteCart(item.id)}
                            className="cursor-pointer hover:text-red-600 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex justify-end">
                      <span className="text-[#4A69E2] md:text-2xl text-[16px] font-semibold rubik-600">
                        ${item?.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span className="opens-600 font-semibold text-[18px]">
                    {cartItems?.length} ITEM
                  </span>
                  <span className="opens-600 font-semibold text-[18px]">
                    ${totalAmount}
                  </span>
                </div>
                <div className="flex justify-between opens-600 font-semibold text-[18px]">
                  <span>Delivery</span>
                  <span>$6.99</span>
                </div>
                <div className="flex justify-between opens-600 font-semibold text-[18px]">
                  <span>Sales Tax</span>
                  <span>-</span>
                </div>

                <div className="flex justify-between opens-600 font-semibold text-[18px] pt-4 border-t border-gray-300">
                  <span>Total</span>
                  <span>${totalAmount + 6.99}</span>
                </div>

                <button className="w-full bg-[#232321] text-white py-4 rounded-lg font-bold uppercase tracking-widest mt-6 hover:bg-zinc-800 transition-all active:scale-95">
                  Checkout
                </button>

                <div className="mt-4">
                  <span className="underline cursor-pointer font-bold text-lg">
                    User a promo code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
