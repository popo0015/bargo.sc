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
    ingredients: string[]
  }
  index: number
}

export default function ProductCardSketch({ product, index }: ProductProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  // Split the name to get the type (first word)
  const [type, ...rest] = product.name.split(" ")
  const restOfName = rest.join(" ")

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-cream-50 border border-brown-200 rounded-sm overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(121, 85, 72, 0.1)" }}
    >
      {/* Hand-drawn border */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <rect
            x="3"
            y="3"
            width="calc(100% - 6px)"
            height="calc(100% - 6px)"
            rx="2"
            fill="none"
            stroke={product.color.replace("bg-", "")}
            strokeWidth="1"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      <div className="p-6 flex flex-col h-full relative">
        {/* Product name with handwritten style */}
        <div className="mb-6 text-center">
          <h3 className={`text-2xl mb-1 ${product.textColor}`}>
            <span className="font-handwritten text-3xl block">{type}</span>
            <span className="font-serif">{restOfName}</span>
          </h3>

          {/* Hand-drawn underline */}
          <svg width="120" height="10" className="mx-auto">
            <path
              d="M0,5 C30,0 60,10 120,5"
              stroke={product.color.replace("bg-", "")}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Soap illustration - hand-drawn style */}
        <div className="mb-6 flex justify-center">
          <div className={`w-32 h-32 ${product.color} rounded-sm relative transform rotate-3`}>
            <div className="absolute inset-0 bg-white/20 rounded-sm"></div>

            {/* Hand-drawn soap texture */}
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern
                id={`soap-pattern-${product.id}`}
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#soap-pattern-${product.id})`} />
            </svg>

            {/* Hand-drawn soap label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`font-handwritten text-2xl ${product.textColor}`}>{type.charAt(0)}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-brown-700 flex-grow text-center">{product.description}</p>

        {/* Ingredients list */}
        <div className="mt-4 mb-4">
          <h4 className="text-brown-800 font-handwritten text-lg mb-2 text-center">Natural Ingredients</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {product.ingredients.map((ingredient, i) => (
              <span
                key={i}
                className={`inline-block px-2 py-1 text-xs ${product.color.replace("bg-", "bg-").replace("100", "50")} ${product.textColor} rounded-full font-handwritten`}
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.button
          className={`mt-4 w-full py-2 border border-brown-800 ${product.textColor} hover:${product.color} transition-colors rounded-sm font-handwritten text-lg`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

