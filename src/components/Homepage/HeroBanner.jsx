
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
       const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle : "full"
    })
  return (
    <section className="container mx-auto w-full  px-4 py-4">
      <div className="flex flex-col-reverse items-center justify-between gap-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fbf8] px-5 py-6 sm:px-8 md:flex-row md:py-8">

        {/* Left Content */}
        <div className="w-full md:w-3/5">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
           {date}
          </span>

          <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, দ্রুত, সর্বনিম্ন-সর্বোচ্চ এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

         <Link  href="#all-products">
          <button className="mt-5 rounded-md bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800">
            সব দর দেখুন
          </button>
         </Link>
        </div>

        {/* Right Image */}
        <div className="relative flex w-full items-center justify-center md:w-2/5">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের তাজা শাকসবজি ও পণ্য"
            width={300}
            height={180}
            priority
            className="h-auto w-48 object-contain sm:w-56 md:w-full md:max-w-[300px]"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;

