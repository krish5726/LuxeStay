import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Hotel</h1>
      <div className="flex flex-wrap gap-6">
        {/* Name */}
        <label className="flex-1 text-gray-700 text-sm font-bold">
          Name
          <input
            type="text"
            className="mt-1 border rounded-lg w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </label>

        {/* City */}
        <label className="flex-1 text-gray-700 text-sm font-bold">
          City
          <input
            type="text"
            className="mt-1 border rounded-lg w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-500 text-xs">{errors.city.message}</span>
          )}
        </label>

        {/* Country */}
        <label className="flex-1 text-gray-700 text-sm font-bold">
          Country
          <input
            type="text"
            className="mt-1 border rounded-lg w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-500 text-xs">
              {errors.country.message}
            </span>
          )}
        </label>
      </div>

      {/* Description */}
      <div className="mt-6">
        <label className="text-gray-700 text-sm font-bold block">
          Description
          <textarea
            rows={6}
            className="mt-1 border rounded-lg w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("description", { required: "This field is required" })}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">
              {errors.description.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex gap-6 mt-6">
        {/* Price per night */}
        <label className="flex-1 text-gray-700 text-sm font-bold">
          Price per night
          <input
            type="number"
            min={1}
            className="mt-1 border rounded-lg w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("pricePerNight", {
              required: "This field is required",
            })}
          />
          {errors.pricePerNight && (
            <span className="text-red-500 text-xs">
              {errors.pricePerNight.message}
            </span>
          )}
        </label>

        {/* Star Rating */}
        <label className="flex-1 text-gray-700 text-sm font-bold">
          Star Rating
          <select
            {...register("starRating", { required: "This field is required" })}
            className="mt-1 border rounded-lg w-full py-2 px-3 text-gray-700 font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled className="text-sm">
              Select Rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-red-500 text-xs">
              {errors.starRating.message}
            </span>
          )}
        </label>
      </div>

    </div>
  );
};

export default DetailsSection;
