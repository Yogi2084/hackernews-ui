"use client";

import { useRouter } from "next/navigation";
import React from "react";

// Example user (you can pull this from context or session)
const user = {
  name: "Alice" // simulate a logged-in user
};

const NavigationBar = () => {
  const router = useRouter();

  return (
    <div className="bg-orange-600 text-black text-sm w-full">
      <div className="max-w-screen-xl mx-auto px-2 py-1 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-1">
          <span className="bg-orange-700 text-white font-bold px-1 hover:cursor-pointer "> 
            {"Y"}
          </span>
          <span
            onClick={() => router.push("/")}
            className="font-bold ml-1 cursor-pointer "
          >
            Hacker News
          </span>
          <span className=" ml-2 "> 
            <button onClick={() => router.push("/new")}className="hover: cursor-pointer">new</button> | {" "}
            <button onClick={() => router.push("/past")}className="hover: cursor-pointer">past</button> |{" "}
            <button onClick={() => router.push("/comments")}className="hover: cursor-pointer">comments</button> |{" "}
            <button onClick={() => router.push("/ask")}className="hover: cursor-pointer">ask</button> |{" "}
            <button onClick={() => router.push("/show")}className="hover: cursor-pointer">show</button> |{" "}
            <button onClick={() => router.push("/jobs")}className="hover: cursor-pointer">jobs</button> |{" "}
            <button onClick={() => router.push("/log")}className="hover: cursor-pointer">submit</button>
          </span>
        </div>

        {/* Right side */}
        <button
          onClick={() => router.push("/log")}
          className="hover:underline cursor-pointer"
        >
          login
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
