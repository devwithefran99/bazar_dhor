"use client"
import Link from "next/link";
import { useState } from "react";

const CategoryProducts = ({ products }) => {
  const [sort, setSort] = useState("default");

  let sortedProducts = [...products];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sort === "high") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  const category = products[0];

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto container">

        {/* Category Header */}
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-4">
          <span className="flex h-12 w-12 items-center justify-center text-3xl">
            {category?.categoryIcon}
          </span>

          <div>
            <h1 className="text-lg font-bold text-gray-800">
              {category?.categoryNameBn }
            </h1>

            <p className="text-xs text-gray-500">
              {category?.categoryNameBn } এর আজকের দর ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Sorting */}
        <div className="mb-3 flex justify-end rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-3">
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs text-gray-500">
              সাজান
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-xs outline-none"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low">কম দাম</option>
              <option value="high">বেশি দাম</option>
            </select>
          </div>
        </div>

        {/* Product Count */}
        <p className="mb-3 text-xs text-gray-500">
          Total {sortedProducts.length} product available
        </p>

        {/* Product Cards */}
        {sortedProducts.length === 0 ? (
          <div className="rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-6 text-center text-sm text-gray-500">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((n) => (
              <Link
                href={`/product/${n.slug}`}
                key={n.id}
                className="rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-3 transition hover:border-gray-300"
              >
                {/* Product Name */}
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f4f0] text-xl">
                    { n.categoryIcon}
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">
                      {n.nameBn}
                    </h2>

                    <p className="text-[11px] text-gray-500">
                      প্রতি {n.unit === "kg" ? "কেজি" : n.unit}
                    </p>
                  </div>
                </div>

                {/* Price and Change */}
                <div className="mt-3 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[10px] text-gray-500">
                      আজকের দাম
                    </p>

                    <p className="text-sm font-bold text-gray-800">
                      {n.today} টাকা
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                      n.change.dir === "up"
                        ? "bg-red-50 text-red-600"
                        : n.change.dir === "down"
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {n.change.dir === "up"
                      ? "▲"
                      : n.change.dir === "down"
                      ? "▼"
                      : "—"}{" "}
                    {Math.abs(n.change.pct)}%
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryProducts;
