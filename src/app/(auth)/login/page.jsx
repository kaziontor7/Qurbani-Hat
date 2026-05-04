
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import CowImg from "@/app/assets/form.jpg"
import Image from "next/image";

const LoginPage = () => {
    return (
        <div>
            <div className="w-7/10 mx-auto md:grid md:grid-cols-2 items-center my-15 bg-white shadow rounded-3xl max-sm:w-9/10">
                <div className="max-sm:hidden order-2">
                    <Image src={CowImg} alt="cool cow" height={750} width={450} className="rounded-r-3xl"></Image>
                </div>

                <div className="p-10 bg-white rounded-3xl order-1">
                    <Form className="w-full" >
                        <Fieldset>
                            <Fieldset.Legend className="text-3xl dark font-bold pb-2">Welcome Back</Fieldset.Legend>
                            <Description className="light-dark">
                                Sign in to manage your livestock and
                                transactions.
                            </Description>
                            <FieldGroup>
                                <TextField isRequired name="email" type="email">
                                    <Label className="font-semibold text-sm dark">Email Address</Label>
                                    <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Email" />
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
                                    Login
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
                        <FaGoogle /> Continue with Google
                    </Button>
                    <p className="light-dark text-center">Don't have an account? <Link href={'/register'} className="primary font-semibold ">Register here</Link></p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;