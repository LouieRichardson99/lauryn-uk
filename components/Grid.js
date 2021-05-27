import React from "react";
import Image from "next/image";

export default function Grid({ images, handleModalOpen }) {
  return (
    <div>
      <div className="grid w-11/12 max-w-4xl grid-cols-1 mx-auto sm:mt-0">
        {images.map((image, index) => (
          <div key={index} className="m-1 sm:m-2 flex justify-center">
            <Image
              alt={image.work_image.alt}
              src={image.work_image.url}
              width={image.work_image.dimensions.width}
              height={image.work_image.dimensions.height}
              className="rounded-lg mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
