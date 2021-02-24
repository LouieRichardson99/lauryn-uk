import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-32 sm:w-44 md:w-56 block">
      <Link href="/">
        <a>
          <img
            src="/logo.png"
            alt="Lauryn Burrows Logo"
            width={2074}
            height={1596}
          />
        </a>
      </Link>
    </div>
  );
}
