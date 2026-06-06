import { Popover, PopoverButton, PopoverPanel, Transition, Checkbox } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useCategories } from './module/catalog'
import { useBrands } from '../brandPage/module/brand'

const getList = (data) => data?.results || data || []
const defaultCategories = [
  { id: 'Трубопроводные системы', name: 'Трубопроводные системы' },
  { id: 'Отопление', name: 'Отопление' },
  { id: 'Арматура и соединения', name: 'Арматура и соединения' },
  { id: 'Водоснабжение', name: 'Водоснабжение' },
  { id: 'Автоматика и контроль', name: 'Автоматика и контроль' },
  { id: 'Монтаж и материалы', name: 'Монтаж и материалы' },
]

const getCategoryOptions = (data) => {
  const categories = data?.category_options || data?.categories || data?.results || []

  if (!Array.isArray(categories) || categories.length === 0) {
    return defaultCategories
  }

  return categories.map((category) => {
    if (typeof category === 'string') {
      return {
        id: category,
        name: category,
      }
    }

    return {
      ...category,
      id: category.id ?? category.name,
      name: category.name ?? category.title,
    }
  }).filter((category) => category.id && category.name)
}

export default function Filters({ initialFilters = {}, onFilter }) {
  const { data: categoriesData } = useCategories()
  const { data: brandsData } = useBrands()

  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [selectedBrand, setSelectedBrand] = useState(initialFilters.brand || '')

  const categories = getCategoryOptions(categoriesData)
  const brands = getList(brandsData)

  useEffect(() => {
    setSelectedBrand(initialFilters.brand || '')
  }, [initialFilters.brand])

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleApply = () => {
    onFilter?.({
      category: selectedCategories.join(','),
      min_price: priceFrom,
      max_price: priceTo,
      brand: selectedBrand,
    })
  }

  return (
    <div className='ml-0 md:ml-30 xl:ml-80'>
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <PopoverButton className="group inline-flex items-center rounded-lg bg-[#121212] px-10 md:px-28 py-2 text-base font-medium text-white hover:bg-opacity-90 focus:outline-none">
              <span>Фильтры</span>
              <ChevronDownIcon className={`ml-2 h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-0 z-10 mt-3 w-[320px]">
                <div className="overflow-hidden rounded-lg bg-[#121212] p-6 text-white shadow-xl">
                  <div className="mb-6">
                    <h3 className="mb-4 text-sm font-semibold text-white">Категории</h3>
                    <div className="space-y-4">
                      {categories.map((category) => {
                        const categoryId = String(category.id)

                        return (
                          <div key={categoryId} className="flex items-center gap-3">
                            <Checkbox
                              checked={selectedCategories.includes(categoryId)}
                              onChange={() => toggleCategory(categoryId)}
                              className="group block size-5 rounded border border-gray-600 bg-transparent data-[checked]:bg-red-700 data-[checked]:border-red-700 focus:outline-none cursor-pointer"
                            >
                              <CheckIcon className="hidden size-4 stroke-white group-data-[checked]:block" />
                            </Checkbox>
                            <span
                              className="text-sm cursor-pointer select-none"
                              onClick={() => toggleCategory(categoryId)}
                            >
                              {category.name}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-semibold text-white">Цена</h3>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={priceFrom}
                        onChange={(e) => setPriceFrom(e.target.value)}
                        placeholder="От"
                        className="w-full rounded border border-gray-700 bg-transparent p-2 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                      />
                      <input
                        type="number"
                        value={priceTo}
                        onChange={(e) => setPriceTo(e.target.value)}
                        placeholder="До"
                        className="w-full rounded border border-gray-700 bg-transparent p-2 text-sm placeholder-gray-500 focus:border-red-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-semibold text-white">Бренд</h3>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full rounded border border-gray-700 bg-[#121212] p-2 text-sm text-white focus:border-red-600 focus:outline-none"
                    >
                      <option value="">Все бренды</option>
                      {brands.map((brand) => (
                        <option key={brand.id} value={brand.name}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => {
                      handleApply()
                      close()
                    }}
                    className="w-full rounded-lg bg-[#8b0000] py-3 text-[15px] transition hover:bg-red-700 active:scale-95"
                  >
                    Применить фильтры
                  </button>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
