"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send, CheckCircle, Rocket, Zap, Coffee } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validation function
  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = "This field is required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Invalid email address";
    }
    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field live
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.message &&
    formData.name &&
    formData.email &&
    formData.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation before submission
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return; // Stop submission if errors
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Optional: auto-hide success after 10s
        setTimeout(() => setIsSubmitted(false), 10000);
      } else {
        alert(result.error || "Something went wrong. Please try again!");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500">
        <CardContent className="p-8 text-center animate-fade-in-up">
          <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold mb-2 gradient-text">
            Message Launched! 🚀
          </h3>
          <p className="text-muted-foreground mb-4">
            Thanks for reaching out. I'll get back to you within 24 hours!
          </p>
          <div className="flex justify-center gap-2 text-sm text-muted-foreground">
            <Coffee className="w-4 h-4" />
            <span>
              Meanwhile, I'll grab some coffee and review your message
            </span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-primary" />
          Send Message
        </CardTitle>
        <CardDescription>
          Ready to launch your project? Fill out the form below and let's make
          something amazing together!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              Name
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your awesome name"
              required
              className="glass hover:border-primary/40 transition-all duration-300 focus:scale-105"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              Email
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@awesome.com"
              required
              className="glass hover:border-primary/40 transition-all duration-300 focus:scale-105"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              Project Details
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your amazing project idea... What are you looking to build? What's your timeline? Any specific requirements?"
              rows={6}
              required
              className="glass resize-none hover:border-primary/40 transition-all duration-300 focus:scale-105"
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full glass hover:bg-primary/10 transition-all duration-300 bg-transparent"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Quick Project Info
                </Button>
              </DialogTrigger>
              <DialogContent className="glass border-primary/20 max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-primary">
                    <Rocket className="w-5 h-5" />
                    Let's Build Something Amazing!
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="space-y-3">
                      <p>I specialize in:</p>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>React & Next.js applications</li>
                        <li>Full-stack web development (MERN stack)</li>
                        <li>Interactive dashboards & landing pages</li>
                        <li>Custom web applications</li>
                        <li>API integrations</li>
                        <li>Performance optimization</li>
                      </ul>
                      <p className="text-xs text-muted-foreground">
                        💡 Typical project turnaround: 1-4 weeks depending on
                        complexity
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button
              type="submit"
              className="w-full animate-glow group hover:scale-105 transition-all duration-300"
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Launching Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Launch Message to Space 🚀
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
