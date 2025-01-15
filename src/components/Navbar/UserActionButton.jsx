import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Logout" : "Login";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between gap-4">
      {user ? (
        <Link className="py-1" href="/users/dashboard">
          Dashboard
        </Link>
      ) : null}

      <Link
        href={actionUrl}
        className="bg-dark text-accent py-1 px-12 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
