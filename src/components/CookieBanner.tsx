"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50 border-t border-gray-800"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-base text-gray-300">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <button onClick={accept} className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold whitespace-nowrap hover:bg-gray-100 transition-colors shadow-md">
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
