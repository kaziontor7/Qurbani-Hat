
import BookingForm from "@/components/BookingForm";
import AnimalGallery from "@/components/Gallery";
import { getAnimals } from "@/lib/data";
import { Breadcrumbs } from "@heroui/react";
import { CiLocationOn } from "react-icons/ci";

import { GiWeightScale } from "react-icons/gi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { SiAnimalplanet } from "react-icons/si";
import { toast } from "react-toastify";


const AnimalsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const animal = await getAnimals(`https://qurbani-hat-data.onrender.com/cattle/${id}`);
    
    

    return (
        <div className="pt-12 pb-19 px-6">
            <Breadcrumbs className="pb-2">
                <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/all-animals">All Animals</Breadcrumbs.Item>
                <Breadcrumbs.Item>{animal.name}</Breadcrumbs.Item>
            </Breadcrumbs>
            <h1 className="font-bold text-[40px] dark">{animal.name}</h1>
            <div className=" gap-6 grid md:grid-cols-3 grid-cols-1">
                <div className="md:col-span-2">
                    <AnimalGallery imageItems={animal.images}></AnimalGallery>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-semibold dark pt-10">Animal Specifications</h1>
                        <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
                            <div className="space-y-3 p-5 bg-white drop-shadow rounded-2xl">
                                <SiAnimalplanet className="text-[#6F7973] text-2xl" />
                                <p className="light-dark text-xs">BREED</p>
                                <p className="text-lg dark">{animal.breed}</p>
                            </div>
                            <div className="space-y-3 p-5 bg-white drop-shadow rounded-2xl">
                                <GiWeightScale className="text-[#6F7973] text-2xl" />
                                <p className="light-dark text-xs">EST. WEIGHT</p>
                                <p className="text-lg dark">{animal.weight} kg</p>
                            </div>
                            <div className="space-y-3 p-5 bg-white drop-shadow rounded-2xl">
                                <HiOutlineCalendarDateRange className="text-[#6F7973] text-2xl" />
                                <p className="light-dark text-xs">AGE</p>
                                <p className="text-lg dark">{animal.age} Years</p>
                            </div>
                            <div className="space-y-3 p-5 bg-white drop-shadow rounded-2xl">
                                <MdOutlineHealthAndSafety className="primary text-2xl" />
                                <p className="light-dark text-xs">HEALTH</p>
                                <p className="text-lg primary">Excellent</p>
                            </div>
                        </div>
                        <div className="space-y-4 p-8 bg-white drop-shadow rounded-2xl">
                            <h1 className="font-semibold text-2xl dark">About this Animal</h1>
                            <p className="light-dark">{animal.description}</p>
                            <div className="p-3 bg-[#BEC9C2]/20 rounded-2xl">
                                <p className="dark text-lg font-semibold">Current Location</p>
                                <p className=" text-[#3F4944] text-sm flex items-center gap-1.5 "><CiLocationOn className="secondary text-xl" />
                                    {animal.location}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3.5">
                    <div className="bg-white p-6 rounded-3xl shadow max-sm:mt-6">
                        <p className="light-dark text-xs">ASKING PRICE</p>
                        <p className="secondary font-bold text-xl">৳ {animal.price} BDT</p>
                        <p className="text-[#3F4944] text-sm  flex items-center  gap-2.5 p-3 bg-[#BEC9C2]/20 rounded-2xl"><RiTruckLine className="text-2xl" /> Delivery available within 50 miles for an
                            additional fee.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow">
                       
                        <div>
                         <BookingForm></BookingForm>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AnimalsDetailsPage;