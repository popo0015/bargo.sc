"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Instagram, Facebook, Twitter, Mail, MapPin, Leaf, Package, Droplets } from "lucide-react"
import Navbar from "@/components/navbar"
import TeamMember from "@/components/team-member"
import HandDrawnHero from "@/components/hand-drawn-hero"
import ProductCardSketch from "@/components/product-card"
import FeatureSketch from "@/components/feature-sketch"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const planeX = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"])
  const planeY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"])
  const planeRotate = useTransform(scrollYProgress, [0, 0.3], [0, 10])

  const isProductsInView = useInView(productsRef, { once: false, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: false, amount: 0.3 })
  const isContactInView = useInView(contactRef, { once: false, amount: 0.3 })

  const products = [
    {
      id: 1,
      name: "Lavender Calm",
      description: "Soothing lavender soap for relaxation during your travels",
      color: "bg-lavender-300",
      textColor: "text-lavender-800",
      ingredients: ["Lavender", "Shea Butter", "Olive Oil", "Coconut Oil"],
    },
    {
      id: 2,
      name: "Citrus Fresh",
      description: "Energizing citrus soap to refresh after a long flight",
      color: "bg-honey-200",
      textColor: "text-honey-800",
      ingredients: ["Orange Peel", "Lemon Oil", "Honey", "Jojoba Oil"],
    },
    {
      id: 3,
      name: "Ocean Breeze",
      description: "Refreshing ocean scent to remind you of beach destinations",
      color: "bg-sky-200",
      textColor: "text-sky-800",
      ingredients: ["Sea Salt", "Algae Extract", "Coconut Oil", "Aloe Vera"],
    },
    {
      id: 4,
      name: "Forest Mint",
      description: "Invigorating mint soap inspired by forest adventures",
      color: "bg-olive-200",
      textColor: "text-olive-800",
      ingredients: ["Mint Leaves", "Eucalyptus", "Tea Tree Oil", "Avocado Oil"],
    },
  ]

  const team = [
    {
      id: 1,
      name: "Anouk Kerkhove",
      role: "Founder / Chief Executive Officer (CEO)",
      image: "/images/team/anouk-kerkhove.png",
      quote:
        "I had a simple idea and somehow convinced everyone it was brilliant. Now, I make sure BarGo stays on track, grows fast, and doesn't run out of soap... or ambition. No slip-ups allowed!",
    },
    {
      id: 2,
      name: "Mia Canuti",
      role: "Chief Operational Officer (COO)",
      image: "/images/team/mia-canuti.png",
      quote:
        "I make sure operations run smoother than our products glide through TSA, making sure everything is organized, efficient, and ready for action every step of the way.",
    },
    {
      id: 3,
      name: "Nikolay Nikov",
      role: "Chief Financial Officer (CFO)",
      image: "/images/team/nikolay-nikov.png",
      quote:
        "I keep BarGo's finances in check so we don't accidentally spend our entire budget on snacks. Spreadsheets, numbers, and making sure we stay profitable: that's my game.",
    },
    {
      id: 4,
      name: "Joris Verdurmen",
      role: "HR Lead",
      image: "/images/team/joris-verdurmen.png",
      quote:
        "I keep the peace and solve problems, so you can think of me as the HR equivalent of a conditioner: smoothing things over and making everything flow a little more seamlessly.",
    },
    {
      id: 5,
      name: "Louise-Marie Guy",
      role: "Sales & Marketing Lead",
      image: "/images/team/louise-marie-guy.png",
      quote:
        "As Sales & Marketing Lead, I make sure BarGo is everywhere. If you haven't heard of us, you're clearly not using enough soap (or following us on social media).",
    },
    {
      id: 6,
      name: "Melissa Mali",
      role: "Supply Chain Lead",
      image: "/images/team/melissa-mali.png",
      quote:
        "As Supply Chain Lead, I find containers that are basically uncrackable. If it can't survive me throwing it across the office, it's not making the cut.",
    },
    {
      id: 7,
      name: "Tyra Johanne Sand Snipstad",
      role: "Product Lead",
      image: "/images/team/tyra-johanne-sand-snipstad.png",
      quote:
        "As Product Lead, I perfect our products so they're as smooth as a freshly lathered soap bar, then I market them until they become a clean sensation.",
    },
    {
      id: 8,
      name: "Javier Guinea Ferrer",
      role: "Partnership Lead / Financial Support",
      image: "/images/team/javier-guinea-ferrer.png",
      quote:
        "As Partnership Lead, I don't do partnerships, but I make sure our finances don't slip through the cracks, like a bar of soap in a slippery shower.",
    },
  ]

  const features = [
    {
      title: "Eco-friendly",
      description: "Sustainable materials and zero plastic waste for guilt-free travel.",
      icon: <Leaf size={24} />,
      color: "#A9BEA5",
      index: 0,
    },
    {
      title: "Compact",
      description: "Perfectly sized for carry-on luggage, saving valuable space in your travel bag.",
      icon: <Package size={24} />,
      color: "#C9A9A6",
      index: 1,
    },
    {
      title: "Mess-free",
      description: "Our innovative case design prevents leaks and spills, keeping your luggage clean.",
      icon: <Droplets size={24} />,
      color: "#B8D8E8",
      index: 2,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="relative overflow-x-hidden bg-cream-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <HandDrawnHero />
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20 bg-cream-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-brown-800">
              Our <span className="font-handwritten text-olive-600 text-5xl">Travel Soaps</span>
            </h2>

            {/* Hand-drawn underline */}
            <div className="flex justify-center mb-6">
              <svg width="200" height="15">
                <path d="M0,7 C50,0 100,15 200,7" stroke="#A9BEA5" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-xl text-brown-700 max-w-2xl mx-auto">
              One travel-ready solution with four essentials in a sleek, compact case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCardSketch key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-cream-100 border border-brown-200 rounded-sm p-8">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center text-brown-800">
                Why Choose <span className="font-handwritten text-olive-600 text-4xl">Bargo.sc</span>?
              </h3>

              {/* Hand-drawn underline */}
              <div className="flex justify-center mb-10">
                <svg width="250" height="15">
                  <path
                    d="M0,7 C60,0 120,15 250,7"
                    stroke="#C9A9A6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <FeatureSketch
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    color={feature.color}
                    index={feature.index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 bg-olive-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-brown-800">
              Meet Our <span className="font-handwritten text-olive-600 text-5xl">Team</span>
            </h2>

            {/* Hand-drawn underline */}
            <div className="flex justify-center mb-6">
              <svg width="200" height="15">
                <path d="M0,7 C50,0 100,15 200,7" stroke="#A9BEA5" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-xl text-brown-700 max-w-2xl mx-auto">
              International business students from HZ UAS who founded Bargo.sc
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-cream-50 text-brown-800 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-brown-800">
              Get In <span className="font-handwritten text-olive-600 text-5xl">Touch</span>
            </h2>

            {/* Hand-drawn underline */}
            <div className="flex justify-center mb-6">
              <svg width="200" height="15">
                <path d="M0,7 C50,0 100,15 200,7" stroke="#C9A9A6" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-xl text-brown-700 max-w-2xl mx-auto">
              Have questions about our products or interested in wholesale opportunities?
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-cream-100 border border-brown-200 p-8 rounded-sm">
                <h3 className="text-2xl font-serif font-bold mb-6 text-brown-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-olive-600" />
                    <p className="text-brown-700">info@bargo.sc</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-olive-600" />
                    <p className="text-brown-700">HZ University of Applied Sciences, Netherlands</p>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold mt-8 mb-6 text-brown-800">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/bargo.sc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-olive-700 transition-colors text-olive-600"
                  >
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover:text-olive-700 transition-colors text-olive-600">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="hover:text-olive-700 transition-colors text-olive-600">
                    <Twitter size={24} />
                  </a>
                </div>

                {/* Decorative hand-drawn boarding pass */}
                <motion.div
                  className="mt-8 bg-cream-50 border border-brown-200 p-4 rounded-sm relative transform rotate-2"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
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
                        stroke="#C9A9A6"
                        strokeWidth="1"
                        strokeDasharray="8 4"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between items-center border-b border-brown-200 pb-2 mb-2">
                    <div className="text-brown-800 font-bold">BOARDING PASS</div>
                    <div className="text-olive-600 font-handwritten text-xl">Bargo Air</div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xs text-brown-600">FROM</div>
                      <div className="font-bold text-brown-800">HOME</div>
                    </div>
                    <div>
                      <div className="text-xs text-brown-600">TO</div>
                      <div className="font-bold text-brown-800">ANYWHERE</div>
                    </div>
                    <div>
                      <div className="text-xs text-brown-600">SEAT</div>
                      <div className="font-handwritten text-olive-600">Clean</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-cream-100 border border-brown-200 p-8 rounded-sm">
                <h3 className="text-2xl font-serif font-bold mb-6 text-brown-800">
                  Send Us a <span className="font-handwritten text-olive-600">Message</span>
                </h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-sm bg-cream-50 border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-300 text-brown-800 placeholder-brown-400"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-sm bg-cream-50 border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-300 text-brown-800 placeholder-brown-400"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 rounded-sm bg-cream-50 border border-brown-200 focus:outline-none focus:ring-2 focus:ring-olive-300 text-brown-800 placeholder-brown-400"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-olive-600 text-cream-50 font-bold py-3 px-6 rounded-sm hover:bg-olive-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-handwritten text-lg">Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-brown-800 text-brown-800 text-center">
        <div className="container mx-auto px-4">
          <p className="font-handwritten text-lg">© {new Date().getFullYear()} Bargo.sc. All rights reserved.</p>
          <div className="mt-2 text-sm text-cream-100/70">
            <span>Travel clean, travel light</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

