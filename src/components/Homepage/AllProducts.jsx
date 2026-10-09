
import Link from "next/link";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  const data = await res.json();

  const products = Array.isArray(data) ? data : data.data || [];

  return (
    <section id="all-products" className="mx-auto container  px-4 py-5">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        🛒 আজকের সকল পণ্যের দাম
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
         <Link href={`/product/${product.id} `}   key={product.id}>
          <div
            
            className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                {product.categoryIcon}
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

              {product.change?.dir === "up" ? (
                <span className="rounded-full bg-red-50 px-2 py-1 text-xs text-red-600">
                  ▲ {product.change.pct}%
                </span>
              ) : product.change?.dir === "down" ? (
                <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                  ▼ {product.change.pct}%
                </span>
              ) : (
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                 ➖0.0%
                </span>
              )}
            </div>
          </div>
         </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;

