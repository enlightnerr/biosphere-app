import Image from "next/image";
import Link from "next/link";
import { arrowBlack } from "../export";
import { arrowWhite } from "../export";

import "../globals.css";

function WorkWithUs({ HeroImage, textOne, textTwo }) {
  return (
    <div
      className="challenge__container w-full h-fit my-5 justify-start items-center"
      id="workwithus"
    >
      <div className="image__container w-full h-[70%]">
        <Image
          src={HeroImage}
          alt=""
          className="rounded-xl w-full h-[450px] object-cover"
          //   style={{ height: "400px", objectFit: "cover" }}
        />
      </div>
      <div className="text__container mt-5">
        <h1 className="text-4xl inline-flex">{textOne}</h1>
        <div className="flex justify-start items-baseline">
          <h2 className="text-4xl">{textTwo}</h2>
          <div className="ml-5 m-0 p-0">
            <Link
              href="#"
              className="inline-flex justify-end text-sm items-end flex-row border p-1 border-zinc-800 rounded-lg hover:flex-row-reverse hover:bg-zinc-900 hover:text-white"
            >
              careers@biospehere.io
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
