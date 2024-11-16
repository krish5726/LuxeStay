import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="flex items-center gap-2 text-gray-700 text-sm font-medium"
          >
            <input
              type="checkbox"
              value={facility}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              {...register("facilities", {
                validate: (facilities) =>
                  facilities && facilities.length > 0
                    ? true
                    : "At least one facility is required",
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold mt-2 inline-block">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
