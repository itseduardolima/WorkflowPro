import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FAQ = {
  question: string;
  answer: string;
  category: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const faqs: FAQ[] = [
    {
      question: "How does the trial period work?",
      answer:
        "We offer a 14-day free trial with no credit card required. During this period, you'll have access to all Pro plan features. You can explore our platform, create workflows, and test integrations to see how WorkflowPro can benefit your business. If you decide to continue after the trial, you can easily upgrade to a paid plan.",
      category: "Pricing",
    },
    {
      question: "What integrations do you offer?",
      answer:
        "WorkflowPro integrates with a wide range of popular tools and platforms. Some of our key integrations include Slack, Google Workspace, Microsoft 365, Trello, Asana, Jira, Salesforce, and Zapier. We're constantly adding new integrations based on customer feedback and market demands. If you need a specific integration, feel free to reach out to our support team.",
      category: "Features",
    },
    {
      question: "How can I customize my workflows?",
      answer:
        "Our intuitive drag-and-drop interface allows you to easily create custom workflows. You can add conditions, loops, and custom actions to meet your specific business needs. Start by selecting from our pre-built templates or create a workflow from scratch. You can also use our API to create more complex, code-based workflows for advanced users.",
      category: "Usage",
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "Yes, you can cancel your subscription at any time without any additional fees. Simply access your account settings and select the cancellation option. Your service will continue until the end of your current billing period. We don't offer refunds for partial months, but you'll retain access to all features until your subscription ends.",
      category: "Pricing",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "We provide 24/7 chat and email support for all our users. Our knowledgeable support team is always ready to assist you with any questions or issues you may encounter. For Enterprise plan customers, we also offer dedicated account managers and priority phone support to ensure you get the most out of our platform.",
      category: "Support",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((faq) => faq.category))),
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      (activeCategory === "All" || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "secondary" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        {filteredFAQs.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No FAQs found. Please try a different search term or category.
          </p>
        )}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">Can't find the answer you're looking for?</p>
          <Button size="lg" asChild>
            <a href="#contact">Contact Our Support Team</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
