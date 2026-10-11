
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import UserInfo from "./UserInfo";

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
       <UserInfo />

      </div>

      <Navbar/>
    </header>
  );
};

export default TopHeader;

