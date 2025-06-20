"use client";

import Image from "next/image";
import React from "react";
import rightarrow from "@/assets/rightarrow.png";
import ButtonSecondary from "./dynamic/ButtonSecondary";
import { FaArrowDown } from "react-icons/fa";

const processCards = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    bgColor: "bg-black",
    titleBgColor: "bg_secondary",
    titleTextColor: "text-black",
    position: "xl:col-start-1 xl:row-start-1",
    rotate: false,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    bgColor: "bg_main",
    titleBgColor: "bg-[#141414]",
    titleTextColor: "text-white",
    position: "xl:col-start-2 xl:row-start-1",
    rotate: true,
    textColor: "text-[#141414]",
    textOpacity: "opacity-80",
  },
  {
    id: 3,
    title: "Design",
    description:
      "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    bgColor: "bg-black",
    titleBgColor: "bg_secondary",
    titleTextColor: "text-black",
    position: "xl:col-start-1 xl:row-start-2",
    rotate: false,
  },
  {
    id: 4,
    title: "Build",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    bgColor: "bg-black",
    titleBgColor: "bg_secondary",
    titleTextColor: "text-black",
    position: "xl:col-start-2 xl:row-start-2",
    rotate: false,
  },
];

export const Work = (): JSX.Element => {
  return (
    <section className="py-16 bg-[#141414] rounded-[40px] mx-[10px]  mt-[20px] lg:mt-[-110px]">
      <div className="container mx-auto px-[20px]">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-white text-[30px] md:text-[45px] lg:text-[58px] leading-[60px] md:leading-[86px] text-center mb-4 tracking-[-1.74px]">
            My Work Process
          </h2>

          <div className="flex items-center self-start">
            <ButtonSecondary
              icon={<FaArrowDown size={16} />}
              label="Work Process"
              className="mt-4"
              borderColor="border-white"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {processCards.map((card) => (
            <div
              key={card.id}
              className={`${card.rotate ? "transform rotate-[3.85deg]" : ""} ${
                card.position
              }`}
            >
              <div
                className={`
                  w-full h-[280px] ${card.bgColor} rounded-[30px] relative overflow-hidden
                  transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]
                `}
              >
                <div className="absolute top-[30px] left-[30px]">
                  <div
                    className={`px-8 h-10 ${card.titleBgColor} rounded-[20px] flex items-center justify-center`}
                  >
                    <span
                      className={`font-['Sporting_Grotesque-Regular',Helvetica] font-normal ${card.titleTextColor} text-xl leading-[34px]`}
                    >
                      {card.title}
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute top-[114px] left-[30px] max-w-[566px] ${
                    card.textOpacity || "opacity-70"
                  } ${
                    card.textColor || "text-white"
                  } font-['Sporting_Grotesque-Regular',Helvetica] font-normal text-lg leading-[33px]`}
                >
                  {card.description}
                </div>

                <div className="absolute top-[43px] right-[140px] flex items-center">
                  <Image
                    className={`w-[23px] h-4 mr-2 ${
                      card.rotate ? "rotate-[-3.85deg]" : ""
                    }`}
                    src={rightarrow}
                    alt="Vector"
                    width={23}
                    height={16}
                  />
                  <span
                    className={`font-['Sporting_Grotesque-Regular',Helvetica] font-normal ${
                      card.textColor || "text-white"
                    } text-base leading-[18px] underline tracking-[-0.32px]`}
                  >
                    Read More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
