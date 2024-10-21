import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Featured/>
    </>
  );
}
