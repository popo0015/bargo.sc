"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface ProductProps {
  product: {
    id: number
    name: string
    description: string
    color: string
    textColor: string
    soapColor: string
  }
  index: number
}

export default function ProductCardImproved({ product, index }: ProductProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className={`rounded-lg overflow-hidden shadow-lg h-full bg-white`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-6 flex flex-col h-full relative overflow-hidden">
        {/* Decorative corner */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 ${product.color} transform rotate-45 translate-x-10 -translate-y-10`}
        ></div>

        {/* Soap illustration */}
        <motion.div
          className="mb-6 flex justify-center"
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`w-32 h-32 ${product.soapColor} rounded-md shadow-lg relative transform -rotate-6`}>
            <div className="absolute inset-0 bg-white/20 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`font-bold text-lg ${product.textColor}`}>{product.name.split(" ")[0]}</span>
            </div>

            {/* Soap bubbles */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full opacity-80"
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full opacity-60"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <h3 className={`text-xl font-bold mb-2 ${product.textColor}`}>{product.name}</h3>
        <p className="text-bargo-text opacity-80 flex-grow">{product.description}</p>

        <div className="mt-4 flex justify-between items-center">
          <motion.button
            className={`px-4 py-2 rounded-full ${product.color} ${product.textColor} hover:shadow-md transition-all`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>

          <motion.div
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            whileHover={{ rotate: 180, backgroundColor: product.soapColor }}
            transition={{ duration: 0.3 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4V20M20 12H4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

