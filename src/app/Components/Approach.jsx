import Image from "next/image";

function Approach({
  HeroImage,
  textOne,
  itemOne,
  itemTwo,
  itemThree,
  itemFour,
}) {
  return (
    <div
      className="challenge__container w-full h-fit inline-flex flex-row-reverse  my-5 justify-between items-center"
      id="ourapproach"
    >
      <div className="image__container w-1/2 h-1/2">
        <Image src={HeroImage} alt="" className="rounded-xl h-[550px]" />
      </div>
      <div className="text__container w-[45%] block">
        <h1 className="text-3xl w-[500px] ">{textOne}</h1>
        <h1 className="text-3xl w-[500px] pt-5">{}</h1>
        <ol className="text-xl leading-1 mt-5 w-[50%]">
          <li className="my-2">1. {itemOne}</li>
          <li className="my-2">2. {itemTwo}</li>
          <li className="my-2">3. {itemThree}</li>
          <li className="my-2">4. {itemFour}</li>
        </ol>
      </div>
    </div>
  );
}

export default Approach;
