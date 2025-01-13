import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.map((anime) => (
        <Link
          href={`/${anime.mal_id}`}
          className="cursor-pointer text-primary hover:text-accent transition-all"
          key={anime.mal_id}
        >
          <Image
            src={anime.images?.webp?.image_url || "/placeholder-image.png"}
            alt={anime.title || "Anime image"}
            width={350}
            height={350}
            className="w-full max-h-64 object-cover rounded-t-md"
          />
          <h3 className="font-bold md:text-xl p-4 text-sm">
            {anime.title || "Unknown Title"}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
