import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface BookingFormProps {
  tourId: string;
  tourTitle: string;
  basePrice: number;
  maxGroupSize: number;
}

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  date: z.date({ required_error: "Please select a date" }),
  people: z.number().min(1).max(20),
  specialRequests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingForm({ tourId, tourTitle, basePrice, maxGroupSize }: BookingFormProps) {
  const [people, setPeople] = useState(2);
  const today = new Date();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      people: 2,
      specialRequests: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Booking submitted:", { ...data, tourId, tourTitle });
    
    // Here you would typically send this data to your backend
    // For now we'll simulate success with a toast
    toast.success("Booking submitted! We'll contact you shortly.", {
      description: `Your booking for ${tourTitle} has been received.`,
      duration: 5000,
    });
    
    // Reset form
    form.reset();
    setPeople(2);
  };

  const decreasePeople = () => {
    if (people > 1) {
      const newValue = people - 1;
      setPeople(newValue);
      form.setValue("people", newValue);
    }
  };

  const increasePeople = () => {
    if (people < maxGroupSize) {
      const newValue = people + 1;
      setPeople(newValue);
      form.setValue("people", newValue);
    }
  };
  
  // Calculate total price
  const totalPrice = basePrice * people;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book This Tour</CardTitle>
        <CardDescription>
          Fill in the details to book your spot on {tourTitle}.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+995" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tour Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < today}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="people"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of People</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        onClick={decreasePeople}
                        disabled={people <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{people}</span>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon" 
                        onClick={increasePeople}
                        disabled={people >= maxGroupSize}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </FormControl>
                  <p className="text-sm text-muted-foreground">
                    Maximum group size: {maxGroupSize}
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Dietary restrictions, accessibility needs, etc." 
                      className="resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="bg-muted p-4 rounded-lg mt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Base price:</span>
                <span>${basePrice} per person</span>
              </div>
              <div className="flex justify-between items-center font-medium">
                <span className="text-sm">Total price:</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter>
            <Button type="submit" className="w-full">
              Book Now
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
