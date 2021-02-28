import Image from "next/image";
import Header from "../../components/Header";
import Link from "next/link";
import Meta from "../../components/Meta";
import { client } from "../../utils/prismicClient";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function work({ work }) {
  return (
    <div className="font-serif text-gray-800">
      <Meta 
        title="Work"
        desc="Lauryn Burrows work portfolio"
      />
      <Header />
      <h2 className="mt-0 mb-8 lg:mb-12 md:mt-2 text-xl text-center">
        My Work
      </h2>
      <div className="block md:flex m-4 justify-center">
        {work && work.results.map((project, index) => {
          return (
            <div className="w-11/12 mx-auto md:mx-3 md:w-1/2 max-w-lg relative" key={index}>
              <Link href={`/work/${project.uid}`}>
                <a>
                  <Image 
                    src={project.data.images[0].work_image.url}
                    width={project.data.images[0].work_image.dimensions.width}
                    height={project.data.images[0].work_image.dimensions.height}
                    alt={project.data.images[0].work_image.alt}
                    className="rounded-lg hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
                  />
                  <div className="text-right md:text-left mt-1 font-bold md:ml-1 mb-3 text-red-700">
                    {RichText.render(project.data.work_name)}
                  </div>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const work = await client.query(
    Prismic.Predicates.at("document.type", "work_images")
  );

  return {
    props: {
      work,
    },
  };
}
