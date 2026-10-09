
const SingleProduct = ({ product }) => {
  const minPrice = Math.min(
    ...product.markets.map((market) => market.min)
  );

  const maxPrice = Math.max(
    ...product.markets.map((market) => market.max)
  );

  const avgPrice = Math.round(
    product.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0
    ) / product.markets.length
  );

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-3 py-5 sm:px-6">
      <div className="mx-auto container">

        {/* Product Information */}
        <div className="mb-4 flex flex-col justify-between gap-4 rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f4f0] text-3xl">
              {product.image}
            </span>

            <div>
              <h1 className="text-xl font-bold">
                {product.nameBn}
              </h1>

              <p className="text-xs text-gray-500">
                {product.categoryNameBn} · প্রতি কেজি
              </p>

              <p className="mt-1 text-xs text-gray-600">
                গতকালের তুলনায় আজকের দাম{" "}
                {product.change.dir === "up"
                  ? "বেড়েছে"
                  : product.change.dir === "down"
                  ? "কমেছে"
                  : "অপরিবর্তিত"}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#f0f5f1] px-5 py-3 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-2xl font-bold">
              {product.today}
            </p>
            <p className="text-xs text-gray-500">টাকা / কেজি</p>

            <p
              className={`mt-1 text-xs font-semibold ${
                product.change.dir === "up"
                  ? "text-red-600"
                  : product.change.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {product.change.dir === "up"
                ? "▲"
                : product.change.dir === "down"
                ? "▼"
                : "—"}{" "}
              {Math.abs(product.change.pct)}%
            </p>
          </div>
        </div>

        {/* Price Summary */}
        <div className="mb-4 rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-4">
          <h2 className="mb-3 font-bold">দামের সারসংক্ষেপ</h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e1e9e2] p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-lg font-bold text-green-600">
                {minPrice} টাকা
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e2] p-4">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-lg font-bold text-red-600">
                {maxPrice} টাকা
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e2] p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-1 text-lg font-bold text-green-600">
                {avgPrice} টাকা
              </p>
            </div>
          </div>
        </div>

        {/* Market Prices */}
        <div className="rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-4">
          <h2 className="mb-3 font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-y border-gray-200 text-gray-500">
                  <th className="px-3 py-3">বাজার</th>
                  <th className="px-3 py-3">বিভাগ</th>
                  <th className="px-3 py-3 text-right">সর্বনিম্ন</th>
                  <th className="px-3 py-3 text-right">সর্বোচ্চ</th>
                  <th className="px-3 py-3 text-right">গড়</th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-b border-gray-200"
                  >
                    <td className="px-3 py-3">{market.market}</td>
                    <td className="px-3 py-3">{market.division}</td>
                    <td className="px-3 py-3 text-right">
                      {market.min} টাকা
                    </td>
                    <td className="px-3 py-3 text-right">
                      {market.max} টাকা
                    </td>
                    <td className="px-3 py-3 text-right font-semibold">
                      {Math.round(
                        (market.min + market.max) / 2
                      )} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default SingleProduct;

