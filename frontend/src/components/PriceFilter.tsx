type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-lg font-semibold mb-4 text-gray-800">Max Price</h4>

      <div className="relative">
        <label htmlFor="max-price" className="sr-only">
          Select a maximum price
        </label>
        <select
          id="max-price"
          className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
          value={selectedPrice}
          onChange={(event) =>
            onChange(
              event.target.value ? parseInt(event.target.value) : undefined
            )
          }
        >
          <option value="" disabled hidden>
            Select a max price
          </option>
          {[50, 100, 200, 300, 500].map((price) => (
            <option key={price} value={price}>
              Up to ${price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PriceFilter;
