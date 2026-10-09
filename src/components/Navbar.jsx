import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto flex items-center gap-4 sm:gap-6 lg:gap-8 px-3 py-3 sm:p-4 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {data.map((n) => (
          <Link
            key={n.id}
            href={`/category/${n.slug}`}
            className="flex shrink-0 items-center gap-1 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-700 transition"
          >
            <span>{n.icon}</span>
            <span>{n.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
