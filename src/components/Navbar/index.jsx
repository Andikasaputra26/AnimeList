import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-4">
        <Link href="/" className="font-bold text-2xl">
          ANIMELIST
        </Link>
        <InputSearch />
        <Link
          href="/api/auth/signin"
          className="font-bold px-2 py-1 text-primary bg-dark rounded w-28 text-center "
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
