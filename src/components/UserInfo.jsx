
"use client";

import Link from "next/link";
import { authClient } from './../lib/auth-client';
import { IoIosLogOut } from "react-icons/io";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-3">
        <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          {/* User Profile */}
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 sm:px-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div className="hidden sm:block">
              <p className="max-w-28 truncate text-sm font-semibold text-gray-800">
                {user.name}
              </p>
              
            </div>
          </div>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            title="সাইন আউট"
            aria-label="সাইন আউট"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 transition hover:bg-red-100"
          >
            <IoIosLogOut size={22} />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/signin"
            className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-800 transition hover:border-green-700 hover:text-green-700 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-700 px-3 py-2 text-xs font-medium text-white transition hover:bg-green-800 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
