"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from './../../lib/auth-client';

const Profile = () => {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await authClient.updateUser({
      name: name,});

    if (error) {
      toast.error("নাম পরিবর্তন করা যায়নি!");
    } else {
      toast.success("নাম পরিবর্তন হয়েছে!");
      setName("");
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f0f5f1] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-[#e1e9e2] bg-[#fbfdfb] p-6 sm:p-8">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
          প্রোফাইল এডিট
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          আপনার নাম পরিবর্তন করুন </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            আপনার নাম </label>

          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={"enter your name here"}
            required className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"/>

          <button type="submit" className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white hover:bg-green-800" >
            নাম পরিবর্তন করুন
          </button>
        </form>
      </div>
    </main>
  );
};

export default Profile;