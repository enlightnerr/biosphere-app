import Challenge from "./Components/Challenge";
import "./globals.css";
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
    </main>
  );
}
