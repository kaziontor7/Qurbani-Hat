import Image from 'next/image';
import HeroImg from "@/app/assets/heroimg.png";

const Hero = () => {
    return (
         <div className="flex items-center bg-[#F4F4EC] md:py-20 py-10 md:px-6 px-3 gap-10 flex-col md:flex-row">
                <div className="space-y-6 ">
                  <h1 className="dark font-extrabold text-5xl/[57.6px]">
                    Premium Livestock for a
                    Sacred Tradition
                  </h1>
                  <p className="light-dark text-lg">
                    Discover healthy, professionally verified animals from trusted
                    breeders. We bring transparency and quality to your Qurbani
                    experience.
                  </p>
                  <div className="gap-4 flex ">
                    <button className="text-white  px-8 py-3.5 bg-[#F59E0B] rounded-2xl">Browse Animals</button>
                    <button className="primary  px-8 py-3.5 bg-white  rounded-2xl border border-[#2D4F1E]">View Top Breeds</button>
                  </div>
                </div>
                <div className="">
                  <Image src={HeroImg} alt="A Cow" className="rounded-lg border-7 border-white drop-shadow-lg" width={592} height={444} />
                </div>
              </div>
    );
};

export default Hero;