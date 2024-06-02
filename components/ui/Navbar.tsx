import { navItems } from "@/data";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="bg-white/80 mt-4 h-[50px] flex items-center justify-center gap-24 sticky z-50 top-4 py-2 max-w-[80%] mx-auto px-4 rounded-full shadow">
      <div className="w-[100px] h-full">
        <Image
          src="/somdelie-dev.png"
          alt="Somdelie"
          width={100}
          height={100}
          className="object-cover object-center "
        />
      </div>
      <MobileNav />
      <div className=" hidden md:flex items-center gap-2">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
