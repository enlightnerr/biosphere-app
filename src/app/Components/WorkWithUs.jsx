import Image from "next/image";
import Link from "next/link";

function WorkWithUs({ HeroImage, textOne }) {
  return (
    <div className="challenge__container w-full h-fit my-5 justify-start items-center">
      <div className="image__container w-full h-[70%]">
        <Image
          src={HeroImage}
          alt=""
          className="rounded-xl w-full h-[450px] object-cover"
          //   style={{ height: "400px", objectFit: "cover" }}
        />
      </div>
      <div className="text__container mt-5">
        <h1 className="text-5xl w-[400px]">
          {textOne}
          <Link
            href="#"
            className="text-sm p-2 ml-10 border border-zinc-900 rounded-lg hover:bg-zinc-900 hover:text-white"
          >
            careers@biosphere.io
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default WorkWithUs;
