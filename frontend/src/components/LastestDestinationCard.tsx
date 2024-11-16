import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
    >
      {/* Image Section */}
      <div className="h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay Details */}
      <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-lg font-semibold tracking-wide">
            {hotel.city}, {hotel.country}
          </span>
          <span className="text-yellow-400 font-bold text-xl mt-2">
            Starting at ${hotel.pricePerNight} / night
          </span>
          {/* Star Rating */}
          <span className="flex">
            {Array.from({ length: hotel.starRating }).map((_, index) => (
              <AiFillStar key={index} className="text-yellow-400" />
            ))}
          </span>
        </div>
        <h3 className="text-white font-bold text-2xl truncate">{hotel.name}</h3>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
