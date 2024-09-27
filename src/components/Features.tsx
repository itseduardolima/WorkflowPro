import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sliders, Zap, ChevronRight, ArrowRight, Workflow, Puzzle, Gauge, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}


const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  const features: Feature[] = [
    {
      icon: <Sliders className="h-10 w-10 text-primary" />,
      title: "Drag and Drop Interface",
      description: "Create workflows in minutes with our intuitive interface.",
      details: [
        "No coding required",
        "Visual workflow builder",
        "Pre-built templates",
        "Real-time collaboration"
      ]
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Task Automation",
      description: "Let the software do the heavy lifting and eliminate repetitive tasks.",
      details: [
        "Automate routine processes",
        "Reduce manual errors",
        "Increase productivity",
        "Custom automation rules"
      ]
    },
    {
      icon: <Puzzle className="h-10 w-10 text-primary" />,
      title: "Easy Integrations",
      description: "Connect your favorite apps easily and expand your possibilities.",
      details: [
        "200+ app integrations",
        "API access",
        "Custom webhook support",
        "Zapier compatibility"
      ]
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: "Advanced Workflows",
      description: "Build complex workflows to handle any business process.",
      details: [
        "Conditional logic",
        "Parallel processing",
        "Error handling",
        "Version control"
      ]
    },
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: "Performance Analytics",
      description: "Gain insights into your workflows and optimize for efficiency.",
      details: [
        "Real-time monitoring",
        "Custom dashboards",
        "Bottleneck identification",
        "Trend analysis"
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with built-in collaboration tools.",
      details: [
        "Role-based access control",
        "Task assignment",
        "Comment threads",
        "Activity logs"
      ]
    }
  ]

  return (
    <section id="features" className="py-24 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Discover how WorkflowPro can transform your business processes with our powerful features
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-4 bg-gray-200  p-3 rounded-full inline-block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button
                    variant="ghost"
                    className="group"
                    onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <AnimatePresence>
                    {selectedFeature === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-2"
                      >
                        {feature.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                            className="flex items-center"
                          >
                            <ChevronRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" asChild>
            <a href="#pricing">Explore Our Plans</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features