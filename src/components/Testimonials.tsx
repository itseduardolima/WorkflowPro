import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import person1 from "../../public/assets/images/john-smith.jpg";
import person2 from "../../public/assets/images/sarah-johnson.jpg";
import person3 from "../../public/assets/images/michael-chen.jpg";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: StaticImageData;
  rating: number;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "WorkflowPro has revolutionized our operations. We've managed to automate 80% of our budget approvals, saving countless hours and reducing errors significantly.",
      author: "John Smith",
      role: "Operations Manager",
      company: "Tech Solutions Ltd.",
      avatar: person1,
      rating: 5,
    },
    {
      quote:
        "The ease of creating custom workflows allowed us to quickly adapt our internal processes. The ROI we've seen is phenomenal. I highly recommend WorkflowPro!",
      author: "Sarah Johnson",
      role: "HR Director",
      company: "Innovation Enterprise Inc.",
      avatar: person2,
      rating: 5,
    },
    {
      quote:
        "As a small business owner, WorkflowPro has been a game-changer. It's like having an extra team member handling all our repetitive tasks.",
      author: "Michael Chen",
      role: "CEO",
      company: "Nimble Startups",
      avatar: person3,
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-[#f4f4f5]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-lg mb-4 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="lg" asChild>
            <a href="#pricing">Join Our Happy Customers</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;