import React from "react";
import DotGrid from "../ui/DotGrid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* DotGrid background */}
      <div className="absolute inset-0">
        <DotGrid
         dotSize={5}
            gap={15}
            baseColor="rgba(82, 39, 255, 0.2)"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
        />
      </div>

                {/* Hero content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Heading */}
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-50 mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Code Your Way to React Expertise.
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
                Stop watching passive videos. Our in-browser, interactive sandboxes let you write, debug, and ship real React components today.
            </motion.p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Primary CTA */}
            <Link to ="/dashboard"><motion.button
                className="px-8 py-4 text-lg font-medium rounded-full shadow-lg 
                        bg-purple-900 text-black cursor-pointer hover:bg-purple-400 focus:ring-4 focus:ring-purple-900 transition duration-300 w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Start Learning
            </motion.button> </Link>

            {/* Secondary CTA */}
            <motion.a
                href="#courses"
                className="px-8 py-4 text-lg font-medium rounded-full shadow-lg 
                        bg-transparent border-2 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-gray-50 transition duration-300 w-auto"
                whileHover={{ scale: 1.05 }}
            >
                See All Courses
            </motion.a>
            </div>

            </div>

    </section>
  );
}