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
          Jimmy’s End is a personal editorial design about my rugby union team.
          The aim of this project was based around the fans to celebrate and
          remember where the club has come from to where they are now.
        </p>
        {workImages && <Grid images={workImages} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.getByUID("work_images", "jimmys-end");
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
