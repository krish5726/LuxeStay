import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");
  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Images</h2>

      {/* Existing Images */}
      {existingImageUrls && existingImageUrls.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {existingImageUrls.map((url) => (
            <div
              key={url}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={url}
                alt="Uploaded Preview"
                className="w-full h-32 object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <button
                onClick={(event) => handleDelete(event, url)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* File Input */}
      <div className="flex flex-col gap-2">
        <input
          type="file"
          multiple
          accept="image/*"
          className="block w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);

              if (totalLength === 0) {
                return "At least one image should be added";
              }

              if (totalLength > 6) {
                return "Max images is 6";
              }
            },
          })}
        />
        {errors.imageFiles && (
          <span className="text-red-500 text-sm font-semibold">
            {errors.imageFiles.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImagesSection;
