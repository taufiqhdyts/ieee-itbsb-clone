"use client";

import "./globals.css";
import { Poppins, Montserrat_Alternates, Work_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Bold: 700, SemiBold: 600, Regular: 400

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "600", "400"],
  variable: "--font-poppins",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-montserrat-alternates",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State for navbar expand or not
  const [expandNavBar, setExpandNavBar] = useState(false);
  const pathname = usePathname();

  // Reset navbar expand state when change path
  useEffect(() => {
    setExpandNavBar(false);
  }, [pathname]);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserratAlternates.variable} ${workSans.variable}`}
    >
      <body
        className={`flex min-h-screen flex-col bg-gradient-to-b from-primary-2-very-dark-purple via-[#3C1859] via-30% to-[#652D92]  ${
          expandNavBar && "overflow-hidden"
        }`}
      >
        <NavBar expandNavBar={expandNavBar} setExpandNavBar={setExpandNavBar} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
