import { useEffect, useState } from "react";
import type { ReviewProps } from "../../../../types/requiredTypes";
import { ReviewCard } from "./ReviewCard";


function ReviewSection() {
  const reviews: ReviewProps[] = [
    {
      name: "Alex",
      avatar: "https://i.pravatar.cc/150?u=1",
      rating: 5,
      title: "Good Quality",
      comment: "I highly recommend shopping from kicks",
      productImage:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      name: "Sam",
      avatar: "https://i.pravatar.cc/150?u=2",
      rating: 5,
      title: "Good Quality",
      comment: "I highly recommend shopping from kicks",
      productImage:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600",
    },
    {
      name: "John",
      avatar: "https://i.pravatar.cc/150?u=3",
      rating: 5,
      title: "Good Quality",
      comment: "I highly recommend shopping from kicks",
      productImage:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600",
    }, 
  
  ];
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
     
      setIsMobile(window.innerWidth < 765);
      setIsMobile(window.innerWidth > 765)
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const visibleReviews = (isMobile && !showAll) ? reviews.slice(0, 1) : reviews;

  return (
    <div className="md:py-24 py-6 bg-[#EAE9E5] px-4 md:px-10">
      <div className="flex justify-between items-center pb-10">
        <h2 className="text-4xl md:text-7xl font-semibold rubik-600 uppercase">
          Reviews
        </h2>
        
        {/* Button ta shudu tokhon e dorkar jakhon data hidden thakbe */}
       
          <button 
            onClick={()=>setShowAll(!showAll)}
            className="bg-[#4A69E2] cursor-pointer text-white md:px-8 px-4 md:py-3 py-2 w-fit rubik-500 text-sm rounded-lg hover:scale-105 transition-all font-bold uppercase active:scale-95"
          >
            {showAll ? "See less" : "See all"}
          </button>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
        {visibleReviews.map((review, index) => (
          <div 
            key={index} 
            className="animate-in fade-in zoom-in duration-500" // Halka animation
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
