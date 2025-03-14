import React from "react";

export default function page() {
  return (
    <div className="items-center justify-center px-5 py-15 bg-[#132e3b] text-gray-300">
      <div className="flex items-center justify-center">PRICING</div>
      <div className="flex items-center justify-center px-5 py-2 text-[70px] font-bold text-white">
        Let’s talk numbers
      </div>
      <div className="flex items-center justify-center px-5 py-2 text-white">
        Find the right fit for your business and start building fast apps fast.
      </div>
      <div className="flex justify-between gap-10 py-15">
        <div className="flex border-2 border-solid border-black px-50 py-60 bg-white text-black rounded-2xl">
          <h2 className="font-black">Redis Flex</h2>
        </div>
        <div className="flex border-2 border-solid border-black px-50 py-60 bg-white text-black rounded-2xl">
          <h2 className="font-black">Redis Flex</h2>
        </div>
        <div className="flex border-2 border-solid border-black px-50 py-60 bg-white text-black rounded-2xl">
          <h2 className="font-black">Redis Flex</h2>
        </div>
      </div>
    </div>
  );
}
