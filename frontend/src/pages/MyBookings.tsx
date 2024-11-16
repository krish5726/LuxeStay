import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import './MyBookings.css'
const MyBookings = () => {
  const { data: hotels } = useQuery(
    "fetchMyBookings",
    apiClient.fetchMyBookings
  );

  if (!hotels || hotels.length === 0) {
    return <span>No bookings found</span>;
  }

  return (
    <div className="space-y-8 p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">My Bookings</h1>
      {hotels.map((hotel) => (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] border border-gray-200 rounded-xl shadow-md p-6 gap-6 bg-white">
          <div className="lg:w-full lg:h-[250px] overflow-hidden rounded-lg">
            <img
              src={hotel.imageUrls[0]}
              alt={hotel.name}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px]">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{hotel.name}</h2>
              <div className="text-sm text-gray-500">
                {hotel.city}, {hotel.country}
              </div>
            </div>
            {hotel.bookings.map((booking, index) => (
              <div key={index} className="border-t pt-4">
                <div className="text-sm">
                  <span className="font-semibold text-gray-700 mr-2">
                    Dates:
                  </span>
                  <span className="text-gray-600">
                    {new Date(booking.checkIn).toDateString()} -{" "}
                    {new Date(booking.checkOut).toDateString()}
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-700 mr-2">
                    Guests:
                  </span>
                  <span className="text-gray-600">
                    {booking.adultCount} adults, {booking.childCount} children
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
