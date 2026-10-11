
import Link from "next/link";
import React from "react";

const PriceDown = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  const data = await res.json();

  // যেসব পণ্যের দাম কমেছে
  const priceDown = (Array.isArray(data) ? data : data.data || [])
    .filter((product) => product.change?.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="mx-auto container px-4 py-5 mt-3">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
      ▼ আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {priceDown.map((product) => (
          <Link href={`/product/${product.id} `} key={product.id} >
          <div
            key={product.id}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                {product.image}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {product.nameBn}
                </h3>

                <p className="text-xs text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-500">আজকের দাম</p>

                <p className="font-bold text-gray-900">
                  {product.today} টাকা
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                ▼ {product.change.pct}%
              </span>
            </div>
          </div></Link>
        ))}
      </div>
    </section>
  );
};

export default PriceDown;

