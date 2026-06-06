import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { useBaseProducts } from '../module/home';
import { Spin } from 'antd';

import button from '../../../images/button.svg';

const getInternalLink = (link) => {
  if (!link) {
    return '/catalog'
  }

  try {
    const url = new URL(link)
    return `${url.pathname}${url.search}${url.hash}`
  } catch {
    return link
  }
}

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
    <div className="my-8 overflow-hidden">
      <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[130px] mt-4 mx-4 sm:ml-5">
        ПРОДУКЦИЯ
      </h2>

      <div className="mx-4 sm:mx-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          grabCursor={true}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="!w-[min(335px,calc(100vw-32px))] rounded-[8px] overflow-hidden flex flex-col"
            >
              <div className="h-[300px] sm:h-[390px] rounded-[8px] bg-white flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.description}
                  className="w-[58%] h-[58%] object-contain"
                />
              </div>

              <p className="text-[#DC2626] font-roboto font-medium text-left mt-[22px] sm:mt-[30px] px-0 text-[18px] sm:text-[20px] leading-[24px] min-h-[48px] break-words">
                {slide.description}
              </p>

              <div className="mt-[18px] px-0">
                <img
                  src={button}
                  className="w-[99px] h-[33px] cursor-pointer hover:scale-110 transition-transform"
                  style={{ borderRadius: 0 }}
                  onClick={() => navigate(getInternalLink(slide.link))}
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
