
import Link from "next/link";

const SignInPage = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f0f5f1] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-[#e1e9e2] bg-[#fbfdfb] p-6 sm:p-8">
        <div className="mb-6 text-center">
          <div className="mb-3 text-4xl">🛒</div>

          <h1 className="text-2xl font-bold text-gray-800">
             স্বাগতম!
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            আপনার বাজার দর অ্যাকাউন্টে Sign In করুন
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              ইমেইল
            </label>

            <input
              id="email"
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="font-semibold text-green-700 hover:underline">
            Sign Up করুন
          </Link>
        </p>

        <Link
          href="/"
          className="mt-4 block text-center text-sm text-gray-500 hover:text-green-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default SignInPage;
