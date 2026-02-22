
import { Star } from 'lucide-react';
import type { ReviewProps } from '../../../../types/requiredTypes';
export const ReviewCard = ({ review }: { review: ReviewProps }) => {
  return (
    <div className="bg-white rounded-[2rem] h-[400px] lg:h-125 cursor-pointer overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] border border-gray-100">
      {/* Top Section: Info */}
      <div className="md:p-8 p-4">
        <div className="flex justify-between items-start ">
          <div>
            <h3 className="text-xl md:text-2xl rubik-600 font-semibold text-gray-900">{review.title}</h3>
            <p className="open-400 text-[#232321] text-[14px] md:text-[16px] mt-1">{review.comment}</p>
          </div>
          <img 
            src={review.avatar} 
            alt={review.name} 
            className="w-16 h-16 rounded-full  object-cover"
          />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
          ))}
          <span className="ml-2 font-semibold open-600 md:text-[16px] text-[14px] text-[#232321]">{review.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Bottom Section: Image */}
      <div className="">
        <div className="rounded-br-2xl rounded-bl-2xl overflow-hidden  ">
          <img 
            src={review.productImage} 
            alt="Product" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};