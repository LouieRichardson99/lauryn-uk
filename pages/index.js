import Link from "next/link";
import Image from "next/image";
import HomeHeader from "../components/HomeHeader";
import Meta from '../components/Meta';

export default function Home() {
  return (
    <div className="font-serif text-gray-800">
      <Meta 
        title="Homepage"
        desc="Lauryn Burrows is a graphic design student currently studying at
        Leeds Beckett University with a passion for branding, advertising, and publications."
      />
      <HomeHeader />
      <main>
        <section>
          <div className="w-10/12 sm:w-3/4 md:w-3/4 lg:w-4/6 xl:w-5/12 m-auto hover:animate-ping ">
            <Image
              src="/logo.jpg"
              alt="Lauryn Burrows Logo"
              width={1938}
              height={1504}
            />
          </div>
        </section>
        <section>
          <div className="w-11/12 sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-4/12 m-auto mt-10">
            <p className="text-l md:text-xl text-center">
              I am a graphic design student currently studying at
              Leeds Beckett University with a passion for{" "}
              <span className="text-red-700 font-bold">branding</span>,{" "}
              <span className="text-red-700 font-bold">advertising</span> and{" "}
              <span className="text-red-700 font-bold">publications</span>.
            </p>
            <Link href="/about">
              <button className="p-2 bg-red-700 text-white rounded-md flex m-auto mt-8">
                Want to know more?
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
