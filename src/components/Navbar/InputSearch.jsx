"use client";

import { useState, useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { getAnimeResponse } from "@/libs/api-libs";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fungsi untuk memanggil API dengan debouncing
  const handleInputChange = () => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword === "") {
      setResults([]); // Hapus hasil jika input kosong
      return;
    }

    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await getAnimeResponse(
          "anime",
          `q=${keyword}&limit=5`
        );
        setResults(response?.data || []); // Simpan hasil pencarian
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    }, 300); // Debounce selama 300ms
  };

  // Fungsi untuk menangani klik pada hasil pencarian
  const handleResultClick = (id) => {
    router.push(`/anime/${id}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Cari Anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onChange={handleInputChange}
      />
      <button className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>

      {/* Dropdown untuk menampilkan hasil pencarian */}
      {results.length > 0 && (
        <ul className="absolute w-full bg-white border rounded shadow-md mt-2 z-10">
          {loading ? (
            <li className="p-2 text-center text-gray-500">Loading...</li>
          ) : (
            results.map((anime) => (
              <li
                key={anime.mal_id}
                onClick={() => handleResultClick(anime.mal_id)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {anime.title}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;
