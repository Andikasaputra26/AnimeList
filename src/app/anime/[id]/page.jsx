import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  // console.log(anime);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-primary">{anime.data.title}</h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3 className="">PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>

        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3 className="">SKOR</h3>
          <p>{anime.data.score}</p>
        </div>

        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3 className="">ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>

        <div className="w-36 flex flex-col justify-center items-center rounded border border-primary p-2">
          <h3 className="">EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>

      <div className="">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default page;
