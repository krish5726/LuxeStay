import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Type</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={`cursor-pointer rounded-full px-4 py-2 text-center font-semibold text-sm transition-all duration-200 
          ${
            typeWatch === type
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />
            {type}
          </label>
        ))}
      </div>

      {errors.type && (
        <span className="text-red-500 text-sm font-semibold mt-2 block">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
