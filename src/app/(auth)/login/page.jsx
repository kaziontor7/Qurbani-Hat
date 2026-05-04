"use client"
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import CowImg from "@/app/assets/form.jpg"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
     const GoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
 
};
    const {
    register,
    handleSubmit,
  } = useForm();
  const handleOnSubmit= async (data)=>{
    console.log(data);
    const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});

  }
    return (
        <div>
            <div className="w-7/10 mx-auto md:grid md:grid-cols-2 items-center my-15 bg-white shadow rounded-3xl max-sm:w-9/10">
                <div className="max-sm:hidden order-2">
                    <Image src={CowImg} alt="cool cow" height={750} width={450} className="rounded-r-3xl"></Image>
                </div>

                <div className="p-10 bg-white rounded-3xl order-1">
                    <Form className="w-full" onSubmit={handleSubmit(handleOnSubmit)} >
                        <Fieldset>
                            <Fieldset.Legend className="text-3xl dark font-bold pb-2">Welcome Back</Fieldset.Legend>
                            <Description className="light-dark">
                                Sign in to manage your livestock and
                                transactions.
                            </Description>
                            <FieldGroup>
                                <TextField isRequired name="email" type="email">
                                    <Label className="font-semibold text-sm dark">Email Address</Label>
                                    <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Email" {...register("email")} />
                                    <FieldError />
                                </TextField>
                               
                              <TextField  name="password" isRequired className="">
                                  <Label className="font-semibold text-sm dark">Password</Label>
                                  <InputGroup className="bg-[#BEC9C2]/20 rounded-xl">
                                    <InputGroup.Input
                                      className=" placeholder:text-[#6B7280] "
                                      type={isVisible ? "text" : "password"}
                                      placeholder="Your Password" {...register("password")}
                            
                                     
                                    />
                                    <InputGroup.Suffix className="pr-0 ">
                                      <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                      >
                                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                      </Button>
                                    </InputGroup.Suffix>
                                  </InputGroup>
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
                    <Button className="w-full  my-1" variant="tertiary" onClick={GoogleSignIn}>
                        <FaGoogle /> Continue with Google
                    </Button>
                    <p className="light-dark text-center pt-2">Don't have an account? <Link href={'/register'} className="primary font-semibold ">Register here</Link></p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;