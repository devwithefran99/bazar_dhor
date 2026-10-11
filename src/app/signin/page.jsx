"use client";

import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";

const SignInPage = () => {
  const handleSignIn = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { error } = await authClient.signIn.email({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (error) {
      toast.error(error.message || "ইমেইল অথবা পাসওয়ার্ড ভুল!");
    } else {
      toast.success("সফলভাবে Sign In হয়েছে!");
      window.location.href = "/";
    }
  };
  const handleGoogleSignIn = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });

  }
  const handleGithubSignIn = async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
  }

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

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              ইমেইল
            </label>

            <input id="email" name="email" type="email" placeholder="আপনার ইমেইল লিখুন"
              required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600" />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              পাসওয়ার্ড
            </label>

            <input id="password" name="password"  type="password" placeholder="আপনার পাসওয়ার্ড লিখুন"
 required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600" />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"  >
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
          className="mt-4 block text-center text-sm text-gray-500 hover:text-green-700" >
          ← হোম পেজে ফিরে যান
        </Link>

        <div className="flex justify-center item-center gap-1 mt-2" >
          <button onClick={handleGoogleSignIn} className="btn mx-auto">Sign-In with Goggle</button>
        <button onClick={handleGithubSignIn} className="btn mx-auto">Sign-In with Github</button>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;