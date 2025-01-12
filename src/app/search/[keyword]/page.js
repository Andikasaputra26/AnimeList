import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  if (!response) {
    console.error(
      "Failed to fetch data:",
      response.status,
      response.statusText
    );
    return (
      <div>
        <p>Error fetching data. Please try again later.</p>
      </div>
    );
  }
  const SearchAnime = await response.json();
  const data = SearchAnime.data;
  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${keyword}`} />
        <AnimeList api={data} />
      </section>
    </>
  );
};

export default Page;
