"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-xl mx-auto">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="bg-accent" />
        <h3 className="text-accent text-2xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="md:text-xl text-md underline text-primary hover:text-accent transition-all"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
