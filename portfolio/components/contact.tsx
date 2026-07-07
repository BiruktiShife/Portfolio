"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const info = [
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    sub: "Available for remote work worldwide",
  },
  {
    icon: Mail,
    label: "Email",
    value: "biruktawitshiferaw522@gmail.com",
    sub: "I'll respond within 24 hours",
    href: "mailto:biruktawitshiferaw522@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 933 031 633",
    sub: "Available Mon–Fri, 9AM–6PM EAT",
    href: "tel:+251933031633",
  },
];

// Sends the form straight to your inbox via formsubmit.co — no backend needed.
// The first submission from a new address needs a one-time confirmation click
// (formsubmit.co emails you a link) before messages start arriving normally.
const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/biruktawitshiferaw522@gmail.com";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactValues) {
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: "New Portfolio Contact Message",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent",
        description: "Thanks! I'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      console.error("Contact form submit error:", error);
      toast({
        title: "Send failed",
        description:
          "Sorry, your message could not be sent right now. Please try again or email me directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl">
          <p className="font-mono text-sm text-accent">04 · contact</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hiring, or have a project in mind? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {info.map((item) => (
              <Card key={item.label}>
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block font-medium hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium">{item.value}</p>
                    )}
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.sub}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/biruktawit-shiferaw/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/BiruktiShife"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 space-y-1.5">
                <h3 className="font-display text-xl font-medium">
                  Send me a message
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Abebe Kebede" {...field} />
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
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                            />
                          </FormControl>
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about the role or project…"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
