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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const freeEmailProviders = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
];

const employeeRanges = [
  "0-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5001-10000",
  "10000+",
] as const;

const departments = [
  "HR",
  "Sales",
  "Marketing",
  "Admin / Operations",
  "C-Suite",
  "Others",
] as const;

const referralSources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Event / Conference",
  "Existing Customer / Partner",
  "Other",
] as const;

const demoFormSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(255),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(255),
  email: z
    .string()
    .email("Invalid email address")
    .max(255)
    .refine(
      (email) => {
        const domain = email.split("@")[1];
        return !freeEmailProviders.includes(domain?.toLowerCase() ?? "");
      },
      { message: "Please enter your official work email address" },
    ),
  company_name: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(255),
  mobile: z.string().max(20).optional().or(z.literal("")),
  department: z.string().min(1, "Please select a department").max(255),
  designation: z
    .string()
    .min(2, "Designation must be at least 2 characters")
    .max(255),
  number_of_employee: z
    .string()
    .min(1, "Please select the number of employees"),
  how_did_you_hear_about_us: z
    .string()
    .min(1, "Please tell us how you heard about us")
    .max(255),
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
        toast.error(data.error || "Failed to submit your demo request.");
      }
    },
    onError: (error) => {
      toast.error(
        error.message || "An error occurred submitting the demo request.",
      );
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
      department: "",
      designation: "",
      number_of_employee: "",
      how_did_you_hear_about_us: "",
      message: "",
    },
  });

  function onSubmit(values: DemoFormValues) {
    const payload = { ...values };
    if (payload.mobile) {
      payload.mobile = payload.mobile.replace(/^\+/, "");
    }
    mutate(payload);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Book A Demo
          </h1>
          <p className="mt-2 text-slate-500">
            See how our platform can help your company.
          </p>
        </div>

        <Card className="w-full border-slate-200 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Official Email ID</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jane.doe@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
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
                        <FormLabel>Mobile Number (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="e.g. 919876543210"
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
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {departments.map((department) => (
                              <SelectItem key={department} value={department}>
                                {department}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                    name="number_of_employee"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {employeeRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range === "10000+" ? "10,000+" : range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="how_did_you_hear_about_us"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>How did you hear about us?</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {referralSources.map((source) => (
                              <SelectItem key={source} value={source}>
                                {source}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message / Requirements (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you're looking for..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-6 border-t border-slate-100 pt-4">
                  <p className="text-center text-sm text-slate-500">
                    By continuing you agree to our{" "}
                    <Link
                      to="/terms-and-conditions"
                      className="text-primary hover:underline"
                    >
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
                    className="mx-auto w-full md:w-1/2"
                    disabled={isPending}
                  >
                    {isPending && (
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                    )}
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
