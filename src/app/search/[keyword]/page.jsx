import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = await params;

  // Decode parameter keyword
  const decodedKeyword = decodeURI(keyword);

  try {
    // Panggil API dengan keyword
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

    // Validasi data API
    if (!searchAnime || !searchAnime.data || searchAnime.data.length === 0) {
      throw new Error("Anime tidak ditemukan.");
    }

    return (
      <section>
        <Header title={`Pencarian Untuk "${decodedKeyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching anime:", error.message);

    // Tampilkan fallback UI jika terjadi error
    return (
      <section>
        <Header title="Hasil Pencarian" />
        <p className="text-center text-red-500">
          Tidak dapat memuat data anime. Silakan coba lagi nanti.
        </p>
      </section>
    );
  }
};

export default Page;
