"use client";

import LogNavBar from "@/app/components/log-nav-bar/LogNavBar";
import React, { useState } from "react";

const UserProfileForm = () => {
  const [form, setForm] = useState({
    about: "",
    email: "",
    showdead: "no",
    noprocrast: "no",
    maxvisit: "20",
    minaway: "180",
    delay: "0",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", form);
  };

  return (
    <div className="bg-white min-h-screen p-4 font-sans text-sm  ">
      <div className="  border-gray-300 bg-[#f6f6ef] mx-30">
        {/* Header */}
        <LogNavBar/>

        {/* Notification */}
        <div className="bg-yellow-200 text-gray-800 px-4 py-2 text-xs">
          Please put a valid address in the email field, or we won't be able to send you a new
          password if you forget yours. Your address is only visible to you and us. Crawlers and
          other users can't see it.
        </div>

        {/* Profile form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="flex">
            <label className="w-24 font-medium">user:</label>
            <span>yoganandam</span>
          </div>
          <div className="flex">
            <label className="w-24 font-medium">created:</label>
            <span>8 minutes ago</span>
          </div>
          <div className="flex">
            <label className="w-24 font-medium">karma:</label>
            <span>1</span>
          </div>

          <div className="flex items-start">
            <label htmlFor="about" className="w-24 pt-1 font-medium">
              about:
            </label>
            <textarea
              id="about"
              name="about"
              rows={3}
              value={form.about}
              onChange={handleChange}
              className="border border-gray-400 w-full px-1 py-0.5"
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="email" className="w-24 font-medium">
              email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-400 px-1 py-0.5 flex-grow"
            />
          </div>

          {[
            ["showdead", form.showdead],
            ["noprocrast", form.noprocrast],
          ].map(([name, value]) => (
            <div className="flex items-center" key={name}>
              <label htmlFor={name} className="w-24 font-medium">
                {name}:
              </label>
              <select
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className="border border-gray-400 px-1 py-0.5"
              >
                <option value="no">no</option>
                <option value="yes">yes</option>
              </select>
            </div>
          ))}

          {[
            ["maxvisit", form.maxvisit],
            ["minaway", form.minaway],
            ["delay", form.delay],
          ].map(([name, value]) => (
            <div className="flex items-center" key={name}>
              <label htmlFor={name} className="w-24 font-medium">
                {name}:
              </label>
              <input
                id={name}
                name={name}
                type="number"
                value={value}
                onChange={handleChange}
                className="border border-gray-400 px-1 py-0.5 w-24"
              />
            </div>
          ))}

          {/* Links */}
          <div className="pl-24 space-y-1 text-sm">
            <a href="#" className="text-blue-700 underline block">
              change password
            </a>
            <a href="#" className="text-blue-700 underline block">
              submissions
            </a>
            <a href="#" className="text-blue-700 underline block">
              comments
            </a>
            <div>
              <a href="#" className="text-blue-700 underline">
                favorite submissions
              </a>{" "}
              /{" "}
              <a href="#" className="text-blue-700 underline">
                comments
              </a>{" "}
              <span className="text-gray-600">(publicly visible)</span>
            </div>
          </div>

          <div className="pl-24 pt-2">
            <button
              type="submit"
              className="border px-2 py-1 bg-gray-100 hover:bg-gray-200 text-sm"
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
