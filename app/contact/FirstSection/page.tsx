"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";


const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  area: z.enum(["Orlando", "Kissimmee", "Miami", "Tampa", "Jacksonville", "Fort Lauderdale"]),
  cleaning_type: z.enum(["Residential", "Commercial"]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  area: "Orlando" | "Kissimmee"| "Miami" | "Tampa" | "Jacksonville" | "Fort Lauderdale";
  cleaning_type: "Residential" | "Commercial";
  info: string;
};



export default function FirstSection() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();


  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      area: "Orlando",
      cleaning_type: "Residential",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
        setLoading(true);
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
    
        setSubmitted(true);
   
    }
    catch (err) {
        console.error(err);
        toast({
            title: "Error",
            description: 'Something went wrong',

        })
    }
    finally {
        setLoading(false);
    }
}


    

  return (
    <div className=" pt-[80px] items-center justify-center flex flex-col px-20 m:px-0 py-20 space-y-10 text-center bg-white ">
        {!submitted ? (
            <div className="text-5xl ">
              <div className="text-3xl sm:text-5xl ">Contact Us for Expert Cleaning Solutions</div>

            <div className="text-lg pt-5 sm:text-xl sm:pt-4">
            Complete the Form Below for a Prompt Resco Sales Representative Follow-Up
            </div>

            </div>
        ) : (
          
          <div className="text-3xl text-green-400 pt-20 ">Thank you for contacting us. We will be in contact with you shortly.</div>
                
        )}


      <Form {...form}>
        {!submitted ? (
        

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          

          className="md:w-2/3 md:space-y-6 border p-8 rounded-xl "

        >
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="text-xl w-60 sm:text-2xl pt-4">First Name</FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="text-xl w-60 sm:text-2xl pt-4">Last Name</FormLabel>
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 ">
                <FormLabel className="text-xl w-60 sm:text-2xl pt-4">Email</FormLabel>
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="text-xl w-60 sm:text-2xl pt-4">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input className="" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-4 w-full">
                 <FormLabel className="text-xl w-60 sm:text-2xl pt-4">Location</FormLabel>
                <Select
                
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service area" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="Orlando (Orange/Osceola/Seminole/Polk/Lake)">Orlando</SelectItem>
                    </div>
                    <SelectItem value="Kissimmee">Kissimmee</SelectItem>
                    <SelectItem value="Miami">
                      Miami
                    </SelectItem>
                    <SelectItem value="Tampa">
                      Tampa
                    </SelectItem>
                    <SelectItem value="Jacksonville">
                      Jacksonville
                    </SelectItem>
                    <SelectItem value="Fort Lauderdale">
                      Fort Lauderdale
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />



        <FormField
         control={form.control}
            name="cleaning_type" 
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-5 w-full">
                 <FormLabel className="text-xl w-60 sm:text-2xl pt-4">Cleaning Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="What cleaning service do you require?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="Residential">
                        Residential
                      </SelectItem>
                    </div>
                    <SelectItem value="Commercial">
                        Commercial
                    </SelectItem>
                  </SelectContent>
                </Select>
    

                <FormMessage />
              </FormItem>
            )}
            />

<FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="text-xl w-60 sm:text-2xl pt-4">
                 Information
                </FormLabel>
                <FormControl>
                  <Textarea
                  style={{height: "200px"}}
                  className="" placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

             <div className="pt-10 md:gap-4 flex items-center justify-center">
            <Button
                
                type="submit"
                className="bg-[#000] text-xl rounded-sm w-80 h-20 "
           
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                Submit
              </Button>

            </div>

          </form>
          ) : (
            <div className="text-2xl h-screen text-green-400 items-center space-y-20 flex flex-col ">
           
                <div className="">
              
                    <img src="/images/icons/check.webp" className="h-28 w-28" />
            
                    </div>
            
            </div>

        )}
        

      </Form>
    </div>
  );
}