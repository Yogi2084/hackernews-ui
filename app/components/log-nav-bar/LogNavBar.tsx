"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { betterAuthClient } from "@/lib/integration/better-auth";


const now = new Date(Date.now()); // create a Date object from timestamp
  const today = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });


const LogNavBar = () => {
  const router = useRouter();
  const { data } = betterAuthClient.useSession();
  const user = data?.user;

  const handleSignOut = async () => {
    await betterAuthClient.signOut();
    router.push("/");
  };

  return (
    <div className="bg-orange-600 text-black text-sm w-full">
      <div className="max-w-screen-xl mx-auto px-2 py-1 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-1">
          <span className="bg-orange-700 text-white font-bold px-1 hover:cursor-pointer">
            {user?.name?.charAt(0).toUpperCase() || "?"}
          </span>
          <span
            onClick={() => router.push("/login")}
            className="font-bold ml-1 cursor-pointer"
          >
            Hacker News
          </span>
          <span className="ml-2">
          <button onClick={() => router.push("/welcome")} className="hover:cursor-pointer">welcome</button> |{" "}
            
            <button onClick={() => router.push("/")} className="hover:cursor-pointer">new</button> |{" "}
            <button onClick={() => router.push("/past")} className="hover:cursor-pointer">past</button> |{" "}
            <button onClick={() => router.push("/comments")} className="hover:cursor-pointer">comments</button> |{" "}
            <button onClick={() => router.push("/ask")} className="hover:cursor-pointer">ask</button> |{" "}
            <button onClick={() => router.push("/show")} className="hover:cursor-pointer">show</button> |{" "}
            <button onClick={() => router.push("/jobs")} className="hover:cursor-pointer">jobs</button> |{" "}
            <button onClick={() => router.push("/submit")} className="hover:cursor-pointer">submit</button> |{" "}
            <span className="mx- text-white mx-5">{today}</span>
          </span>
        </div>

        {/* Right side: user info + logout */}
        <div className="flex items-center text-black text-sm">
          {user?.name && (
            <>
            <button onClick={() => router.push("blocks/user")} className="hover:cursor-pointer">
              <span className="mr-1 hover:cursor-pointer">{user.name} (1)</span>
              <span className="mx-1">|</span>
              </button> 
            </>
          )}
          <button onClick={handleSignOut} className="hover:underline cursor-pointer">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogNavBar;
