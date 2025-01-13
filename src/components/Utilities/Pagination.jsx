import React from "react";

export default function Pagination({ page, lastPage = 1, onPageChange }) {
  // Fungsi untuk menggulir ke atas halaman
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fungsi untuk menangani tombol "Prev"
  const handlePrev = () => {
    if (page > 1) {
      onPageChange(page - 1);
      scrollTop();
    }
  };

  // Fungsi untuk menangani tombol "Next"
  const handleNext = () => {
    if (page < lastPage) {
      onPageChange(page + 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-primary text-xl">
      {/* Tombol "Prev" */}
      <button
        className={`transition-all hover:text-accent ${
          page === 1 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={page === 1}
      >
        Prev
      </button>

      {/* Informasi Halaman */}
      <p>
        {page} of {lastPage}
      </p>

      {/* Tombol "Next" */}
      <button
        className={`transition-all hover:text-accent ${
          page === lastPage ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
        disabled={page === lastPage}
      >
        Next
      </button>
    </div>
  );
}
