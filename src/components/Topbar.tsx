import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function Topbar() {
  return (
    <div className="flex items-center justify-center px-4 md:px-6 py-3 bg-[#143444] text-white gap-2  text-sm md:text-base font-normal cursor-pointer">
      <GoDotFill className="text-[#caf910]" />
      Stop testing, start deploying your AI apps. See how with MIT Technology
      Reviews latest research.
      <div className="text-[#caf910]">Download now</div>
      <div>
        <IoIosArrowRoundForward className={"100"} />
      </div>
    </div>
  );
}
