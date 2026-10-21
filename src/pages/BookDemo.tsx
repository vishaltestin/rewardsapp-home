import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { bookDemoRequest } from "@/api/auth";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const freeEmailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "protonmail.com"];

const demoFormSchema = z.object({
    first_name: z.string().min(2, "First name must be at least 2 characters").max(255),
    last_name: z.string().min(2, "Last name must be at least 2 characters").max(255),
    email: z.string().email("Invalid email address").max(255).refine(
        (email) => {
            const domain = email.split("@")[1];
            return !freeEmailProviders.includes(domain?.toLowerCase());
        },
        { message: "Please enter your official work email address" },
    ),
    company_name: z.string().min(2, "Company name must be at least 2 characters").max(255),
    mobile: z.string().max(20).optional().or(z.literal('')),
    message: z.string().max(1000).optional(),
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;

const BookDemo = () => {
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: bookDemoRequest,
        onSuccess: (data) => {
            if (data.success) {
                toast.success(data.message);
                navigate("/thank-you-for-request");
            } else {
                toast.error(data.error);
            }
        },
        onError: (error) => {
            toast.error(error.message || "An error occurred submitting the demo request");
        },
    });

    const form = useForm<DemoFormValues>({
        resolver: zodResolver(demoFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            company_name: "",
            mobile: "",
            message: "",
        },
    });

    function onSubmit(values: DemoFormValues) {
        const payload = { ...values };
        if (payload.mobile) {
            payload.mobile = payload.mobile.replace("+", "");
        }
        mutate(payload);
    }

    return (
        <div className="min-h-screen py-10 flex justify-center items-center px-4 bg-slate-50">
            <div className="w-full max-w-4xl flex flex-col items-center gap-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Book A Demo</h1>
                    <p className="text-slate-500 mt-2">See how our platform can help your company.</p>
                </div>

                <Card className="w-full shadow-lg border-slate-200">
                    <CardContent className="p-6 md:p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl><Input placeholder="e.g. Jane" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Last Name */}
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl><Input placeholder="e.g. Doe" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Email */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Official Email ID</FormLabel>
                                                <FormControl><Input placeholder="jane.doe@company.com" type="email" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Company Name */}
                                    <FormField
                                        control={form.control}
                                        name="company_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company Name</FormLabel>
                                                <FormControl><Input placeholder="Enter Company Name" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Mobile (Nullable in Backend) */}
                                    <FormField
                                        control={form.control}
                                        name="mobile"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mobile Number (Optional)</FormLabel>
                                                <FormControl><Input placeholder="e.g. 919876543210" type="tel" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Message Box spanning full width */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message / Requirements (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Tell us what you're looking for..." rows={4} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-col gap-6 pt-4 border-t border-slate-100">
                                    <p className="text-sm text-slate-500 text-center">
                                        By continuing you agree to our <Link to="/terms-and-conditions" className="text-primary hover:underline">Terms of Use</Link> and <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                                    </p>
                                    <Button type="submit" size="lg" className="w-full md:w-1/2 mx-auto cursor-pointer" disabled={isPending}>
                                        {isPending && <LoaderCircle className="animate-spin mr-2 h-5 w-5" />}
                                        Request Demo
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BookDemo;