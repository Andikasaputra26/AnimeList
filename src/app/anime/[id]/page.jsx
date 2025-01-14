import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-primary">{anime.data.title}</h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="">{anime.data.synopsis}</p>
      </div>
    </>
  );
};
export default page;
