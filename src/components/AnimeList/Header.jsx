import Link from "next/link";

const Header = ({ title, linkHref, linkText }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
      {linkHref && linkText ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline text-primary hover:text-accent transition-all"
        >
          {linkText}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
