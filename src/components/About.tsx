import React from "react";
import bgImage from "@/assets/aboutbg.png";
import ButtonSecondary from "./dynamic/ButtonSecondary";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

function About() {
  const previousCompanies = [
    { id: 1, logo: "/vector-9.svg", style: "bg-[#141414] rotate-[11.73deg]" },
    { id: 2, logo: "/vector-4.svg", style: "bg-white" },
    { id: 3, logo: "/facebook.svg", style: "bg-white" },
    { id: 4, logo: "/vector-10.svg", style: "bg-white" },
    { id: 5, logo: "/vector-8.svg", style: "bg-white rotate-[-9.34deg]" },
    { id: 6, logo: "/vector-12.svg", style: "bg-white rotate-[16.97deg]" },
  ];
  return (
    <div>
      <section
        className=" flex flex-col lg:items-center lg:justify-between px-4 md:px-8 lg:px-[50px] py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="max-w-[1075px] flex flex-col gap-[35px] mx-auto">
          <div className="flex justify-end">
            <ButtonSecondary
              icon={<FaArrowDown size={16} />}
              label="About"
              className="mt-4 "
            />
          </div>
          <h2 className="heading1 text-black">
            I’ve been{" "}
            <span className="bg-black text-white px-3 h-[100px] rounded-[12px] inline-block">
              Developing
            </span>
            <br />
            Websites since
            <span className="bg-black text-white px-3 h-[100px] rounded-[12px] inline-block">
              2013
            </span>
          </h2>
          <p className="max-w-[925px] mx-auto text-[#1D1D1D] text-center paragraph">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
        <div className="flex gap-[20px]">
            <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-bold leading-[40px]">PREVIOUSLY<br /> WORKED ON</h2>
          <div className="max-w-[1060px] flex flex-wrap justify-center gap-6 flex-1">
            {previousCompanies.map((company) => (
              <div
                key={company.id}
                className={`w-[276px] h-[90px] rounded-[45px] border-2 border-solid border-black flex items-center justify-center ${company.style}`}
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
        </div>
      </section>
    </div>
  );
}

export default About;
