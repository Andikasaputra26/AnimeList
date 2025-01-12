import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  const data = anime.data;
  return (
    <>
      <section>
        <Header
          title="Top Popular"
          linkHref="/popular"
          linkText="Lihat Semua"
        />
        <AnimeList api={data} />
      </section>
    </>
  );
};

export default Page;
