import Image from "next/image";
import Header from "../../components/Header";
import Link from "next/link";
import Meta from "../../components/Meta";
import { client } from "../../utils/prismicClient";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function work({ work }) {
  return (
    <>
      <Meta title="Work" desc="Lauryn Burrows work portfolio" />
      <Header />
      <main className="font-serif text-gray-800">
        <h2 className="mt-0 mb-8 lg:mb-12 md:mt-2 text-xl text-center">
          My Work
        </h2>
        <div className="block md:flex m-4 justify-center">
          {work &&
            work.results.map((project, index) => {
              return (
                <div
                  className="w-11/12 mx-auto md:mx-3 md:w-1/2 max-w-lg relative"
                  key={index}
                >
                  <Link href={`/work/${project.uid}`}>
                    <a>
                      <Image
                        src={project.data.images[0].work_image.url}
                        width={2048}
                        height={1500}
                        alt={project.data.images[0].work_image.alt}
                        className="rounded-lg object-cover hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
                      />
                      <div className="text-right md:text-left mt-1 md:ml-1 mb-3 text-gray-800 font-semibold">
                        {RichText.render(project.data.work_name)}
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.query(
    Prismic.Predicates.at("document.type", "work_images")
  );

  return {
    props: {
      work,
    },
    revalidate: 600,
  };
}
