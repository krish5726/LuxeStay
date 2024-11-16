import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import "./MyHotels.css";
const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {
        onError: () => {};
      },
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-8 p-6 bg-gray-50">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex items-center bg-blue-600 rounded-lg text-white font-bold px-5 py-3 hover:bg-blue-700 shadow-md transition-all duration-200"
        >
          Add Hotel
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div className="flex flex-col justify-between border border-gray-200 rounded-xl shadow-md bg-white p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">{hotel.name}</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {hotel.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="border border-gray-300 rounded-lg p-4 flex items-center text-gray-700 text-sm bg-gray-50">
                <BsMap className="mr-2 text-red-600" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center text-gray-700 text-sm bg-gray-50">
                <BsBuilding className="mr-2" />
                {hotel.type}
              </div>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center text-gray-700 text-sm bg-gray-50">
                <BiMoney className="mr-2 text-green-700" />$
                {hotel.pricePerNight} per night
              </div>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center text-gray-700 text-sm bg-gray-50">
                <BiHotel className="mr-2" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center text-gray-700 text-sm bg-gray-50">
                <AiFillStar className="mr-2 text-yellow-400" />
                {hotel.starRating} star rating
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="bg-blue-600 text-white rounded-lg px-5 py-2 font-bold shadow-md hover:bg-blue-700 transition-all duration-200"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
