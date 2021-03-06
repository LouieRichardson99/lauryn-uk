import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="sm:flex sm:space-x-20 font-serif mb-5 sm:mb-0 justify-center mt-2">
      <Link href="/">
        <a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">Home</a>
      </Link>
      <Link href="/about">
        <a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">About</a>
      </Link>
      <Link href="/work">
        <a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">Work</a>
      </Link>
      <Link href="/blog">
        <a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">Blog</a>
      </Link>
    </div>
  );
}
