import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import banner from "../../public/assets/images/banner.jpg";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#3F76A6] to-primary-[#A0BED9] text-white py-24 md:py-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Simplify Your Work with Workflow Automation
          </h1>
          <p className="text-xl mb-8 text-white/80">
            Boost your team's productivity by eliminating repetitive manual
            tasks.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
          >
            Start Your Free Trial
          </Button>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={banner}
            alt="WorkflowPro Dashboard"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
