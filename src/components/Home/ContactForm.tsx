import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { signUpLead } from "@/api/auth";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

// 1. Defined free email providers to block
const freeEmailProviders = [
  // "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
];

// 2. Updated Zod Schema
const contactFormSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .refine(
      (email) => {
        const domain = email.split("@")[1];
        return !freeEmailProviders.includes(domain?.toLowerCase());
      },
      { message: "Please enter your official work email address" },
    ),
  mobile: z
    .string()
    .regex(
      /^\+?[1-9]\d{9,14}$/,
      "Please enter a valid phone number with country code",
    ),
  company_name: z.string().min(2, "Company name must be at least 2 characters"),
  number_of_employee: z
    .string()
    .min(1, "Please select the number of employees"),
  designation: z.string().min(2, "Designation must be at least 2 characters"),
  department: z.string().min(2, "Please select a department"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: signUpLead,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        navigate("/thank-you-for-request");
      } else {
        toast.error(data.error || "Failed to create account");
      }
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during signup");
    },
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      company_name: "",
      number_of_employee: "",
      designation: "",
      department: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const payload = {
      ...values,
      mobile: values.mobile.replace("+", ""),
    };
    mutate(payload);
  }

  return (
    <div className="min-h-screen py-10 flex justify-center items-center px-4 bg-slate-50">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Book A Demo
          </h1>
          <p className="text-slate-500 mt-2">
            Tell us about yourself and your company to get started.
          </p>
        </div>

        <Card className="w-full shadow-lg border-slate-200">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Row 1: Personal Name */}
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Jane" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Row 2: Contact Info */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Official Email ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jane.doe@company.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number (with Country Code)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. 919876543210"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Row 3: Company Basics */}
                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="number_of_employee"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number Of Employees</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-50">0 - 50</SelectItem>
                            <SelectItem value="51-200">51 - 200</SelectItem>
                            <SelectItem value="201-500">201 - 500</SelectItem>
                            <SelectItem value="501-1000">501 - 1000</SelectItem>
                            <SelectItem value="1001-5000">
                              1001 - 5000
                            </SelectItem>
                            <SelectItem value="5001-10000">
                              5001 - 10000
                            </SelectItem>
                            <SelectItem value="10000+">10000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Row 4: Role Basics */}
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Product Manager"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="HR">HR</SelectItem>
                            <SelectItem value="Sales">Sales</SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                            <SelectItem value="Admin / Operations">
                              Admin / Operations
                            </SelectItem>
                            <SelectItem value="C-Suite">C-Suite</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Footer Section: Full Width */}
                <div className="flex flex-col gap-6 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 text-center">
                    By clicking on ‘continue’ you agree to our{" "}
                    <Link to="/terms-and-conditions" className="text-primary hover:underline">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-1/2 mx-auto cursor-pointer"
                    disabled={isPending}
                  >
                    {isPending && (
                      <LoaderCircle className="animate-spin mr-2 h-5 w-5" />
                    )}
                    Continue
                  </Button>

                  <div className="text-center text-sm text-slate-600">
                    Already have an account?
                    <Link
                      to="/login"
                      className="font-semibold text-primary hover:underline ml-1"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
