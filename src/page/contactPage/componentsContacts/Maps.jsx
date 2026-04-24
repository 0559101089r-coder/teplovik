import React from "react";

export default function MapSection() {
  return (
    <div className="w-full max-w-[1400px] h-[660px] mx-auto mt-10 px-6">
      <div className="bg-[#FFFFFF] rounded-xl pt-10 w-full">
        
        <div className="mb-9 pr-10 border-b border-[#E5E7EB]">
          <button className="text-[#E53935] font-roboto font-medium text-lg border-b-2 border-[#E53935] pb-6 w-[130px]">
            Ош
          </button>
        </div>

        <div className="bg-[#F2F2F4] rounded-xl max-w-[1088px] w-full h-[384px] overflow-hidden mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.3133299262886!2d72.81604437515541!3d40.512565049802284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdae8fb21dbcf5%3A0xb76489b249adb296!2sDATKA%20shopping%20mall!5e0!3m2!1sru!2skg!4v1764094492515!5m2!1sru!2skg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Osh Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
