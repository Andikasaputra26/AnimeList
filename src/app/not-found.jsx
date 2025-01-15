"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen max-w-xl mx-auto">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="bg-accent" />
        <h3 className="text-accent text-2xl font-bold">NOT FOUND</h3>
        <button
          onClick={() => router.back()}
          className="md:text-xl text-md underline text-primary hover:text-accent transition-all"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
