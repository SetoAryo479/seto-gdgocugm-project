import Image from "next/image";
import Hero from "@/src/modules/landingpage/hero/hero";
import Discover from "@/src/modules/landingpage/discover/discover";

export default function Home() {
  return (
    <>
      <Hero />
      <Discover />
    </>
  );
}
