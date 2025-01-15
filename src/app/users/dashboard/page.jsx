import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-primary flex flex-col justify-center items-center">
      <h3>Dashboard</h3>
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt={user?.name} width={100} height={100} />
      <div className="flex flex-wrap gap-4 py-8 ">
        <Link
          href="/users/dashboard/collection"
          className="bg-accent text-dark font-bold py-4 px-4 text-xl"
        >
          My Collection
        </Link>

        <Link
          href="/users/dashboard/comment"
          className="bg-accent text-dark font-bold py-4 px-4 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
