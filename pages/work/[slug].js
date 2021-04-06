import React, { useState } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Grid from "../../components/Grid";
import { client } from "../../utils/prismicClient";
import Meta from "../../components/Meta";
import Prismic from "prismic-javascript";

export default function workContent({ workImages, work }) {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleModalOpen = (image) => {
    setModalIsOpen(true);
    setImageName(image.work_image.alt);
    setImageURL(image.work_image.url);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setImageName("");
    setImageURL("");
  };

  return (
    <>
      <Meta title={work.data.work_name[0].text} />
      <Header />
      <main>
        {work && (
          <h1 className="text-center mb-8 text-xl font-serif text-red-700">
            {work.data.work_name[0].text}
          </h1>
        )}
        {workImages && (
          <Grid images={workImages} handleModalOpen={handleModalOpen} />
        )}
        <div
          className={
            isModalOpen
              ? "transition ease-in-out duration-500 flex bg-gray-500 bg-opacity-75 w-full h-full top-0 left-0 fixed justify-center items-center"
              : null
          }
        >
          {isModalOpen ? (
            <div>
              <Modal
                handleModalClose={handleModalClose}
                imageName={imageName}
                imageURL={imageURL}
              />
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const work = await client.query(
    Prismic.Predicates.at("document.type", "work_images")
  );

  const paths = work.results.map((project) => {
    return {
      params: { slug: project.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const work = await client.getByUID("work_images", slug);
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
