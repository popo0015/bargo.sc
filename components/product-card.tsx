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
    pattern: "circles" | "lines" | "waves"
  }
  index: number
}

export default function ProductCard({ product, index }: ProductProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  // Split the name to get the type (first word) and rest
  const nameParts = product.name.split(" ")
  const firstIngredient = nameParts[0]
  const secondIngredient = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ""

  // Create the combined name for display
  const displayName = `${firstIngredient} & ${secondIngredient}`

  return (
    <motion.div
      ref={cardRef}
      className={`rounded-lg overflow-hidden shadow-lg h-full ${product.color}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-6 flex flex-col h-full relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          {product.pattern === "circles" && (
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern id={`circles-${product.id}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="150" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="0" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#circles-${product.id})`} />
            </svg>
          )}

          {product.pattern === "lines" && (
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern
                id={`lines-${product.id}`}
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#lines-${product.id})`} />
            </svg>
          )}

          {product.pattern === "waves" && (
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern id={`waves-${product.id}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0,50 C20,40 30,60 50,50 C70,40 80,60 100,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M0,80 C20,70 30,90 50,80 C70,70 80,90 100,80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M0,20 C20,10 30,30 50,20 C70,10 80,30 100,20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#waves-${product.id})`} />
            </svg>
          )}
        </div>

        {/* Circular logo at top */}
        <div className="relative z-10 flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
            <div className="text-center">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Organic</div>
              <div className="text-lg font-bold text-gray-800">SOAP</div>
              <div className="text-xs font-medium text-gray-500">Organic</div>
            </div>

            {/* Circular text around logo */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <path id={`circle-text-${product.id}`} d="M50,10 A40,40 0 1,1 49.9,10" fill="none" stroke="none" />
              <text className="text-[8px]">
                <textPath href={`#circle-text-${product.id}`} startOffset="0%">
                  • ORGANIC • SOAP • ORGANIC • SOAP • ORGANIC • SOAP
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* White content area */}
        <div className="bg-white rounded-lg p-5 shadow-sm relative z-10">
          {/* Top text */}
          <div className="text-center text-gray-500 text-xs mb-2">Made with love / Made in Spain</div>

          <div className="border-t border-b border-gray-200 py-3 my-3">
            {/* Main title */}
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800 mb-1">SOAP</div>
              <div className="text-sm text-gray-600 mb-3">Organic</div>

              {/* Soap type */}
              <h3 className={`text-xl font-bold mb-2 ${product.textColor}`}>{displayName}</h3>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center text-gray-500 text-xs mt-2">Handmade / bargo.sc</div>

          {/* Triangle at bottom */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <svg width="20" height="10" viewBox="0 0 20 10">
              <polygon points="0,0 20,0 10,10" fill="white" />
            </svg>
          </div>
        </div>

        {/* Hidden description that shows on hover */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        >
          <div className="text-white text-center">
            <p className="mb-4">{product.description}</p>
            <motion.button
              className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

