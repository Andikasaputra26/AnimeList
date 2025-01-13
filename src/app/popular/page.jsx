"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [lastPage, setLastPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      );

      if (!response.ok) {
        console.error("Failed to fetch data");
        return;
      }

      const data = await response.json();
      setTopAnime(data.data || []);
      setLastPage(data.pagination?.last_visible_page || 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler - Halaman ${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={lastPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Page;
