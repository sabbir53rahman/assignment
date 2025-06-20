"use client";
import banner from "@/assets/banner.png";
import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import ButtonPrimary from "./dynamic/ButtonPrimary";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-[50px] overflow-hidden">
      {/* Background image */}
      <Image
        src={banner}
        alt="Background Banner"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      <div className="absolute left-[50px] bottom-[150px] flex flex-row items-end gap-4 text-black z-10">
        {/* Left Column: Username + Divider */}
        <div className="flex flex-col items-center space-y-4">
          <div
            className="text-[18px]  tracking-wider "
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            @williamrey
          </div>
        </div>

        {/* Right Column: Social Icons */}
        <div className="flex flex-col items-center space-y-4">
          <FaTwitter size={20} />
          <FaInstagram size={20} />
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <FaFacebookF size={14} className="text-white" />
          </div>
          <div className="w-[1px] h-6 bg-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto text-center z-10">
        <h1 className="heading1 text-black text-start max-w-[1240px]">
          Trusted{" "}
          <span className="bg-black text-white px-3 py-1 rounded-[11px] h-[100px] inline-block">
            Partner
          </span>{" "}
          for
          <br />
          Your Website{" "}
          <span className="bg-black text-white px-3 py-1 rounded-[11px] h-[100px] inline-block">
            Develop.
          </span>
        </h1>
        <div className="max-w-[710px] mx-auto text-start">
          <p className="text-black mt-8 paragraph">
            Building the worlds best marketing websites for over a decade.
            <br />
            Your trusted partner for strategy, design, and dev.
          </p>

          <ButtonPrimary
            icon={<FaPhoneAlt size={18} className="text-black" />}
            label="Schedule a Call"
            onClick={() => console.log("Schedule clicked")}
            className="mt-6"
            borderColor="border-black"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
}
