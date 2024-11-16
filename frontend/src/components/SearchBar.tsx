import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };
  const handleClear = () => {
    setDestination("");
    setAdultCount(1);
    setChildCount(0);
    setCheckIn(minDate); // Assuming `null` clears the DatePicker input
    setCheckOut(minDate); // Assuming `null` clears the DatePicker input
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      {/* Destination Input */}
      <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 shadow-sm p-3">
        <MdTravelExplore size={20} className="text-gray-500 mr-3" />
        <input
          placeholder="Where are you going?"
          className="w-full text-sm text-gray-800 bg-transparent focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      {/* Guest Input */}
      <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 shadow-sm p-3 gap-4">
        <label className="flex items-center text-sm text-gray-700">
          <span>Adults:</span>
          <input
            type="number"
            min={1}
            max={20}
            className="w-12 ml-2 text-center bg-gray-50 text-gray-800 focus:outline-none"
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="flex items-center text-sm text-gray-700">
          <span>Children:</span>
          <input
            type="number"
            min={0}
            max={20}
            className="w-12 ml-2 text-center bg-gray-50 text-gray-800 focus:outline-none"
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>

      {/* Check-in Date Picker */}
      <div className="relative">
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in"
          className="w-full bg-gray-50 p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none"
          wrapperClassName="w-full"
        />
      </div>

      {/* Check-out Date Picker */}
      <div className="relative">
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out"
          className="w-full bg-gray-50 p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none"
          wrapperClassName="w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Search
        </button>
        <button
          type="button"
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-colors"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
