type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
  <h4 className="text-lg font-semibold mb-4 text-gray-800">Property Rating</h4>

  {/* Star Ratings List */}
  <div className="space-y-0.3">
    {["5", "4", "3", "2", "1"].map((star) => (
      <label 
        key={star} 
        htmlFor={`star-${star}`} 
        className="flex items-center space-x-3 cursor-pointer hover:bg-slate-100 p-2 rounded-md transition duration-300"
      >
        <input
          id={`star-${star}`} // Associating the label with the checkbox
          type="checkbox"
          className="rounded-md text-blue-600 focus:ring-2 focus:ring-blue-500"
          value={star}
          checked={selectedStars.includes(star)}
          onChange={onChange}
        />
        <span className="text-sm font-medium text-gray-700">{star} Stars</span>
      </label>
    ))}
  </div>
</div>

  )
}

export default StarRatingFilter;