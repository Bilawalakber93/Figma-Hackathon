import React from "react"
import FirstHero from "./Components/firsthero";
import Hero from "./Components/hero";
import Sechero from "./Components/sechero";
import ThirdSec from "./Components/thirdsec";
import ForthHero from "./Components/forthhero";
import FifthHero from "./Components/fifthhero";
import SixHero from "./Components/sixhero";
import SevenHero from "./Components/sevenhero";
import EightHero from "./Components/eighthero";
import NineHero from "./Components/ninehero";

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <FirstHero/>
      <Sechero/>
      <ThirdSec/>
      <ForthHero/>
      <FifthHero/>
      <SixHero/>
      <SevenHero/>
      <EightHero/>
      <NineHero/>
    </div>
  );
}
