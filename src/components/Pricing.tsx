import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/mock/plans";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Flexible Pricing for Every Business
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Choose the perfect plan to streamline your workflows
        </motion.p>

        <div className="flex items-center justify-center mb-12">
          <span
            className={`mr-2 ${isYearly ? "text-gray-600" : "font-semibold"}`}
          >
            Monthly
          </span>
          <Button
            variant="outline"
            size="sm"
            className={`relative ${
              isYearly
                ? "bg-gradient-to-r from-blue-100 to-purple-100"
                : "bg-gray-200"
            } w-16 h-8 rounded-full transition-colors`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <motion.div
              className="absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-sm"
              animate={{ x: isYearly ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </Button>
          <span
            className={`ml-2 ${isYearly ? "font-semibold" : "text-gray-600"}`}
          >
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 text-sm text-green-500 font-medium">
              Save 20%
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg ${
                plan.popular
                  ? "border-2 border-blue-600 ring-2 ring-blue-600 ring-opacity-50"
                  : "border border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="text-blue-600 text-sm font-semibold mb-4 bg-gradient-to-r from-blue-100 to-purple-100 py-1 px-3 rounded-full inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                {plan.name !== "Enterprise" && (
                  <span className="text-lg font-normal text-gray-600">
                    /{isYearly ? "year" : "month"}
                  </span>
                )}
              </div>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, feature_index) => (
                  <li key={feature_index} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
