"use client";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      <header className="border-b md:w-full h-20 flex items-center justify-between md:flex px-[20px]">
        <h2>Poke App - Luthfi Anugerah Mirda</h2>
      </header>
      <div className="flex-1 flex flex-col md:flex-row  h-screen">
        <div className="container">
          <div className="flex-1 py-8 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
