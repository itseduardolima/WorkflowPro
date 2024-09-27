import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Zap, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
};

const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  const benefits: Benefit[] = [
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Reduce Manual Errors",
      description:
        "Automate repetitive tasks and minimize process failures, ensuring accuracy in your workflows.",
      details: [
        "Implement error-checking algorithms",
        "Standardize data input and output",
        "Automatic validation of processes",
        "Real-time error notifications",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Improve Productivity",
      description:
        "Let your team focus on high-impact, value-added tasks that drive business growth.",
      details: [
        "Automate routine tasks",
        "Streamline approval processes",
        "Centralize task management",
        "Provide performance analytics",
      ],
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Save Time",
      description:
        "With fewer manual tasks, workflows run faster, allowing you to accomplish more in less time.",
      details: [
        "Reduce task completion time",
        "Eliminate unnecessary steps",
        "Parallel process execution",
        "Automated reporting and analytics",
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Enhance Efficiency",
      description:
        "Streamline your processes and optimize resource allocation for maximum efficiency.",
      details: [
        "Optimize resource allocation",
        "Identify and eliminate bottlenecks",
        "Continuous process improvement",
        "Integration with existing tools",
      ],
    },
  ];

  return (
    <section
      id="benefits"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Benefits of WorkflowPro
        </motion.h2>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Experience the power of automation and see how WorkflowPro can
          transform your business operations.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-card p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                selectedBenefit === index ? "ring-2 ring-primary" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="mr-4 bg-gray-200 p-3 rounded-full"
                >
                  {benefit.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="w-full justify-between"
                onClick={() =>
                  setSelectedBenefit(selectedBenefit === index ? null : index)
                }
              >
                Learn More{" "}
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    selectedBenefit === index ? "rotate-90" : ""
                  }`}
                />
              </Button>
              <AnimatePresence>
                {selectedBenefit === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2"
                  >
                    {benefit.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                        className="flex items-center"
                      >
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" asChild>
            <a href="#pricing">Start Benefiting Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
