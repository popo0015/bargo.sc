"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  index: number
}

export default function FeatureSketch({ title, description, icon, color, index }: FeatureProps) {
  return (
    <motion.div
      className="bg-cream-50 border border-brown-200 p-6 rounded-sm relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(121, 85, 72, 0.1)" }}
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
            stroke={color}
            strokeWidth="1"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center relative`}
          style={{ backgroundColor: `${color}30` }}
        >
          {/* Hand-drawn circle */}
          <svg width="100%" height="100%" className="absolute inset-0">
            <circle cx="50%" cy="50%" r="30" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
          </svg>

          <div className="text-brown-800">{icon}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-handwritten text-center mb-2" style={{ color }}>
        {title}
      </h3>

      {/* Hand-drawn underline */}
      <div className="flex justify-center mb-3">
        <svg width="80" height="6">
          <path d="M0,3 C20,0 40,6 80,3" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Description */}
      <p className="text-brown-700 text-center">{description}</p>
    </motion.div>
  )
}

