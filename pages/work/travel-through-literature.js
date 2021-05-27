import React, { useState } from "react";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import WideModal from "../../components/WideModal";
import WideGrid from "../../components/WideGrid";
import { client } from "../../utils/prismicClient";
import Meta from "../../components/Meta";

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
          <h1 className="text-center mb-8 text-xl font-serif text-gray-800">
            {work.data.work_name[0].text}
          </h1>
        )}
        <ReactPlayer
          className="mb-5 w-full px-1 max-w-4xl"
          url="/videos/TTL.mp4"
          controls={true}
          playing={true}
          loop={true}
          volume={0}
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
          width="full"
          height="full"
        />
        {workImages && (
          <WideGrid images={workImages} handleModalOpen={handleModalOpen} />
        )}
        <div
          onClick={isModalOpen ? handleModalClose : null}
          className={
            isModalOpen
              ? "transition ease-in-out duration-500 flex bg-gray-600 bg-opacity-75 w-full h-full top-0 left-0 fixed items-center justify-center"
              : null
          }
        >
          {isModalOpen && (
            <WideModal
              handleModalClose={handleModalClose}
              imageName={imageName}
              imageURL={imageURL}
            />
          )}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const work = await client.getByUID(
    "work_images",
    "travel-through-literature"
  );
  const workImages = work.data.images;

  return {
    props: {
      workImages,
      work,
    },
  };
}
