import Header from "../../components/Header";
import Grid from "../../components/Grid";
import { client } from "../../utils/prismicClient";
import Meta from "../../components/Meta";

export default function workContent({ workImages, work }) {
  return (
    <>
      <Meta title={work.data.work_name[0].text} />
      <Header />
      <main>
        {work && (
          <h1 className="text-center mb-8 text-xl font-serif text-gray-800">
            {work.data.work_name[0].text}
          </h1>
        )}
        <p className="max-w-3xl mx-auto mb-10 text-center px-5">
          Silence is golden is a live project that I completed for the ISTD
          competition, based around typography. I did the brief silence is
          golden and I was inspired by the Silent film, The Phantom Of The Opera
          that was filmed in the 1920’s to design a poster series.
        </p>
        {workImages && <Grid images={workImages} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.getByUID("work_images", "phantom-of-the-opera");
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
