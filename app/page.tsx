"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Instagram, Facebook, Twitter, Mail, MapPin, Leaf, Package, Droplets } from "lucide-react"
import Navbar from "@/components/navbar"
import TeamMember from "@/components/team-member"
import HandDrawnHero from "@/components/hand-drawn-hero"
import ProductCard from "@/components/product-card"
import FeatureSection from "@/components/feature-section"


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const isFeaturesInView = useInView(featuresRef, { once: false, amount: 0.3 })
  const isProductsInView = useInView(productsRef, { once: false, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: false, amount: 0.3 })
  const isContactInView = useInView(contactRef, { once: false, amount: 0.3 })

  const products = [
    {
      id: 1,
      name: "Lavender Mint",
      description: "Soothing lavender soap with refreshing mint for relaxation during your travels",
      color: "bg-green-100",
      textColor: "text-green-800",
      soapColor: "bg-purple-300",
      pattern: "lines" as const,
    },
    {
      id: 2,
      name: "Lemon Honey",
      description: "Energizing citrus soap with sweet honey to refresh after a long flight",
      color: "bg-yellow-100",
      textColor: "text-yellow-800",
      soapColor: "bg-yellow-300",
      pattern: "circles" as const,
    },
    {
      id: 3,
      name: "Ocean Breeze",
      description: "Refreshing ocean scent to remind you of beach destinations",
      color: "bg-blue-100",
      textColor: "text-blue-800",
      soapColor: "bg-blue-300",
      pattern: "waves" as const,
    },
    {
      id: 4,
      name: "Coco Cinnamon",
      description: "Warm cinnamon and coconut soap inspired by exotic adventures",
      color: "bg-brown-200",
      textColor: "text-brown-600",
      soapColor: "bg-brown-200",
      pattern: "circles" as const,
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

  return (
    <main className="relative overflow-x-hidden bg-cream-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <HandDrawnHero />
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20 bg-bargo-cream relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-bargo-text">
              Our <span className="font-handwritten text-olive-600 text-5xl">Travel Soaps</span>
            </h2>

            {/* Hand-drawn underline */}
            <div className="flex justify-center mb-6">
              <svg width="200" height="15">
                <path d="M0,7 C50,0 100,15 200,7" stroke="#C9A9A6" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-xl text-bargo-text/80 max-w-2xl mx-auto">
              One travel-ready solution with four essentials in a sleek, compact case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/*Features section*/}
          <section id="features" ref={featuresRef}>
          <motion.div
            className="text-center mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-bargo-text">
              What makes us <span className="font-handwritten text-olive-600 text-5xl">different ?</span>
            </h2>
            
            {/* Hand-drawn underline */}
            <div className="flex justify-center mb-6">
              <svg width="200" height="15">
                <path d="M0,7 C50,0 100,15 200,7" stroke="#C9A9A6" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-xl text-bargo-text/80 max-w-2xl mx-auto">
            Our soaps are made with natural ingredients that are gentle on your skin and the environment.
            </p>
          </motion.div>
            <FeatureSection isInView={isFeaturesInView} />
          </section>

          {/* <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-bargo-mauve/10 rounded-xl p-8 shadow-lg">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center text-bargo-text">
                Why Choose <span className="font-handwritten text-bargo-mauve text-4xl">Bargo.sc</span>?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-bargo-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 3L4 9V21H20V9L12 3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M12 21V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M12 12L16 16"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12L8 16"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center text-bargo-text">
                    <span className="font-handwritten text-2xl text-bargo-sage">Eco-friendly</span>
                  </h4>
                  <p className="text-bargo-text/80 text-center">
                    Sustainable materials and zero plastic waste for guilt-free travel.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-bargo-mauve rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 20V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center text-bargo-text">
                    <span className="font-handwritten text-2xl text-bargo-mauve">Compact</span>
                  </h4>
                  <p className="text-bargo-text/80 text-center">
                    Perfectly sized for carry-on luggage, saving valuable space in your travel bag.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M12 8H12.01"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center text-bargo-text">
                    <span className="font-handwritten text-2xl text-yellow-600">Mess-free</span>
                  </h4>
                  <p className="text-bargo-text/80 text-center">
                    Our innovative case design prevents leaks and spills, keeping your luggage clean.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div> */}
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

