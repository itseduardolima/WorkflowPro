import React from "react";
import { motion } from "framer-motion";
import { Sliders, Zap, ChevronRight } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Features = () => {
  const features: Feature[] = [
    {
      icon: <Sliders className="h-10 w-10 text-primary" />,
      title: "Drag and Drop",
      description: "Create workflows in minutes with our intuitive interface.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Task Automation",
      description:
        "Let the software do the heavy lifting and eliminate repetitive tasks.",
    },
    {
      icon: <ChevronRight className="h-10 w-10 text-primary" />,
      title: "Easy Integrations",
      description:
        "Connect your favorite apps easily and expand your possibilities.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#f4f4f5]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
