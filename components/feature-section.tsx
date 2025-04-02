"use client"

import { motion } from "framer-motion"
import { Leaf, Package, Droplets } from "lucide-react"
import Image from "next/image"

interface FeatureProps {
  isInView: boolean
}

export default function FeatureSection({ isInView }: FeatureProps) {
  const features = [
    {
      id: "01",
      title: "Eco-friendly",
      description: "Sustainable materials and zero plastic waste for guilt-free travel.",
      icon: <Leaf size={24} />,
      color: "bg-green-100",
      textColor: "text-green-800",
      accentColor: "bg-green-600",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "02",
      title: "Compact",
      description: "Perfectly sized for carry-on luggage, saving valuable space in your travel bag.",
      icon: <Package size={24} />,
      color: "bg-amber-100",
      textColor: "text-amber-800",
      accentColor: "bg-amber-600",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "03",
      title: "Mess-free",
      description: "Our innovative case design prevents leaks and spills, keeping your luggage clean.",
      icon: <Droplets size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-800",
      accentColor: "bg-blue-600",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div>
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`relative overflow-hidden rounded-lg ${index === 1 ? "md:translate-y-8" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
            <div className={`${feature.color} flex justify-between items-start mb-4 p-6`}>
                <div>
                    <h4 className={`text-2xl font-bold mb-5 ${feature.textColor}`}>{feature.title}</h4>
                    <p className="text-gray-700">{feature.description}</p>
                </div>
                <span className={`text-7xl font-bold opacity-10 ml-4 whitespace-nowrap ${feature.textColor}`}>{feature.id}</span>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

