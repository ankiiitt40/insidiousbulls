import React from "react";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  location: string;
  rating: number; // out of 5
  review: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  location,
  rating,
  review,
  image,
}) => {
  return (
    <div
  className="
    w-[320px] 
    min-h-[260px]
    bg-white/5                 /* transparent */
    border border-white/10
    rounded-3xl 
    p-6
    text-white
    backdrop-blur-lg            /* glass effect */
    shadow-xl shadow-black/30
    hover:scale-[1.03]
    transition-all duration-300
    flex flex-col justify-between
  "
>

      {/* Top Section */}
      <div>
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border border-white/20"
          />

          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-white/60">
              {role} • {location}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-white/10"></div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white/60 text-sm">
            {rating.toFixed(1)}
          </span>

          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < rating ? "currentColor" : "none"}
                className={i < rating ? "text-yellow-400" : "text-white/20"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <div className="mt-2 overflow-hidden">
  <p className="text-white/80 leading-relaxed text-sm break-words max-h-[80px] overflow-hidden">
    {review}
  </p>
</div>

    </div>
  );
};

export default ReviewCard;
