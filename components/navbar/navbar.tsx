"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import NavbarInput from "./navbarInput";
import { Button } from "../ui/button";
import { AlignJustify, SearchIcon, X } from "lucide-react";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Category" },
    { id: 3, text: "About" },
    { id: 4, text: "Contact" },
  ];

  return (
    <nav
      className={cn(
        offset > 100 || openNavbar === true ? "bg-white" : "bg-transparent",
        "fixed top-0 inset-x-0 z-50 h-[100px] w-full"
      )}
    >
      <div className="hidden md:flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <div className="">
          <Image
            src="/navbar/Logo.svg"
            alt="monito-logo"
            width={115}
            height={40}
          />
        </div>
        {/* Nav Link */}
        <ul className="flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="
              p-4 
              rounded-xl 
              cursor-pointer 
              duration-300 
              hover:text-dark-blue-40
              hover:underline 
              font-bold 
              text-[16px] 
              leading-6 
              
              text-[#003459] tracking-widest"
            >
              {item.text}
            </li>
          ))}
        </ul>
        {/* search & join comunity */}
        <div className="flex justify-between items-center">
          <NavbarInput />
          <Button
            className="
                ml-3 
                rounded-full 
                text-gray-200 
                hover:bg-dark-blue-40
               
               
                sm:text-[1rem]
                text-[12px] 
                bg-dark-blue-80
                lg:py-[10px] 
                lg:px-[28px]
       "
          >
            Join the comunity
          </Button>
        </div>
        {/* VND */}
      </div>

      <div className="md:hidden flex justify-between items-center h-24 max-w-[640px] mx-auto px-4">
        <div>
          <Button size="icon" onClick={() => setOpenNavbar(!openNavbar)}>
            {openNavbar ? (
              <X className="h-8 w-8" />
            ) : (
              <AlignJustify className="h-8 w-8" />
            )}
          </Button>
        </div>
        <div>
          <Image
            src="/navbar/Logo.svg"
            alt="monito-logo"
            width={115}
            height={40}
          />
        </div>
        <div>
          <Button size="icon">
            <SearchIcon className="h-8 w-8" />
          </Button>
        </div>
      </div>
      {openNavbar && (
        <ul className="w-full md:hidden">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="
              p-4 
              text-center
              cursor-pointer 
              duration-300 
              hover:text-dark-blue-40
              hover:underline 
              font-bold 
              text-[16px] 
              leading-6 
              bg-white
              
              text-[#003459] tracking-widest"
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
