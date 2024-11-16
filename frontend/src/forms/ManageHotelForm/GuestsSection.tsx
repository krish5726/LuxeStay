import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        {/* Adults Input */}
        <label className="text-gray-700 text-sm font-semibold flex flex-col">
          Adults
          <input
            className="mt-1 border rounded-lg py-2 px-3 font-normal text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-xs font-semibold mt-1">
              {errors.adultCount?.message}
            </span>
          )}
        </label>

        {/* Children Input */}
        <label className="text-gray-700 text-sm font-semibold flex flex-col">
          Children
          <input
            className="mt-1 border rounded-lg py-2 px-3 font-normal text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500 text-xs font-semibold mt-1">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
