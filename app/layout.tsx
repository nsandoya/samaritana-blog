import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/shared/Navbar";




const rubik = Rubik({subsets: ['latin']})


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className={`${rubik}`}
      >
        <Navbar />
        {children}
        <div className="flex">
        </div>
      </body>
    </html>
  );
}
