import { hotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-lg font-semibold mb-4 text-gray-800">Hotel Type</h4>

      {/* Hotel Types List */}
      <div className="space-y-0.3">
        {hotelTypes.map((hotelType) => (
          <label
            key={hotelType}
            htmlFor={hotelType}
            className="flex items-center space-x-3 cursor-pointer hover:bg-slate-100 p-2 rounded-md transition duration-300"
          >
            <input
              id={hotelType} // Associating the label with the checkbox
              type="checkbox"
              className="rounded-md text-blue-600 focus:ring-2 focus:ring-blue-500"
              value={hotelType}
              checked={selectedHotelTypes.includes(hotelType)}
              onChange={onChange}
            />
            <span className="text-sm font-medium text-gray-700">
              {hotelType}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default HotelTypesFilter;
