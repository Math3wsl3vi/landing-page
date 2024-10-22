import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <Hero/>
    <AboutUs/>
    <Featured/>
    </div>
  );
}
