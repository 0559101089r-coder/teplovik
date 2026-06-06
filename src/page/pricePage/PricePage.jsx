import React from "react";
import { Breadcrumb, Spin, Result } from "antd";
import pdfIcon from "./pricePics/pdf.svg"; 
import downloadBtn from "./pricePics/download.svg"; 
import { usePrices } from "./module/price";

export default function PriceList() {
  const { data: pricesData, isLoading, isError } = usePrices();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F7F7F7]">
        <Spin size="large" tip="Загрузка прайс-листов..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#F7F7F7]">
        <Result
          status="error"
          title="Ошибка загрузки"
          subTitle="Не удалось загрузить прайс-листы. Пожалуйста, попробуйте позже."
        />
      </div>
    );
  }

  const items = pricesData?.results || [];

  return (
    <div className="w-full bg-[#F7F7F7] min-h-screen pt-6 pb-20">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-6">
          <Breadcrumb
            separator=" > "
            items={[
              { title: 'Главная', href: '/' },
              { title: 'Прайс' }
            ]}
          />
        </div>

        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4 min-w-0">
                <img src={pdfIcon} alt="pdf" className="w-10 h-10" />

                <div className="min-w-0">
                  <h3 className="font-semibold text-base sm:text-[18px] break-words">{item.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500 text-[14px] mt-1">
                    <span>{item.size_mb} МБ</span>
                    <span>•</span>
                    <span>Обновлен {item.updated_at}</span>
                  </div>
                </div>
              </div>

              <a href={item.file} target="_blank" rel="noopener noreferrer" className="self-start sm:self-center">
                <img
                  src={downloadBtn}
                  alt="download"
                  className="w-[120px] cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
