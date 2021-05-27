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
        {workImages && <Grid images={workImages} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.getByUID("work_images", "caffe-nero-rebrand");
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
