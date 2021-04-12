import Image from "next/image";

export default function Modal(props) {
  return (
    <div
      onClick={props.handleModalClose}
      className="px-2 w-full flex mx-auto font-serif p-3 md:px-8 rounded-lg transition ease-in-out duration-1500 justify-center"
    >
      <Image
        className="rounded-xl"
        src={props.imageURL}
        alt={props.imageName}
        width={3000}
        height={1060}
      />
    </div>
  );
}
