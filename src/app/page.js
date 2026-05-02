
import Explore from "@/components/homepage/Explore";
import Guidance from "@/components/homepage/Guidance";
import Hero from "@/components/homepage/Hero";
import Listings from "@/components/homepage/Listings";

export default function Home() {
  return (
    <div>
      <Hero />
      <Listings />
      <Explore />
      <Guidance />
    </div>
  );
}
