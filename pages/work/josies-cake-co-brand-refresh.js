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
        <p className="max-w-3xl mx-auto mb-2 text-center px-5">
          Josie's Cake Co is a bakery based in Northampton that started up just
          over a year ago, and the client was now looking for a brand re-fresh.
          The Client wanted us to use similar colour’s to what they originally
          had, however myself and grace decided to do a copy for the colours
          that we would of used if we had full rein.
        </p>
        {workImages && <Grid images={workImages} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.getByUID(
    "work_images",
    "josies-cake-co-brand-refresh"
  );
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
