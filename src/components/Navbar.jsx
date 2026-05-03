'use client';
import { Button, Dropdown, Header } from "@heroui/react";
import {Bars} from '@gravity-ui/icons';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
    return (
        <div className="flex items-center justify-between p-6 border-b border-[#E7E5E4] shadow bg-[#F9F8F6]">
            <div className="flex items-center gap-6">
                <div className="md:hidden">
                    <Dropdown>
      <Button isIconOnly aria-label="Menu" variant="secondary">
        <Bars className="outline-none text-[#2D4F1E]" />
      </Button>
      <Dropdown.Popover className="min-w-[220px]">
        <Dropdown.Menu
          disabledKeys={["delete-file"]}
          onAction={(key) => console.log(`Selected: ${key}`)}
        >
          <Dropdown.Section>
            <Header>Menu</Header>
            <Dropdown.Item id="new-file" textValue="New file">
              <div className=" pt-px">
                <Link className={`${pathname === '/' ? "font-semibold primary border-b-2 border-[#F59E0B] " : "secondary font-medium "} `} href={'/'}>Home</Link>
              </div>     
            </Dropdown.Item>
            <Dropdown.Item id="all-animals" textValue="all animals">
              <div className=" pt-px">
                <Link className={`${pathname === '/all-animals' ? "font-semibold primary border-b-2 border-[#F59E0B] " : "secondary font-medium "} `} href={'/all-animals'}>All Animals</Link>
              </div>     
            </Dropdown.Item>
            <Dropdown.Item id="buttons" textValue="buttons">
               <div className="flex items-center gap-6">
                <Link href={'/signin'}>
                <Button variant="ghost" className="secondary">Sign in</Button>
                </Link>
                <Link href={'/register'}>
                <Button className="text-white bg-[#173809]">Register</Button>
                </Link>
            </div>   
            </Dropdown.Item>
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  
                </div>
                <h1 className="primary font-bold text-2xl ">QurbaniHat</h1>
                <Link className={`${pathname === '/' ? "font-semibold primary border-b-2 border-[#F59E0B] hidden md:block" : "secondary font-medium hidden md:block"} `} href={'/'}>Home</Link>
                <Link className={`${pathname === '/all-animals' ? "font-semibold primary border-b-2 border-[#F59E0B] hidden md:block" : "secondary font-medium hidden md:block"} `} href={'/all-animals'}>All Animals</Link>
            </div>
            <div className=" items-center gap-6 hidden md:flex">
                <Button variant="ghost" className="secondary">Sign in</Button>
                <Button className="text-white bg-[#173809]">Register</Button>
            </div>

        </div>
    );
};

export default Navbar;