'use client'
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import CowImg from "@/app/assets/form.jpg"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";


const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm();

    const GoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
 
};

    const handleOnSubmit = async (data) => {

        const { data: res, error } = await authClient.signUp.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            image: data.photo,
            callbackURL: "/login",
        });
        if (!error) {
            alert('Sign in successful go to the home page')
        } else {
            alert(error.message)
        }
    
        console.log(res, error);
    }
    return (
        <div className="w-7/10 mx-auto md:grid md:grid-cols-2 items-center my-15 bg-white shadow rounded-3xl max-sm:w-9/10">
            <div className="max-sm:hidden">
                <Image src={CowImg} alt="cool cow" height={750} width={450} className="rounded-l-3xl"></Image>
            </div>

            <div className="p-10 bg-white rounded-3xl">
                <Form className="w-full" onSubmit={handleSubmit(handleOnSubmit)} >
                    <Fieldset>
                        <Fieldset.Legend className="text-3xl dark font-bold pb-2">Register for a Blessed Qurbani Experience</Fieldset.Legend>
                        <Description className="light-dark">
                            Find the perfect animal for your sacrifice from the comfort of your home.
                        </Description>
                        <FieldGroup>
                            <TextField isRequired name="name" type="text">
                                <Label className="font-semibold text-sm dark">Full Name</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Name" {...register("name")} />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label className="font-semibold text-sm dark">Email Address</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your Email" {...register("email")} />
                                <FieldError />
                            </TextField>
                            <TextField  name="photo" type="text">
                                <Label className="font-semibold text-sm dark">Photo URL(Optional)</Label>
                                <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Photo of Yourself" {...register("photo")} />
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
                <Button className="w-full  my-1" variant="tertiary" onClick={GoogleSignIn}>
                    <FaGoogle /> Sign in with Google
                </Button>
                <p className="light-dark text-center">Already have an account? <Link href={'/login'} className="primary font-semibold ">Login here</Link></p>

            </div>
        </div>
    );
};

export default RegisterPage;