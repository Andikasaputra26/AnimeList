import Link from "next/link";

const Header = ({ title, linkHref, linkText }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkText ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          {linkText}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
