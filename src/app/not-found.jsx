
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f0f5f1] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-[#e1e9e2] bg-[#fbfdfb] p-8 text-center">
        <div className="mb-4 text-6xl">🔎</div>

        <h1 className="text-6xl font-bold text-green-700">
          404
        </h1>

        <h2 className="mt-4 text-xl font-bold text-gray-800">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          পেজটি মুছে ফেলা হয়েছে অথবা লিংকটি ভুল হতে পারে।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

