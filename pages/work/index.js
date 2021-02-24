import Image from "next/image";
import Header from "../../components/Header";
import Link from "next/link";

export default function work() {
  return (
    <div className="font-serif text-gray-800">
      <Header />
      <h2 className="mt-0 mb-8 lg:mb-12 md:mt-3 text-xl text-center">
        My Work
      </h2>
      <div className="block md:flex m-4 justify-center">
        <div className="w-11/12 mx-auto md:mx-3 md:w-1/2 max-w-lg relative">
          <Link href="/work/travel-through-literature">
            <a>
              <Image
                src={
                  "https://images.prismic.io/lauryn-uk/eb62fb92-4d57-4cbc-a1b2-e20850444638_1.png?auto=compress,format"
                }
                width={1000}
                height={1000}
                alt="Travel Through Literature"
                className="rounded-lg hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
              />
            </a>
          </Link>
          <p className="text-right md:text-left mt-1 font-bold md:ml-1 mb-3 text-red-700">
            Travel Through Literature
          </p>
        </div>
        <div className="w-11/12 mx-auto md:mx-3 md:w-1/2 max-w-lg relative text-center">
          <Link href="/work/phantom-of-the-opera">
            <a>
              <Image
                src={
                  "https://images.prismic.io/lauryn-uk/67d494ac-f7c6-4844-b849-0e2b1850dcb3_1%281%29.png?auto=compress,format"
                }
                width={1000}
                height={1000}
                alt="Phantom of the Opera"
                className="rounded-lg hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
              />
            </a>
          </Link>
          <p className="text-right mt-1 mb-3 text-red-700 font-bold">
            Phantom of the Opera
          </p>
        </div>
      </div>
    </div>
  );
}
