import Link from "next/link";

export const ButtonProdject = ({ link }) => {
  return (
    <Link
      href={link || "#"}
      className="self-end min-w-60 w-fit mx-auto h-11 rounded-md border border-white bg-lime-500 transition duration-300 ease-in-out hover:bg-lime-600 px-14 py-3 tracking-wide leading-6 text-white"
    >
      VISIT PROJECTS
    </Link>
  );
};
