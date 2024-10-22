import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Featured from "@/components/Featured";
import Blog from "@/components/Blog";
import Discover from "@/components/Discover";
import Newletter from "@/components/Newletter";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <Hero/>
    <Discover/>
    <AboutUs/>
    <Featured/>
    <Blog/>
    <Newletter/>
    </div>
  );
}
