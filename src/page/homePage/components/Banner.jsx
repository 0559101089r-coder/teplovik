import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../../images/banner.png";
import watchCat from "../../../images/watchcatalog.svg";
import consult from "../../../images/consult.svg";

const Banner = () => {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate("/catalog");
  };

  const goToContacts = () => {
    navigate("/contacts");
  };

  return (
    <section
      className="relative w-full bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="relative z-10 flex flex-col justify-center h-full text-white text-left py-12 px-6 md:py-[52px] md:px-[61px]">

        <h1 className="font-roboto text-[32px] xs:text-[40px] sm:text-[50px] md:text-[76px] font-semibold mb-6 md:mb-9 leading-tight md:leading-snug max-w-4xl">
          СОВРЕМЕННЫЕ СИСТЕМЫ
          ОТОПЛЕНИЯ И ВОДОСНАБЖЕНИЯ 
          ДЛЯ ВАШЕГО ДОМА
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div> 
            <button
              onClick={goToCatalog}
              className="py-2 flex items-center"
            >
              <img
                src={watchCat}
                alt="Каталог"
                className="w-[180px] md:w-auto hover:scale-105 transition-transform"
              />
            </button>
          </div>

          <div>
            <button
              onClick={goToContacts}
              className="py-2 flex items-center"
            >
              <img
                src={consult}
                alt="Консультация"
                className="w-[180px] md:w-auto hover:scale-105 transition-transform"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
