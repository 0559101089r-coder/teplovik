import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { useBaseProducts } from '../module/home';
import { Spin } from 'antd';

import button from '../../../images/button.svg';

export default function Production() {
  const navigate = useNavigate();
  const { data: baseProducts, isLoading } = useBaseProducts();

  if (isLoading) {
    return (
      <div className="my-8 flex justify-center py-20">
        <Spin size="large" tip="Загрузка продукции..." />
      </div>
    );
  }

  const slides = baseProducts?.results || [];

  return (
    <div className="my-8">
      <h2 className="font-roboto font-medium text-4xl leading-[130px] mt-4 ml-5">
        ПРОДУКЦИЯ
      </h2>

      <div className="mx-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={6}
          grabCursor={true}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="!w-[clamp(155px,12.4vw,275px)] rounded-[8px] overflow-hidden flex flex-col"
            >
              <div className="aspect-square rounded-[8px] bg-white flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.description}
                  className="w-[58%] h-[58%] object-contain"
                />
              </div>

              <p className="text-[#DC2626] font-roboto font-medium text-left mt-4 px-0 text-[clamp(10px,0.78vw,16px)] leading-[1.25] min-h-[2.5em]">
                {slide.description}
              </p>

              <div className="mt-2 px-0">
                <img
                  src={button}
                  className="w-[99px] h-[33px] cursor-pointer hover:scale-110 transition-transform"
                  style={{ borderRadius: 0 }}
                  onClick={() => navigate(`/product/${slide.id}`)}
                  alt="Подробнее"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
