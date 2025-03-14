import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0f222c] text-white min-h-screen">
      <h1 className="text-[150px] font-bold flex items-center justify-center px-0 capitalize">
        Your app is about <br className="flex items-center justify-center " />
        to get faster
      </h1>
      <p className="text-xl mt-4 font-bold ">
        Deliver faster experiences with the fastest cache.
      </p>
    </div>
  );
}
