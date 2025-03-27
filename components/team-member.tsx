"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberProps {
  member: {
    id: number
    name: string
    role: string
    image: string
    quote: string
  }
  index: number
}

export default function TeamMemberImproved({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-bargo-mauve to-bargo-mauve/80">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 right-0 m-2">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">BarGo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-white to-bargo-cream/30">
        <h3 className="text-xl font-bold mb-1 text-bargo-text">{member.name}</h3>
        <p className="text-bargo-sage font-semibold mb-3">{member.role}</p>

        <div className="mt-4 bg-bargo-mauve/10 p-3 rounded-lg">
          <p className="text-sm italic text-bargo-text">"{member.quote}"</p>
        </div>
      </div>
    </motion.div>
  )
}

