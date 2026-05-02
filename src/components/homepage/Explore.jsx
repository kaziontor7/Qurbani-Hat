import Image from "next/image";
import Link from "next/link";
import Cattle from "@/app/assets/landscape.png";
import Goat from "@/app/assets/goat.png";
import Cow from "@/app/assets/cow.jpg";


const Explore = () => {
    return (
        <div className="bg-[#F4F4EC] md:py-16 py-8 md:px-6 px-3">
        <h1 className="font-bold text-3xl dark text-center">Explore Top Breeds</h1>
        <p className="light-dark text-center pt-1.5 pb-10">Discover the characteristics of popular livestock breeds to make an informed decision for
          your Qurbani.</p>
       <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full md:h-125 h-300  mx-auto">
      <div className="relative md:col-span-2 md:row-span-2 rounded-4xl overflow-hidden">
        <Image src={Cattle} alt="The Majestic Brahman" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-8 left-8 space-y-2">
          <p className="text-white rounded-lg py-1 px-2.5 bg-[#F59E0B] w-fit">Most Popular Cattle</p>
          <p className="font-bold text-3xl text-white">The Majestic Brahman</p>
          <p className="text-white">
            Known for their resilience, impressive stature, and premium<br /> meat
            yield. The top choice for grand sacrifices.
          </p>
          <Link href={'/all-animals'}>
            <p className="text-[#F59E0B] mt-2 inline-block hover:underline">Explore</p>
          </Link>
        </div>
      </div>
      <div className="relative  rounded-4xl overflow-hidden">
        <Image src={Goat} alt="Jamunapari Goats" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        <div className="absolute bottom-6 left-6 space-y-1">
          <p className="font-semibold text-white">Jamunapari Goats</p>
          <p className="text-white text-sm">Elegant and high-yielding</p>
          <Link href={'/all-animals'}>
            <p className="text-[#F59E0B] hover:underline">Explore</p>
          </Link>
        </div>
      </div>

      <div className="relative rounded-4xl overflow-hidden">
        <Image src={Cow} alt="Local Deshi" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        <div className="absolute bottom-6 left-6 space-y-1">
          <p className="font-semibold text-white">Local Deshi</p>
          <p className="text-white text-sm">Authentic taste, robust health.</p>
          <Link href={'/all-animals'}>
            <p className="text-[#F59E0B] hover:underline">Explore</p>
          </Link>
        </div>
      </div>

    </div>
      </div>
    );
};

export default Explore;