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
        <Swiper slidesPerView={4} spaceBetween={1} grabCursor={true} breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}>
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="w-[335px] h-[400px] rounded-[12px] overflow-hidden flex flex-col"
            >
              <img
                src={slide.image}
                alt={slide.description}
                className="w-[313px] h-[390px] object-cover rounded-[12px]"
              />

              <p className="text-[#DC2626] font-roboto font-medium text-left mt-5 px-1 truncate">
                {slide.description}
              </p>

              <div className="mt-2 px-1">
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
