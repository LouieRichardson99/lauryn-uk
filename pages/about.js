import Header from "../components/Header";
import Meta from "../components/Meta";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Meta
        title="About"
        desc="I am a graphic designer currently in my final year at Leeds Beckett
        University. I specialise in Publication Design, Branding and
        Advertising, however I am always up for a challenge that is outside
        of my comfort zone."
      />
      <Header />
      <main className="-mt-4 sm:mt-0 font-serif text-gray-800 md:w-4/6 m-auto leading-relaxed w-5/6">
        <div className="xl:max-w-screen-md mx-auto">
          <h2 className="text-xl text-center my-2 md:my-0">About Me</h2>
          <p className="font-bold text-l mt-8 mb-6">
            Hi, I am <span className="text-red-700 text-xl pl-1">Lauryn!</span>
          </p>
          <p>
            I am a graphic designer currently in my final year at Leeds Beckett
            University. I specialise in Publication Design, Branding and
            Advertising, however I am always up for a challenge that is outside
            of my comfort zone. I am skilled in using Adobe Suite especially
            Photoshop and Indesign. I love to illustrate in my spare time
            especially animals.
          </p>
          <p className="mt-3">
            My goal is to become a designer who creates designs that will
            inspire and motivate people whilst leaving a lasting impression. I
            am looking for job roles that will challenge me and greater my
            skills in the design world.
          </p>
          <br />
          <p className="font-bold">Want to get in touch?</p>
          <p>
            You can email me at{" "}
            <a href="mailto:laurynb1907@gmail.com">
              <span className="text-red-700">laurynb1907@gmail.com</span>
            </a>
          </p>
          <div className="mt-8 mb-10 md:mx-0 w-32 mx-auto flex">
            <a href="https://twitter.com/BdesignsLr" target="_blank">
              <i
                aria-hidden="true"
                className="mr-6 fab fa-twitter fa-2x text-gray-800"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/lrbdesigns_/?hl=en"
              target="_blank"
            >
              <i
                aria-hidden="true"
                className="mr-6 fab fa-instagram fa-2x text-gray-800"
              ></i>
            </a>
            <a href="https://www.facebook.com/lrbdesigns/" target="_blank">
              <i
                aria-hidden="true"
                className="mr-6 fab fa-facebook fa-2x text-gray-800"
              ></i>
            </a>
          </div>
        </div>
        <div className="md:w-2/3 lg:w-2/3 xl:w-1/2 mx-auto 2xl:w-1/2 max-w-lg">
          <Image
            src="/portrait.jpg"
            alt="Graphic Designer Lauryn Burrows, Digital Illustration"
            width={725}
            height={1000}
          />
        </div>
      </main>
    </>
  );
}
