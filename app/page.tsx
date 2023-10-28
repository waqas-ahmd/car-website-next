"use client";

import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [vehicle, setVehicle] = React.useState(0);
  const [paymentType, setPaymentType] = React.useState("Buy");
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <nav className="p-3 flex flex-col items-center bg-white w-full">
        <div className="max-w-5xl w-full flex flex-row justify-between">
          <Link href="/">
            <Image
              src="/assets/images/Logo.png"
              className="h-14 object-contain"
              width={160}
              height={80}
              alt="Logo"
            />
          </Link>

          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-1 items-center">
              Search
              <Image
                src="/assets/icons/arrow_down.svg"
                alt="Arrow"
                height={18}
                width={18}
              />
            </div>
            <div>News & Guides</div>
            <button className="bg-red py-2 px-8 text-white rounded-lg">
              Sell
            </button>
          </div>

          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-1 items-center">
              <Image
                src="/assets/icons/bell.svg"
                alt="Arrow"
                height={24}
                width={24}
              />
              <Image
                src="/assets/icons/arrow_down.svg"
                alt="Arrow"
                height={18}
                width={18}
              />
            </div>
            <Image
              src="/assets/icons/star.svg"
              alt="Arrow"
              height={24}
              width={24}
            />
            <Image
              src="/assets/icons/chat.svg"
              alt="Arrow"
              height={24}
              width={24}
            />
            <button className="bg-blue py-2 px-8 text-white rounded-lg">
              Login
            </button>
          </div>
        </div>
      </nav>

      <section className="w-full px-3 flex flex-col items-center relative">
        <Image
          src="/assets/images/Pozadina.png"
          width={1400}
          height={500}
          alt="Cars"
          className="absolute top-0 left-0 h-full max-h-[300px] w-full object-cover"
        />
        <div className="w-full max-w-5xl py-20">
          <div className="relative w-fit">
            <div className="absolute top-0 left-0 w-full h-full bg-white z-0 blur-xl"></div>
            <div className="relative z-[1]">
              <p className={"text-5xl font-semibold " + lora.className}>
                Find Your <span className="text-red">Dream Car</span> Here
              </p>
              <p className="text-[#444444] text-lg">Search from 70,862 cars</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-lg overflow-hidden w-full relative z-20 mt-8">
            <div className="flex flex-row w-full">
              {["car", "motorcycle", "bicycle", "truck", "van", "boat"].map(
                (v, i) => (
                  <div
                    onClick={() => setVehicle(i)}
                    className={`py-2 flex-1 flex flex-col justify-center items-center cursor-pointer ${
                      vehicle === i ? "bg-white" : "bg-[#EBEBEB]"
                    }`}
                    key={i}
                  >
                    <Image
                      src={`/assets/icons/${v}_${
                        vehicle === i ? "red" : "black"
                      }.svg`}
                      height={30}
                      width={60}
                      className="w-7"
                      alt="car"
                    />
                  </div>
                )
              )}
            </div>
            <div className="p-4 grid grid-cols-4 gap-4">
              <div className="col-span-3 grid grid-cols-4 gap-2">
                <div className="col-span-3 flex flex-col gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    <select className="border border-[#B8B8B8] rounded-lg p-2">
                      <option>Make</option>
                    </select>
                    <select className="border border-[#B8B8B8] rounded-lg p-2">
                      <option>Model</option>
                    </select>
                    <input
                      className="border border-[#B8B8B8] rounded-lg p-2"
                      placeholder="Variant"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <select className="border border-[#B8B8B8] rounded-lg p-2">
                      <option>Price From</option>
                    </select>
                    <select className="border border-[#B8B8B8] rounded-lg p-2">
                      <option>Price Up to</option>
                    </select>
                    <select className="border border-[#B8B8B8] rounded-lg p-2">
                      <option>Year From</option>
                    </select>
                    <select className="border border-[#B8B8B8] rounded-lg p-2">
                      <option>Year Up to</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <select className="border border-[#B8B8B8] rounded-lg p-2 col-span-1">
                      <option>Fuel Type</option>
                    </select>
                    <div className="border border-[#B8B8B8] rounded-lg col-span-3 flex flex-row items-center">
                      <p className="flex-1 p-2">Payment Type</p>
                      <div
                        onClick={() => setPaymentType("Buy")}
                        className={`p-2 flex-1 text-center rounded-lg cursor-pointer ${
                          paymentType === "Buy"
                            ? "bg-blue border border-blue text-white"
                            : "text-blue"
                        } font-medium`}
                      >
                        Buy
                      </div>
                      <div
                        onClick={() => setPaymentType("Leasing")}
                        className={`p-2 flex-1 text-center rounded-lg cursor-pointer ${
                          paymentType === "Leasing"
                            ? "bg-blue border border-blue text-white"
                            : "text-blue"
                        } font-medium`}
                      >
                        Leasing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <button className="bg-blue border border-blue text-white py-2 px-1 tracking-tight rounded-lg flex flex-row items-center justify-center gap-2">
                    + Add another vehicle
                  </button>

                  <select
                    className="border border-[#B8B8B8] rounded-lg p-2"
                    placeholder="Vehicle Type"
                  >
                    <option>Vehicle Type</option>
                  </select>
                  <input
                    className="border border-[#B8B8B8] rounded-lg p-2"
                    placeholder="City or Zip Code"
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <button className="bg-red border border-red text-white py-2 px-8 rounded-lg flex flex-row items-center justify-center gap-2">
                  <Image
                    src="/assets/icons/search.svg"
                    height={24}
                    width={24}
                    alt="search"
                    className="h-4 w-4"
                  />{" "}
                  5.221.456 results
                </button>
                <button className="border border-blue text-blue rounded-lg py-2 px-8">
                  Save Search
                </button>
                <button className="border border-blue text-blue rounded-lg py-2 px-8 flex flex-row items-center justify-center gap-2">
                  More filters{" "}
                  <Image
                    src="/assets/icons/arrow_down.svg"
                    height={24}
                    width={24}
                    alt="search"
                    className="h-4 w-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
