"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { ArrowRightIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  function onSubmit(values) {
    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (data?.id) {
          toast({
            title: "Message sent",
            description: "Thank you for your message!",
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  }

  return (
    <div className="glass-card p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-800">
          Send me a message
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-neutral-600">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4 lg:space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs sm:text-sm lg:text-base font-medium text-neutral-700">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    {...field}
                    className="h-9 sm:h-10 lg:h-12 text-xs sm:text-sm lg:text-base border-neutral-200 focus:border-violet-400 focus:ring-violet-400/20 rounded-md sm:rounded-lg lg:rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs sm:text-sm lg:text-base font-medium text-neutral-700">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    {...field}
                    className="h-9 sm:h-10 lg:h-12 text-xs sm:text-sm lg:text-base border-neutral-200 focus:border-violet-400 focus:ring-violet-400/20 rounded-md sm:rounded-lg lg:rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs sm:text-sm lg:text-base font-medium text-neutral-700">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] text-xs sm:text-sm lg:text-base border-neutral-200 focus:border-violet-400 focus:ring-violet-400/20 rounded-md sm:rounded-lg lg:rounded-xl resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white h-9 sm:h-10 lg:h-12 text-xs sm:text-sm lg:text-base font-semibold rounded-md sm:rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
