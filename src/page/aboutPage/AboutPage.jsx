import { Breadcrumb } from 'antd';
import Counter from './Counter';
import { useAboutData } from './module/about';

export default function AboutSection() {
  const { data: details } = useAboutData();

  const detail_res = details?.results[0] || {};
  
  return (
    <section className="w-full bg-[#F9F9F9] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Breadcrumb
            separator=" > "
            items={[{ title: 'Главная', href: '/' }, { title: detail_res.name }]}
          />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-left mb-8 break-words">{detail_res.name}</h2>

        <div className="mb-10 bg-[#FFFFFF] px-[13px] py-[29px] rounded-[16px]">
          <p className="break-words">
            {detail_res.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="text-[34px] sm:text-[42px] font-bold text-[#E40000]">
              <Counter end={detail_res.year || 0} />
            </div>
            <p className="mt-2 text-[#4B5563] text-md font-medium">
              Год основания
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center">
            <div className="text-[34px] sm:text-[42px] font-bold text-[#E40000]">
              <Counter end={detail_res.retail_outlets || 0} />
            </div>
            <p className="mt-2 text-[#4B5563] text-md font-medium">
              Торговых точек
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center">
            <div className="text-[34px] sm:text-[42px] font-bold text-[#E40000]">
              <Counter end={detail_res.trading_positions || 0} suffix="+" />
            </div>
            <p className="mt-2 text-[#4B5563] text-md font-medium">
              Товарных позиций
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            detail_res?.images?.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={image.description}
                className="w-full h-auto rounded-[10px] object-cover"
              />
            ))
          }
         
        </div>
      </div>
    </section>
  );
}
