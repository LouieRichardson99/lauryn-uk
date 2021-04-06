import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-32 sm:w-44 md:w-56 block">
      <Link href="/">
        <a>
          <Image
            src="/logo.jpg"
            alt="Lauryn Burrows Logo"
            width={750}
            height={500}
          />
        </a>
      </Link>
    </div>
  );
}
