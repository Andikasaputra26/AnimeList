import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import prisma from "@/libs/prisma";
import CommentBox from "@/components/AnimeList/CommentBox";
import { authUserSession } from "@/libs/auth-libs";
import CollectionButton from "@/components/AnimeList/CollectionButton";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-primary">{anime.data.title}</h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
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

      <div className="p-4">
        <h3 className="text-primary text-2xl mb-2">Komentar</h3>
        <CommentBox anime_mal_id={id} />

        {user && (
          <CommentBox
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
        <div>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
};
export default page;
