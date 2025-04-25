"use client";

import React, { useState } from "react";

const HNSubmitForm = () => {
  const [form, setForm] = useState({
    title: "",
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="bg-white min-h-screen p-1 font-sans text-sm">
      <div className="mx-30 border rounded bg-[#f6f6ef]">
        <div className="bg-orange-500 text-white px-2 py-1 font-bold text-sm">
          <span className="inline-block w-5 h-5 bg-orange-700 text-center mr-1">Y</span> Submit
        </div>
        <div className="max-w-2xl mx-3 border rounded">
          <form onSubmit={handleSubmit} className="px-4 py-4 text-sm">
            <div className="flex items-center mb-2">
              <label htmlFor="title" className="w-10 capitalize">
                title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                className="border border-gray-400 w-full px-1 py-0.5 text-sm"
              />
            </div>
            <div className="flex items-start mb-2">
              <label htmlFor="text" className="w-10 pt-1">
                text
              </label>
              <textarea
                id="text"
                name="text"
                rows={4}
                value={form.text}
                onChange={handleChange}
                className="border border-gray-400 w-full px-1 py-0.5 text-sm"
              />
            </div>
            <div className="pl-10">
              <button
                type="submit"
                className="border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
              >
                submit
              </button>
              <p className="text-xs text-gray-700 mt-3">
                Submit a question or discussion topic. The text will appear at the top of the thread.
                <br />
                You can also submit via{" "}
                <a href="#" className="text-blue-600 underline">
                  bookmarklet
                </a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HNSubmitForm;
