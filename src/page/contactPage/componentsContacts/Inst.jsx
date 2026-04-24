import React from "react";
import insta from "../contactPics/socials.svg";

export default function ServiceCenter() {
  return (
    <div className="bg-[#FFFFFF] rounded-xl py-[25px] px-[50px] flex flex-col md:flex-row items-end md:items-center justify-between max-w-[1400px] mx-5">
      <div className="flex items-center gap-5">
        <img src={insta} alt="inst icon" className="w-[50px] h-[50px] object-cover" />
        <p className="font-roboto font-semibold text-base text-[#000000] text-[20px]">
          Сервисный центр Бишкек
        </p>
      </div>

      <a href="#" className="text-[#FF0505] font-roboto font-semibold text-[20px]">
        Реквизиты для юр. лиц
      </a>
    </div>
  );
}
