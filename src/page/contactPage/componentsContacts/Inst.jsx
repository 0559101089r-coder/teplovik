import React from "react";
import insta from "../contactPics/socials.svg";

export default function ServiceCenter() {
  return (
    <div className="bg-[#FFFFFF] rounded-xl py-5 sm:py-[25px] px-4 sm:px-[50px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-[1400px] mx-4 sm:mx-5">
      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
        <img src={insta} alt="inst icon" className="w-[50px] h-[50px] object-cover" />
        <p className="font-roboto font-semibold text-[#000000] text-base sm:text-[20px] break-words">
          Сервисный центр Бишкек
        </p>
      </div>

      <a href="#" className="text-[#FF0505] font-roboto font-semibold text-base sm:text-[20px] break-words">
        Реквизиты для юр. лиц
      </a>
    </div>
  );
}
