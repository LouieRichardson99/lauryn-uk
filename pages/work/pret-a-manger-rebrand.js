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
          For this project I wanted to re-brand coffee houses likes Starbucks,
          Costa Coffee, Pret A Manger and Caffe Nero. As this wasn’t a real
          re-branding I wanted it to be a chance to have fun with the project
          and learn from it.
        </p>
        {workImages && <Grid images={workImages} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.getByUID("work_images", "pret-a-manger-rebrand");
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
