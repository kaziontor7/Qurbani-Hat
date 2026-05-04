'use client';
import { Button, Dropdown, Header, Spinner, Tooltip } from "@heroui/react";
import { Bars } from '@gravity-ui/icons';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Profile from "@/app/assets/profile.jpg"

const Navbar = () => {
  const pathname = usePathname()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  console.log(user);

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
                    {isPending ? (<div className="flex flex-col items-center gap-2 pr-8">
                      <Spinner color="success" />
                      <span className="text-xs text-muted "></span>
                    </div>) : user ? (<div className=" items-center gap-6 flex">
                       
        
                      <Image src={user.image || Profile} alt="user" height={40} width={40} className="rounded-full"></Image>
                      
                   
                      
                      <Button className="text-white bg-[#173809]">Logout</Button>
                    </div>) : (<div className=" items-center gap-6 flex">
                      <Link href={'/login'}>
                        <Button variant="ghost" className="secondary">Sign in</Button>
                      </Link>
                      <Link href={'/register'}>
                        <Button className="text-white bg-[#173809]">Register</Button>
                      </Link>
                    </div>)}
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

      {isPending ? (<div className="flex flex-col items-center gap-2 pr-8 max-sm:hidden">
        <Spinner color="success" />
        <span className="text-xs text-muted "></span>
      </div>) : user ? (<div className=" items-center gap-6 hidden md:flex">
       
                      <Image src={user.image || Profile} alt="user" height={40} width={40} className="rounded-full"></Image>
                     <Link href={'/profile'}>
                       <Button className="text-white bg-yellow-500">Profile</Button>
                       </Link>
        <Button className="text-white bg-[#173809]" onClick={async () => await authClient.signOut()}>Logout</Button>
      </div>) : (<div className=" items-center gap-6 hidden md:flex">
        <Link href={'/login'}>
          <Button variant="ghost" className="secondary">Sign in</Button>
        </Link>
        <Link href={'/register'}>
          <Button className="text-white bg-[#173809]">Register</Button>
        </Link>
      </div>)}




    </div>


  );
};

export default Navbar;