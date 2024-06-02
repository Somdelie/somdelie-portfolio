"use client";
import { navItems } from "@/data";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:hidden flex items-center text-black">
      <button className="font-semibold" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CgClose size={24} /> : <IoMdMenu size={24} />}
      </button>

      <div
        className={`${
          isOpen
            ? "md:hidden transition-[3.5s] p-4 rounded absolute top-8 shadow right-0 grid bg-white  gap-2"
            : " transition-[2.5s] absolute top-0 right-0 grid gap-2"
        }`}
      >
        {isOpen ? (
          <>
            {" "}
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "relative dark:text-neutral-50 items-center px-2 py-1 rounded transition hover:text-white hover:bg-black flex space-x-1 text-neutral-600 dark:hover:text-neutral-300"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                {/* add !cursor-pointer */}
                {/* remove hidden sm:block for the mobile responsive */}
                <span className=" text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MobileNav;
