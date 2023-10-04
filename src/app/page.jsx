import Challenge from "./Components/Challenge";
import Approach from "./Components/Approach";
import WorkWithUs from "./Components/WorkWithUs";
import { imageOne } from "./export";
import { imageTwo } from "./export";
import { imageThree } from "./export";

export default function Home() {
  return (
    <main className="main__container">
      <Challenge
        HeroImage={imageOne}
        textOne="Today, global commodities are produced using monocropping, factory farming, and petroleum refining."
        textTwo="These extractive approaches generate toxic byproducts and have unsustainable resource demands."
      />
      <Approach
        HeroImage={imageTwo}
        textOne="Biomanufacturing is a better approach for world-scale production of food, fuel, and materials. We are accelerating its adoption by:"
        itemOne="Developing our next generation bioreactor technology"
        itemTwo="Integrating our reactor into an industrial production platform"
        itemThree="Using our platform to accelerate the deployment of new bioproducts"
        itemFour="Transitioning to diversified feedstocks and distributed production"
      />
      <WorkWithUs
        HeroImage={imageThree}
        textOne="Help Us Reinvent Manufacturing"
      />
    </main>
  );
}
