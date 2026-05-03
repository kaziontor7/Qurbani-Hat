import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";



const Card = ({animal}) => {
//     "id": "1",
// "name": "Premium Grass-Fed Bull",
// "type": "Cow",
// "breed": "Local Cross",
// "price": 180000,
// "weight": 360,
// "age": 4,
// "location": "Dhaka",
// "description": "Premium grass-fed bull raised under controlled farm conditions. The animal is disease-free, well monitored, and maintained with international food safety standards. Ideal for premium Qurbani.",
// "images": {
// "front": "https://uploads-master.aws.bengalmeat.com/media/cattle-image/2026/BLF_5337_2.jpg",
// "side": "https://uploads-master.aws.bengalmeat.com/media/cattle-image/2026/BLF_5337_3.jpg",
// "back": "https://uploads-master.aws.bengalmeat.com/media/cattle-image/2026/BLF_5337_4.jpg"
// },
// "category": "Large Animal"
    return (
        <div className="border border-[#E2E3DC] rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
           <Image src={animal.images.front} alt={animal.name} width={300} height={200} className="rounded-t-3xl w-full" />
           <div className="space-y-2 p-5 ">
           <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold dark ">{animal.name}</h2>
            <p className="primary font-bold text-lg whitespace-nowrap">৳ {animal.price.toLocaleString()}</p>

           </div>

            <div className="flex  flex-wrap items-center gap-2 justify-center">
                <p className="text-sm light-dark  px-2 bg-[#E8E9E1] rounded-lg">{animal.breed}</p>
                <p className="text-sm light-dark  px-2 bg-[#E8E9E1] rounded-lg">{animal.weight} Kg</p>
                <p className="text-sm light-dark  px-2 bg-[#E8E9E1] rounded-lg">{animal.age} Years</p>
            </div>
             <p className="light-dark text-sm line-clamp-3">{animal.description}</p>
             <Link href={'/'}>
             <Button variant="tertiary" fullWidth className='light-dark border border-[#C3C8BB]'>View Details</Button>
             </Link>
           </div>
           
        </div>
    );
};

export default Card;