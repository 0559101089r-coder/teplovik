import { Popover, Transition, Checkbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon, Squares2X2Icon, ListBulletIcon, CheckIcon } from '@heroicons/react/20/solid'

const categoriesList = [
  "Трубопроводные системы",
  "Арматура и соединения",
  "Отопление",
  "Водоснабжение",
  "Автоматика и контроль",
  "Монтаж и материалы"
]

export default function CatalogFilters() {
  const [selectedCategories, setSelectedCategories] = useState([])

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className='ml-0 md:ml-30 xl:ml-80'>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="group inline-flex items-center rounded-lg bg-[#121212] px-10 md:px-28 py-2 text-base font-medium text-white hover:bg-opacity-90 focus:outline-none">
              <span>Фильтры</span>
              <ChevronDownIcon className={`ml-2 h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 z-10 mt-3 w-[320px]">
                <div className="overflow-hidden rounded-lg bg-[#121212] p-6 text-white shadow-xl">
                  <div className="mb-6">
                    <h3 className="mb-4 text-sm font-semibold text-white">Категории</h3>
                    <div className="space-y-4">
                      {categoriesList.map((category) => (
                        <div key={category} className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="group block size-5 rounded border border-gray-600 bg-transparent data-[checked]:bg-red-700 data-[checked]:border-red-700 focus:outline-none"
                          >
                            <CheckIcon className="hidden size-4 stroke-white group-data-[checked]:block" />
                          </Checkbox>
                          <span 
                            className="text-sm cursor-pointer select-none"
                            onClick={() => toggleCategory(category)}
                          >
                            {category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-semibold text-white">Цена</h3>
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="От" 
                        className="w-full rounded border border-gray-700 bg-transparent p-2 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                      />
                      <input 
                        type="number" 
                        placeholder="До" 
                        className="w-full rounded border border-gray-700 bg-transparent p-2 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button className="w-full rounded-lg bg-[#8b0000] py-3 text-[15px] transition hover:bg-red-700">
                    Применить фильтры
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
} 