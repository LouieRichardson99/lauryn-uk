import React from "react";
import Image from "next/image";

export default function Grid({ images, handleModalOpen }) {
  return (
    <div>
      <div className="grid w-11/12 max-w-4xl grid-cols-2 mx-auto -mt-6 sm:mt-0 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="px-1 sm:p-2">
            <Image
              alt={image.work_image.alt}
              src={image.work_image.url}
              width="400"
              height="300"
              className="transition duration-200 ease-in-out rounded-lg hover:bg-gray-800 hover:opacity-60"
              onClick={() => handleModalOpen(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
