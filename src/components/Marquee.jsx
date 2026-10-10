 
import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const PriceMarquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  const products = data.slice(0, 10);

  return (
    <div className=" py-3 container mx-auto ">
      <MarqueeText duration={20} direction="right" >
        {products.map((p) => (
         <Link href={`/product/${p.id} `}  key={p.id}>
          <div
          
            className="flex items-center gap-2 border-r border-gray-600 px-6"
          >
            <span>{p.categoryIcon}</span>

            <span className="whitespace-nowrap">
              {p.nameBn}
            </span>

            <span className="whitespace-nowrap font-semibold">
              ৳{p.today} / {p.unit}
            </span>

            <span
              className={`whitespace-nowrap text-sm font-semibold ${
                p.change.dir === "up"
                  ? "text-red-400"
                  : p.change.dir === "down"
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >
              {p.change.dir === "up"
                ? "▲"
                : p.change.dir === "down"
                ? "▼"
                : "—"}{" "}
              {p.change.pct}%
            </span>
          </div>
         </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default PriceMarquee;

