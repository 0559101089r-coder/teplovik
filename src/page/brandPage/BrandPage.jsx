import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Spin, Result } from 'antd'
import { useBrands } from './module/brand'

export default function BrandPage() {
  const { data: brands, isLoading, isError } = useBrands();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F5F5F5]">
        <Spin size="large" tip="Загрузка брендов..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F5F5F5]">
        <Result
          status="error"
          title="Ошибка загрузки"
          subTitle="Не удалось загрузить список брендов. Пожалуйста, попробуйте позже."
        />
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F5F5F5] py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-6">
          <Breadcrumb
            separator=" > "
            items={[
              { title: 'Главная', href: '/' },
              { title: 'Бренды' }
            ]}
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Бренды
        </h2>

        <div
          className="
            grid 
            grid-cols-2
            sm:grid-cols-3 
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-y-12 gap-x-10 
            justify-items-center
          "
        >
          {brands?.results?.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="flex items-center justify-center w-[160px] h-[90px]"
            >
              <img
                src={brand?.image}
                alt={brand?.name || `brand-${brand.id}`}
                className="
                  max-h-[90px] max-w-[160px]
                  object-contain
                  transition-transform duration-200
                  hover:scale-110
                "
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
