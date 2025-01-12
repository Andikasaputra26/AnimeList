"use client";
import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchRef.current.value;
    searchRef.current.value = "";

    if (!query) return;

    router.push(`/search/${query}`);
  };
  return (
    <form className="flex items-center gap-2 w-full md:w-auto">
      <input
        type="text"
        placeholder="Search anime"
        aria-label="Search anime"
        ref={searchRef}
        className="flex-grow p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        onClick={handleSearch}
        className="p-2 bg-indigo-500 rounded-md text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      >
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default InputSearch;
