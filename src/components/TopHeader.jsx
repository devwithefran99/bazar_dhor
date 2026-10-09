
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const TopHeader = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle : "full"
    })
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo  */}
        <Link href={"/"}>
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 bg-green-700 rounded item-center justify-center flex">
            <Image height={40} width={40} src="/bazar-hero.png"  alt="Bazar Dor Logo"
          />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">
              বাজার দর
            </h1>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>
        </Link>
        {/* Buttons */}
       <div className="flex items-center gap-2 sm:gap-6">
 <Link href={"/signin"}>
  <button className="text-xs sm:text-sm font-medium text-gray-800 hover:text-green-700 border-gray-300 border-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded">
    সাইন ইন
  </button> </Link>

  <Link href={"/signup"}>
  <button className="bg-green-700 hover:bg-green-800 text-white text-xs sm:text-sm font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-sm transition">
    সাইন আপ
  </button>
  </Link>
</div>

      </div>

      <Navbar/>
    </header>
  );
};

export default TopHeader;

