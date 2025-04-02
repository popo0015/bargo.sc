"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HandDrawnHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cream-50 opacity-50">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#C9A9A6" />
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-brown-800 mb-4 leading-tight">
              <span className="font-handwritten text-5xl md:text-7xl text-olive-600 block mb-2">Travel Clean</span>
              with Bargo.sc
            </h1>

            <p className="text-xl text-brown-600 mb-8 max-w-lg">
              Handcrafted travel soaps made with{" "}
              <span className="font-handwritten text-2xl text-honey-500">natural ingredients</span> for your journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-olive-600 text-cream-50 rounded-md font-handwritten text-xl"
              >
                Explore Our Soaps
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-brown-800 text-brown-800 rounded-md font-handwritten text-xl"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/images/elements/soap-sketch.png"
                alt="Organic soap ingredients illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Animated elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-16 h-16"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z"
                  fill="none"
                  stroke="#C9A9A6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-20 h-20"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M20,20 L80,20 L80,80 L20,80 Z"
                  fill="none"
                  stroke="#A9BEA5"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="#4A4A4A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

