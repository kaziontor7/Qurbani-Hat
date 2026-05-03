import { getAnimals } from "@/lib/data";
import Card from "../Card";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";


const Listings = async () => {
  const allAnimals = await  getAnimals('https://qurbani-hat-data.onrender.com/cattle');
  return (
    <div className="md:py-16 py-8 md:px-6 px-3">
      <h2 className="font-bold text-3xl dark ">Featured Listings</h2>
      <div className="flex items-center justify-between pt-1.75 pb-8">
        <p className="light-dark ">Verified health and premium quality.</p>
        <Link href={'/'}>
          <Button variant="ghost" className='primary'>View All <FaArrowRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allAnimals.slice(0, 4).map(animal => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Listings;