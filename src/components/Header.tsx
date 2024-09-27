import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Mountain, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="bg-white py-4 top-0  shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Mountain className="h-8 w-8 text-primary mr-2" />
          <span className="text-2xl font-bold">WorkflowPro</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#benefits"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <Button className="hidden md:inline-flex" variant="secondary">
          Try It Free
        </Button>
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white h-72 z-40 md:hidden"
          >
            <div className="container  px-4 pt-8 flex flex-col justify-center">
              <nav>
                <ul className="space-y-4">
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="#features"
                      className="text-xl block py-1"
                      onClick={toggleMenu}
                    >
                      Features
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="#benefits"
                      className="text-xl block py-1"
                      onClick={toggleMenu}
                    >
                      Benefits
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="#pricing"
                      className="text-xl block py-1"
                      onClick={toggleMenu}
                    >
                      Pricing
                    </Link>
                  </motion.li>
                </ul>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  className="mt-8"
                  variant="secondary"
                  size="lg"
                  onClick={toggleMenu}
                >
                  Try It Free
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
