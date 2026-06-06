import React, { useState } from "react";
import { Breadcrumb } from "antd";
import call from "../contactPics/call.svg";
import twoGis from "../contactPics/2GIS.svg";

const contacts = [
  {
    city: "г. Ош",
    phones: [
      { number: "+996 555 90-99-06", address: "ул. Атабаева 156 а" },
      { number: "0 550 65-90-80", address: "ул. Курманжан Датка 345" },
      { number: "0 755 06-44-00", address: "ул. А.Шакирова 108/1" },
      { number: "0 555 51-15-15", address: "ул. Памирская 13/1" },
    ],
  },
];

export default function Contacts() {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const handlePhoneClick = (number) => setSelectedPhone(number);
  const handleConfirmCall = (number) => {
    window.location.href = `tel:${number}`;
    setSelectedPhone(null);
  };
  const handleCancel = () => setSelectedPhone(null);

  return (
    <div className="bg-[#F9F9F9] py-6 md:py-10">

    <div className="bg-[#F9F9F9] py-6 md:py-10">

      <div className="max-w-7xl mx-auto px-6 mb-5">
        <Breadcrumb
          separator=">"
          items={[
            { title: "Главная", href: "/" },
            { title: "Контакты" },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl shadow-sm w-full lg:w-2/3">
          <h1 className="text-2xl font-inter font-semibold mb-6 text-[#111827]">
            {contacts[0].city}
          </h1>

          <div className="space-y-4">
            {contacts[0].phones.map((p, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 py-6 relative ${
                  i !== contacts[0].phones.length - 1
                    ? "border-b border-[#F3F4F6]"
                    : ""
                }`}
              >
                <div className="flex gap-4 min-w-0">
                  <img src={call} alt="phone icon" className="w-5 h-5 mt-1" />
                  <div className="min-w-0">
                    <p
                      className="text-[#FF0505] font-roboto font-bold text-lg md:text-xl cursor-pointer hover:underline break-words"
                      onClick={() => handlePhoneClick(p.number)}
                    >
                      {p.number}
                    </p>
                    <p className="text-[#555555] font-roboto font-normal text-sm mt-3 break-words">
                      {p.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img src={twoGis} alt="2gis icon" className="w-8 h-8 md:w-9 md:h-9" />
                </div>

                {selectedPhone === p.number && (
                  <div className="absolute right-0 top-full sm:top-1/2 sm:-translate-y-1/2 bg-white p-4 rounded-xl shadow-xl mt-2 sm:mt-0 z-10 border border-gray-100">
                    <p className="mb-3 text-sm font-medium">Позвонить на {p.number}?</p>
                    <div className="flex gap-3">
                      <button
                        className="bg-[#FF0505] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                        onClick={() => handleConfirmCall(p.number)}
                      >
                        Да
                      </button>
                      <button
                        className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
                        onClick={handleCancel}
                      >
                        Нет
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
