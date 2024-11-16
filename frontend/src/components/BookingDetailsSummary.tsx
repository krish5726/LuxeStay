import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-6 rounded-lg border border-gray-300 shadow-lg p-6 bg-white">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-3">
        Booking Summary
      </h2>

      {/* Location */}
      <div>
        <p className="text-gray-600 text-sm">Location</p>
        <p className="font-semibold text-gray-800">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</p>
      </div>

      {/* Dates */}
      <div className="flex justify-between items-center">
        <div className="text-center">
          <p className="text-gray-600 text-sm">Check-in</p>
          <p className="font-semibold text-gray-800">
            {checkIn.toDateString()}
          </p>
        </div>
        <div className="h-full border-l border-gray-300"></div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Check-out</p>
          <p className="font-semibold text-gray-800">
            {checkOut.toDateString()}
          </p>
        </div>
      </div>

      {/* Stay Duration */}
      <div className="flex justify-between items-center border-t pt-3">
        <p className="text-gray-600 text-sm">Total Length of Stay</p>
        <p className="font-semibold text-gray-800">{numberOfNights} nights</p>
      </div>

      {/* Guests */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">Guests</p>
        <p className="font-semibold text-gray-800">
          {adultCount} adults & {childCount} children
        </p>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
