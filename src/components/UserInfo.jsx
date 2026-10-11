"use client"

import Link from 'next/link';
import React from 'react';
import { authClient } from './../lib/auth-client';


const UserInfo = () => {
        const {data : session} = authClient.useSession()
    const user = session?.user
    return (
        <div>
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
    );
};

export default UserInfo;