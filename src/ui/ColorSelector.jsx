import React, { useState } from 'react';

const colors = [
  { name: 'Black', class: 'bg-black' },
  { name: 'White', class: 'bg-white border border-gray-400' },
  { name: 'Gray', class: 'bg-gray-500' },
];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);

  return (
    <div className="mb-4">
      <p className="text-base font-roboto font-normal mb-2">Цвет:</p>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color.name)}
            className={`
              w-8 h-8 rounded-full 
              flex items-center justify-center 
              cursor-pointer select-none transition-all duration-200
              ${color.class}
              ${
                selectedColor === color.name
                  ? 'ring-2 ring-offset-2 ring-black'
                  : ''
              }
            `}
            aria-label={`Выбрать цвет ${color.name}`}
            title={color.name}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
