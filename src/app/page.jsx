import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Navbar from "@/components/Navbar";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendAnime = reproduce(recomendAnime, 6);
  // console.log(recomendAnime);

  return (
    <>
      <Navbar />
      <section>
        <Header
          title="Top Popular"
          linkHref="/popular"
          linkText="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header
          title="Rekomendasi"
          // linkHref="/rekomendasi"
          linkText="Lihat Semua"
        />
        <AnimeList api={recomendAnime} />
      </section>
    </>
  );
};

export default Page;
