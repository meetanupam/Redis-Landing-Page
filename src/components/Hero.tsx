import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0f222c] text-white min-h-screen">
      <h1 className="text-[100px] flex items-center justify-center px-0">
        Your app is about <br className="flex items-center justify-center " />
        to get faster
      </h1>
      <p className="text-lg mt-4">
        Deliver faster experiences with the fastest cache.
      </p>
    </div>
  );
}
