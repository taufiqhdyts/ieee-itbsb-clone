"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon";

export default function NavBar({
  expandNavBar,
  setExpandNavBar,
}: {
  expandNavBar: boolean;
  setExpandNavBar: Dispatch<SetStateAction<boolean>>;
}) {
  const blackBgRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  // NavBar list
  const NavBarItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Event",
      href: "/event",
    },
    {
      title: "Newsletter",
      href: "/newsletter",
    },
    {
      title: "Scoreboard",
      href: "/scoreboard",
    },
  ];

  // Close Navbar when user clicks except Navbar content
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        blackBgRef.current &&
        blackBgRef.current.contains(event.target as Node)
      ) {
        setExpandNavBar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [blackBgRef, setExpandNavBar]);

  
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-20 w-full flex-none items-center justify-between bg-transparent px-8 sm:px-16 xl:h-[110px] xl:px-20">
      {/* Home Logo Button */}
      <Link href="/">
        <Image
          src="/logo-white.png"
          width="628"
          height="1899"
          alt="Logo IEEE ITB"
          className="h-[30px] w-[90px] bg-transparent drop-shadow-[0px_2px_6px_rgba(255,255,255,0.65)] xl:h-[40px] xl:w-[120px]"
        />
      </Link>

      {/* Hamburger Button */}
      <button
        aria-label="Menu Button"
        className="h-fit xl:hidden"
        onClick={() => setExpandNavBar(!expandNavBar)}
      >
        <HamburgerIcon style="fill-white w-7 h-7 drop-shadow-[0px_2px_6px_rgba(255,255,255,0.85)]" />
      </button>

      {/* Navbar container content */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-fit w-full flex-col items-center gap-6 bg-gradient-to-bl from-[#A164A9] via-[#4F0069] via-45% to-[#260D3A] p-6 font-poppins text-base font-bold text-white max-xl:transition max-xl:duration-300 xl:static xl:h-auto xl:w-auto xl:bg-none xl:p-0 ${expandNavBar
          ? "max-xl:translate-y-0 max-xl:ease-in-out"
          : "max-xl:-translate-y-full max-xl:ease-out"
          }`}
      >
        <div className="flex justify-center w-full items-center xl:hidden">
          <Link href="/">
            <Image
              src="/logo-white.png"
              width="628"
              height="1899"
              alt="Logo IEEE ITB"
              className="h-[30px] mx-auto w-[90px] bg-transparent drop-shadow-[0px 2px 6px rgba(255,255,255,0.65)] xl:h-[40px] xl:w-[120px]"
            />
          </Link>
          {/* LClose button navbar */}
          <button
            className="flex "
            aria-label="Close Button"
            onClick={() => setExpandNavBar(!expandNavBar)}
          >
            <CloseIcon className="aspect-square w-5 fill-white" />
          </button>
        </div>


        <ul className="flex flex-col items-center gap-4 xl:flex-row xl:gap-9">
          {/* NavBar Items */}
          {NavBarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={`rounded-full px-5 py-1 drop-shadow-[0px_2px_6px_rgba(255,255,255,0.5)] xl:px-6 xl:py-2 xl:tracking-wider xl:duration-500 xl:ease-in-out xl:hover:bg-secondary-2-pink ${pathName === item.href && "bg-secondary-2-pink"
                    }`}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Dark Stuff Covers Backround Page */}
      {expandNavBar && (
        <div
          ref={blackBgRef}
          className="fixed inset-0 z-40 h-screen w-full bg-black opacity-50 transition duration-300 xl:hidden"
        />
      )}
    </nav>
  );
}
