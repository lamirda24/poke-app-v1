"use client";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      <header className="border-b md:w-full h-20 flex items-center justify-between md:flex px-[20px]">
        <h2>Poke App - Luthfi Anugerah Mirda</h2>
        <div className="flex flex-row">
          <Link
            href="/compare-pokemon"
            className="hover:bg-gray-800 rounded-md hover:text-[#eee] transition-all duration-300 h-[40px] flex items-center justify-start px-4"
          >
            Compare Pokemon
          </Link>
        </div>
      </header>
      <div className="flex-1 flex flex-col md:flex-row  h-screen">
        <div className="container">
          <div className="flex-1 py-8 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
