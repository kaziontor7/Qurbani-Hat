"use client"

import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField, Toast, toast } from "@heroui/react";
import { FaCalendarCheck } from "react-icons/fa";


const BookingForm = () => {
    
    const handle = (e) => {
        e.preventDefault();
        toast.success("Booking Successful!", {
              actionProps: {
                children: "Contact",
                className: "bg-success text-success-foreground text-white",
              },
              description: "Your reservation request has been received. we will contact you shortly",
            })

        e.currentTarget.reset();
    };

    return (
        <div>
            <Toast.Provider />
            <Form className="w-full" onSubmit={handle}>
                <Fieldset>
                    <Fieldset.Legend className="font-semibold text-2xl">Request Booking</Fieldset.Legend>
                    <Description className="light-dark text-lg">
                        Secure this animal by placing a reservation request.
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
                        <TextField isRequired name="phone" type="text">
                            <Label className="font-semibold text-sm dark">Phone Number</Label>
                            <Input className="bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Your phone number" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="address">
                            <Label className="font-semibold text-sm dark">Delivery/ Pickup Address</Label>
                            <TextArea className="h-20 bg-[#BEC9C2]/20 placeholder:text-[#6B7280]" placeholder="Enter full address or notes..." />
                            <FieldError />
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit" className="bg-[#004532]" fullWidth>
                            <FaCalendarCheck /> Submit Booking Request
                        </Button>
                    </Fieldset.Actions>
                    <p className="text-sm text-center light-dark">No payment required until request is approved.</p>
                </Fieldset>
            </Form>
        </div>
    );
};

export default BookingForm;