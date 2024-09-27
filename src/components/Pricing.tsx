import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

type Plan = {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans: Plan[] = [
    {
      name: "Basic",
      monthlyPrice: "$19",
      yearlyPrice: "$190",
      description: "For small teams",
      features: [
        "Up to 5 users",
        "10 workflows",
        "Basic integrations",
        "Email support",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: "$49",
      yearlyPrice: "$490",
      description: "For growing businesses",
      features: [
        "Up to 20 users",
        "Unlimited workflows",
        "Advanced integrations",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "For large teams",
      features: [
        "Unlimited users",
        "Unlimited workflows",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#f4f4f5] border-b ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Plans and Pricing
        </motion.h2>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Choose the perfect plan for your business
        </motion.p>

        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span
            className={`mr-2 ${
              isYearly ? "text-muted-foreground" : "font-semibold"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle between monthly and yearly prices"
          />
          <span
            className={`ml-2 ${
              isYearly ? "font-semibold" : "text-muted-foreground"
            }`}
          >
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 text-sm text-green-500 font-medium">
              Save 20%
            </span>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg ${
                plan.popular
                  ? "border-2 border-primary ring-2 ring-primary ring-opacity-50"
                  : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="text-primary text-sm font-semibold mb-4 bg-primary/10 py-1 px-3 rounded-full inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-4">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                {plan.name !== "Enterprise" && (
                  <span className="text-lg font-normal text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                )}
              </div>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
