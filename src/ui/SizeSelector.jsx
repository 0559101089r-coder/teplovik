import React, { useState } from 'react';

const sizes = [20, 25, 32, 40, 50, 63];
const fullSize = ['25x20', '32x20', '32x25', '40x20', '40x25', '40x32', '50x20', '50x25', '50x32', '50x40', '63x20', '63x25', '63x32', '63x40', '63x50'];

export default function SizeSelector({ type }) {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const sizeOptions = type === 'fullSize' ? fullSize : sizes;

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE и Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari и Opera */
        }
      `}</style>

      <div className="mb-4">
        <p className="text-base font-roboto font-normal mb-2">Размер:</p>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {sizeOptions.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-10 flex items-center justify-center border rounded-lg text-base font-roboto font-normal cursor-pointer select-none transition-colors duration-200
                ${
                  selectedSize === size
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
