import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label,  TextField } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import CowImg from "@/app/assets/form.jpg"
import Image from "next/image";


const RegisterPage = () => {
    return (
        <div className="w-7/10 mx-auto md:grid md:grid-cols-2 items-center my-15 bg-white shadow rounded-3xl max-sm:w-9/10">
            <div className="max-sm:hidden">
               <Image src={CowImg} alt="cool cow" height={750} width={450} className="rounded-l-3xl"></Image>
            </div>

            <div className="p-10 bg-white rounded-3xl">
                <Form className="w-full" >
                    <Fieldset>
                        <Fieldset.Legend className="text-3xl dark font-bold pb-2">Register for a Blessed Qurbani Experience</Fieldset.Legend>
                        <Description className="light-dark">
                            Find the perfect animal for your sacrifice from the comfort of your home.
                        </Description>
                        <FieldGroup>
                            <TextField isRequired name="name" type="text">
                                <Label className="font-semibold text-sm dark">Full Name</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Name" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label className="font-semibold text-sm dark">Email Address</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Email" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="photo" type="text">
                                <Label className="font-semibold text-sm dark">Photo URL(Optional)</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Photo of Yourself" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="password" type="password">
                                <Label className="font-semibold text-sm dark">Password</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Password" />
                                <FieldError />
                            </TextField>

                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button type="submit" className="bg-[#F59E0B] text-white" fullWidth>
                                Register <FaArrowRight />
                            </Button>
                        </Fieldset.Actions>
                        
                    </Fieldset>
                </Form>
                <div className="grid grid-cols-3 py-2  items-center">
               <div className="h-px bg-gray-300"></div>
               <p className="text-center light-dark">or</p>
               <div className="h-px bg-gray-300"></div>
                </div>
               <Button className="w-full  my-1" variant="tertiary">
                <FaGoogle /> Sign in with Google
      </Button>
                <p className="light-dark text-center">Already have an account? <Link href={'/login'} className="primary font-semibold ">Login here</Link></p>

            </div>
        </div>
    );
};

export default RegisterPage;