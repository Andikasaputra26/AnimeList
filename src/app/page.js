import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  const data = anime.data;
  return (
    <>
      {/* Anime popular */}
      <section>
        <Header
          title="Top Popular"
          linkHref="/popular"
          linkText="Lihat Semua"
        />
        <AnimeList api={data} />
      </section>

      {/* Anime terbaru */}
      <section>
        <Header title="Paling Baru" linkHref="/new" linkText="Ikuti Sekarang" />
        <AnimeList api={data} />
      </section>
    </>
  );
};

export default Home;
