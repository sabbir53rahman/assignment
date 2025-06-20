"use client";

import React from "react";
import { FaArrowDown, FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ButtonPrimary from "./dynamic/ButtonPrimary";
import bgImage from "@/assets/bgBottom.png";
import ButtonSecondary from "./dynamic/ButtonSecondary";

const Contact = () => {
  return (
    <section
      className=" flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 md:px-8 lg:px-[50px] py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col gap-8 justify-center  mx-auto lg:w-full lg:mx-0">
        <ButtonSecondary
          icon={<FaArrowDown size={16} />}
          label="Contact"
          className="mt-4"
        />

        <h2 className="heading1 text-black">
          Interested in <br />
          <span className="bg-black text-white px-3 h-[100px] rounded-[12px] inline-block">
            work
          </span>{" "}
          together?
        </h2>

        <p className="max-w-[715px] text-black paragraph">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other
        </p>

        <div className="w-fit">
          <ButtonPrimary
            icon={<FaPhone size={16} />}
            label="Schedule a Call"
            className="mt-4"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-black text-white rounded-[24px] p-8 mt-10 lg:mt-0 flex flex-col gap-10 max-w-[480px] w-full mx-auto">
        <div className="space-y-6">
          <div>
            <label className="text-sm text-[#B8B8B8]">Enter your name</label>
            <input
              type="text"
              className="w-full border-b border-[#C5FF41] bg-transparent mt-1 py-2 focus:outline-none focus:border-lime-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-b border-[#3A3A3A] bg-transparent py-2 placeholder:text-[#B8B8B8] focus:outline-none focus:border-lime-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Describe your project"
              className="w-full border-b border-[#3A3A3A] bg-transparent py-2 placeholder:text-[#B8B8B8] focus:outline-none focus:border-lime-400"
            />
          </div>

          <div className="flex items-center -between gap-4 mt-6 flex-wrap">
            <ButtonPrimary
              icon={<FiSend size={14} />}
              label="Send"
              borderColor="border-white"
              textColor="text-white"
            />
            <p className="text-[18px]">or</p>
            <ButtonPrimary
              icon={<FaPhone size={14} />}
              label="Contact me"
              borderColor="border-white"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-[#B8B8B8] text-sm pt-8 border-t border-[#3A3A3A] mt-8">
          <span>@williamrey</span>
          <div className="flex gap-4 text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
