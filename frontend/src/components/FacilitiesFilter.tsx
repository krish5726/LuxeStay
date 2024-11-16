import { hotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-lg font-semibold mb-4 text-gray-800">Facilities</h4>

      {/* Facilities List */}
      <div className="space-y-0.3">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            htmlFor={facility}
            className="flex items-center space-x-3 cursor-pointer hover:bg-slate-100 p-2 rounded-md transition duration-300"
          >
            <input
              id={facility} // Associating the label with the checkbox
              type="checkbox"
              className="rounded-md text-blue-600 focus:ring-2 focus:ring-blue-500"
              value={facility}
              checked={selectedFacilities.includes(facility)}
              onChange={onChange}
            />
            <span className="text-sm font-medium text-gray-700">
              {facility}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesFilter;
