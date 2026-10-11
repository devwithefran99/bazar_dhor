"use client"
import { redirect } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpPage = () => {
  
  const onSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries())
    
  const {data , error} =  await authClient.signUp.email({
      ...user,
      callbackURL:"/"
    })
    if(data){
      toast.success('SignUp successfully')
      redirect ("/");
    }
    if(error){
        toast.error("Something went Wrong!")
    }
    
  }
  const handleGoogleSignUp = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};
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
            নতুন অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            বাজার দর-এর সঙ্গে যুক্ত হোন
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              আপনার নাম
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="আপনার নাম লিখুন"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              ইমেইল
            </label>

            <input
              id="email"
              name="email"
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
              name="password"
              minLength={8}
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="font-semibold text-green-700 hover:underline">
            Sign In করুন
          </Link>
        </p>

        <Link
          href="/"
          className="mt-4 block text-center text-sm text-gray-500 hover:text-green-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>
        <button
  type="button"
  onClick={handleGoogleSignUp}
  className="mt-4 w-full rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
>
  Sign Up with Google
</button>
 <button
  type="button"
  onClick={handleGithubSignIn}
  className="mt-4 w-full rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
>
  Sign Up with Github
</button>
      </div>
    </main>
  );
};

export default SignUpPage;
