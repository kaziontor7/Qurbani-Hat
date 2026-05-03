'use client'
import Card from "@/components/Card";
import { getAnimals } from "@/lib/data";
import { Label, ListBox, Select } from "@heroui/react";
import { use, useState } from "react";

let animalsPromise = getAnimals('https://qurbani-hat-data.onrender.com/cattle');

const AllAnimalsPage = () => {
    const [newPromise,setNewPromise] = useState(animalsPromise)
    const animals = use(newPromise);
    
    
    const [selectedType, setSelectedType] = useState("all");
    const [sortOrder, setSortOrder] = useState("");

    const updatePromise =(type,sort)=>{
         if( type == 'all'){
        setNewPromise(getAnimals(`https://qurbani-hat-data.onrender.com/cattle?_sort=${sort}`))
        
    }
    else{
        setNewPromise(getAnimals(`https://qurbani-hat-data.onrender.com/cattle?type=${type}&_sort=${sort}`))
    }
    
    }
   
    
    return (
        <div className="pt-10 pb-15 px-6">
            <div className="space-y-2">
                <p className="dark text-5xl font-extrabold">Browse All Animals</p>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="light-dark text-lg">Discover our curated selection of premium livestock for your needs.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <Select className="w-42" placeholder="Filter By Type" onSelectionChange={(type) =>{ setSelectedType(type)
                            updatePromise(type,sortOrder);
                            }}>
                                
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="all" textValue="All Types">
                                            All Types
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cow" textValue="Cow">
                                            Cow
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Goat" textValue="Goat">
                                            Goat
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Sheep" textValue="Sheep">
                                            Sheep
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                        <div>
                             <Select className="w-42" placeholder="Sort By Price" onSelectionChange={(sort) => {setSortOrder(sort)
                                updatePromise(selectedType,sort)
                             }}>
                                
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="price" textValue="Price - Low to High">
                                            Price - Low to High
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="-price" textValue="-price">
                                            Price - High to Low
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-7">
                {animals.map(animal=><Card key={animal.id} animal={animal}></Card>)}
                
            </div>
        </div>
    );
};

export default AllAnimalsPage;