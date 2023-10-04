import Image from "next/image";

function Challenge({ HeroImage, textOne, textTwo }) {
  return (
    <div className="challenge__container w-full h-fit inline-flex my-5 justify-start items-center">
      <div className="image__container w-1/2 h-1/2">
        <Image src={HeroImage} alt="" className="rounded-xl h-[550px]" />
      </div>
      <div className="text__container ml-10 block">
        <h1 className="text-3xl w-[500px] ">{textOne}</h1>
        <h1 className="text-3xl w-[500px] pt-5">{textTwo}</h1>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  );
}

export default Challenge;
