"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | "">("");
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <Image src="/redis.svg" width={80} height={80} alt="logo" />
        </Link>

        <div className="flex gap-8 relative">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <Link
              className="hover:font-bold flex items-center gap-1 cursor-pointer"
              href="#"
            >
              Products
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  openDropdown === "products" ? "rotate-180" : "rotate-0"
                }`}
              />
            </Link>
            {openDropdown === "products" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg p-4 rounded-lg">
                <Link href="#" className="block text-gray-700 hover:font-bold">
                  Product 1
                </Link>
                <Link href="#" className="block text-gray-700 hover:font-bold">
                  Product 2
                </Link>
                <Link href="#" className="block text-gray-700 hover:font-bold">
                  Product 3
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown("")}
          >
            <Link
              className="hover:font-extrabold flex items-center gap-1 cursor-pointer"
              href="#"
            >
              Resources
              <IoIosArrowDown
                className={`transition-transform duration-300  ${
                  openDropdown === "resources" ? "rotate-180" : "rotate-0"
                }`}
              />
            </Link>
            {openDropdown === "resources" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg p-4 rounded-lg">
                <Link href="#" className="block text-gray-700 hover:font-bold">
                  Resource 1
                </Link>
                <Link href="#" className="block text-gray-700 hover:font-bold">
                  Resource 2
                </Link>
                <Link href="#" className="block text-gray-700 hover:font-bold">
                  Resource 3
                </Link>
              </div>
            )}
          </div>

          <Link
            className={`hover:font-extrabold ${
              pathname === "/docs" ? "font-extrabold" : ""
            }`}
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className={`hover:font-extrabold ${
              pathname === "/pricing" ? "font-extrabold" : ""
            }`}
            href="/pricing"
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <CgSearch />
        <Link href="/">Login</Link>
        <Link href="/">Book a Meeting</Link>

        <Link className="hover:bg-red-600" href="/">
          Try Redis
        </Link>
      </div>
    </div>
  );
}
