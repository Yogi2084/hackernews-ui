// app/page.tsx or your main page
"use client";

import React from "react";
import NavigationBar from "./components/navigation-bar/NavigationBar";



const MainContent = () => {
  return (
    <div className="bg-[#f6f6ef] text-black text-[13px] p-2 space-y-2 ">
      sdkfksfkjb
      
      
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between  bg-white py-2 px-35">
      <NavigationBar />
      <MainContent />
    </div>
  );
}
