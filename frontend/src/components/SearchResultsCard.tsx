import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-gray-200 rounded-xl shadow-lg p-6 gap-6 bg-white">
      {/* Hotel Image Section */}
      <div className="w-full h-[300px] overflow-hidden rounded-lg">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center transition-transform transform hover:scale-105"
          alt={hotel.name}
        />
      </div>

      {/* Hotel Information Section */}
      <div className="flex flex-col justify-between space-y-4">
        {/* Hotel Title & Rating */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
            <span className="text-sm text-gray-500">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors"
          >
            {hotel.name}
          </Link>
        </div>

        {/* Hotel Description */}
        <div className="text-sm text-gray-600 line-clamp-4">
          {hotel.description}
        </div>

        {/* Facilities and Price Section */}
        <div className="flex justify-between items-end">
          <div className="flex gap-2 items-center">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-gray-200 p-2 rounded-full text-xs font-medium text-gray-700"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="text-sm text-gray-500">
                +{hotel.facilities.length - 3} more
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="font-bold text-lg text-gray-800">
              £{hotel.pricePerNight} per night
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
