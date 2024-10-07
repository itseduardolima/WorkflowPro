import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
  { name: "Pricing", href: "#pricing" },
  {
    name: "Resources",
    href: "#",
    subItems: ["Documentation", "API", "Support"],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center"
          >
            <Mountain className="h-8 w-8 mr-2 text-blue-600" />
            WorkflowPro
          </Link>
          <nav className="hidden lg:flex space-x-1 items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.subItems ? (
                  <>
                    <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center px-4 py-2 rounded-md group">
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-colors first:rounded-t-md last:rounded-b-md"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
            >
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Try It Free
            </Button>
          </div>
          <button
            className="lg:hidden z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed bg-white w-full z-40 lg:hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col h-full justify-center">
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.subItems ? (
                      <div className="space-y-2">
                        <Link
                          href="#"
                          className="text-xl text-gray-800"
                        >
                          {item.name}
                        </Link>
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href="#"
                            className="block text-xl text-gray-800 hover:text-blue-600 transition-colors py-1"
                            onClick={toggleMenu}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-xl block text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="mt-8 space-y-4"
              >
                <Button
                  variant="outline"
                  className="w-full text-blue-600 border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                >
                  Log In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Try It Free
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
