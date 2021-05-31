import React from "react";
import Image from "next/image";

export default function Grid({ images, handleModalOpen }) {
  return (
    <div>
      <div className="grid max-w-4xl grid-cols-1 mx-auto sm:mt-0">
        {images.map((image, index) => (
          <div key={index} className="m-1 sm:m-2">
            <Image
              alt={image.work_image.alt}
              src={image.work_image.url}
              width={image.work_image.dimensions.width}
              height={image.work_image.dimensions.height}
              className="transition duration-200 ease-in-out rounded-lg hover:bg-gray-800 hover:opacity-60 cursor-pointer"
              onClick={() => handleModalOpen(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
