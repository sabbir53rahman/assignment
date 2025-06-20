"use client";

import React from "react";
import bgImage from "@/assets/aboutbg.png";
import ButtonSecondary from "./dynamic/ButtonSecondary";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import logo6 from "@/assets/logo6.png";

function About() {
  const previousCompanies = [
    {
      id: 1,
      logo: logo1,
      style: "bg-[#141414] rotate-[11.73deg]",
      position: "top-[110px] left-[-305px]",
    },
    {
      id: 2,
      logo: logo2,
      style: "bg-white",
      position: "top-[82px] left-[108px]",
    },
    {
      id: 3,
      logo: logo3,
      style: "bg-white",
      position: "top-[140px] left-[370px] rotate-[30deg]",
    },
    {
      id: 4,
      logo: logo4,
      style: "bg-white",
      position: "top-[200px] left-[-400px]",
    },
    {
      id: 5,
      logo: logo5,
      style: "bg-white rotate-[-9.34deg]",
      position: "top-[186px] left-[-70px]",
    },
    {
      id: 6,
      logo: logo6,
      style: "bg-white",
      position: "top-[200px] left-[200px]",
    },
  ];

  return (
    <div>
      <section
        className="flex flex-col lg:items-center lg:justify-between px-4 md:px-8 lg:px-[50px] pt-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Top Content */}
        <div className="max-w-[1120px] flex flex-col gap-[35px] mx-auto pb-[50px]">
          <div className="flex justify-end">
            <ButtonSecondary
              icon={<FaArrowDown size={16} />}
              label="About"
              className="mt-4"
            />
          </div>
          <h2 className="heading1 text-black">
            I’ve been{" "}
            <span className="bg-black text-white px-3 h-[80px] md:h-[100px] rounded-[12px] inline-block">
              Developing
            </span>
            <br />
            Websites since{" "}
            <span className="bg-black text-white px-3 h-[80px] md:h-[100px] rounded-[12px] inline-block">
              2013
            </span>
          </h2>
          <p className="max-w-[925px] mx-auto text-[#1D1D1D] text-center paragraph">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>

        {/* Title */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-[20px]">
          <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-bold leading-[40px]">
            PREVIOUSLY
            <br /> WORKED ON
          </h2>

          {/* Absolute Positioning - XL only */}
          <div className="relative hidden xl:block max-w-[1060px] h-[400px] mx-auto">
            {previousCompanies.map((company) => (
              <div
                key={company.id}
                className={`absolute w-[276px] h-[90px] rounded-[45px] border-2 border-black flex items-center justify-center ${company.style} ${company.position}`}
              >
                <Image
                  src={company.logo}
                  alt="Company logo"
                  width={153}
                  height={76}
                  className="max-w-[153px] max-h-[76px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Responsive Grid - Below XL */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 xl:hidden max-w-[1060px] mx-auto">
            {previousCompanies.map((company) => (
              <div
                key={company.id}
                className={`w-[200px] h-[90px] rounded-[45px] border-2 border-black flex items-center justify-center ${company.style}`}
              >
                <Image
                  src={company.logo}
                  alt="Company logo"
                  width={100}
                  height={40}
                  className="max-w-[100] max-h-[40px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
