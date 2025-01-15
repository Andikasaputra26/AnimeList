import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-4">
        <Link href="/" className="font-bold text-2xl">
          ANIMELIST
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
