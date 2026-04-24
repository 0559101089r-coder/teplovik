import useCounterStore from "./store";

function Counter({ productId, onChange }) {
  const { getCount, increment, decrement } = useCounterStore();
  const count = getCount(productId);

  const handleIncrement = () => {
    increment(productId);
    if (onChange) onChange(1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      decrement(productId);
      if (onChange) onChange(-1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md w-[150px] h-[40px] select-none">
      <button
        onClick={handleDecrement}
        className="w-[50px] text-2xl text-gray-700 rounded-l-md hover:bg-gray-100"
      >
        −
      </button>

      <span className="w-[50px] flex items-center justify-center text-lg">
        {count}
      </span>

      <button
        onClick={handleIncrement}
        className="w-[50px] text-2xl text-gray-700 rounded-r-md hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
