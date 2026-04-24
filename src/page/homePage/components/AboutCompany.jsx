import React from "react";
import { useNavigate } from "react-router-dom";
import read from "../../../images/readMore.svg";
import { useBaseAbout } from "../module/home";
import { Spin } from "antd";

const About = () => {
  const navigate = useNavigate();
  const { data: baseAbout, isLoading } = useBaseAbout();

  const goToAbout = () => {
    navigate("/about");
  };

  if (isLoading) {
    return (
      <div className="w-full py-16 flex justify-center">
        <Spin size="large" />
      </div>
    );
  }

  const aboutData = baseAbout?.results?.[0];

  if (!aboutData) return null;

  return (
    <section className="w-full py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-medium mb-8 md:mb-12 uppercase tracking-wide">О КОМПАНИИ</h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-18">
          <img
            src={aboutData.image}
            alt={aboutData.title}
            className="w-full lg:w-[56%] h-[300px] md:h-[480px] object-cover rounded-xl shadow-sm"
          />

          <div className="w-full lg:w-[35%] flex flex-col items-start">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-[#121212]">{aboutData.title}</h3>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              {aboutData.description}
            </p>

            <button 
              onClick={goToAbout}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src={read}
                alt="О нас"
                className="w-[180px] md:w-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
