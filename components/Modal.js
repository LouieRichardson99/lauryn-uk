import Image from "next/image";

export default function Modal(props) {
  return (
    <div className="shadow-xl px-4 w-11/12 mx-auto font-serif lg:w-10/12 md:w-10/12 bg-white p-3 md:px-8 rounded-lg transition ease-in-out duration-1000 ">
      <p className="flex justify-center mb-3">{props.imageName}</p>
      <Image
        className="rounded"
        src={props.imageURL}
        alt={props.imageName}
        width={800}
        height={600}
      />
      <button
        className="block m-auto mt-3 mb-2 p-2 bg-red-700 text-white rounded-lg hover:opacity-80 transition ease-in-out duration-200"
        onClick={props.handleModalClose}
      >
        Close
      </button>
    </div>
  );
}
