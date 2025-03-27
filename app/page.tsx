"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowDown, Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import ProductCardImproved from "@/components/product-card"
import TeamMemberImproved from "@/components/team-member"
import SoapCaseImproved from "@/components/soap-case"

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
      color: "bg-purple-100",
      textColor: "text-purple-800",
      soapColor: "bg-purple-300",
    },
    {
      id: 2,
      name: "Citrus Fresh",
      description: "Energizing citrus soap to refresh after a long flight",
      color: "bg-yellow-100",
      textColor: "text-yellow-800",
      soapColor: "bg-yellow-300",
    },
    {
      id: 3,
      name: "Ocean Breeze",
      description: "Refreshing ocean scent to remind you of beach destinations",
      color: "bg-blue-100",
      textColor: "text-blue-800",
      soapColor: "bg-blue-300",
    },
    {
      id: 4,
      name: "Forest Mint",
      description: "Invigorating mint soap inspired by forest adventures",
      color: "bg-green-100",
      textColor: "text-green-800",
      soapColor: "bg-green-300",
    },
  ]

  const team = [
    {
      id: 1,
      name: "Nikolay Nikov",
      role: "Chief Financial Officer (CFO)",
      image: "/images/team/nikolay-nikov.png",
      quote:
        "I keep BarGo's finances in check so we don't accidentally spend our entire budget on snacks. Spreadsheets, numbers, and making sure we stay profitable: that's my game.",
    },
    {
      id: 2,
      name: "Joris Verdurmen",
      role: "HR Lead",
      image: "/images/team/joris-verdurmen.png",
      quote:
        "I keep the peace and solve problems, so you can think of me as the HR equivalent of a conditioner: smoothing things over and making everything flow a little more seamlessly.",
    },
    {
      id: 3,
      name: "Louise-Marie Guy",
      role: "Sales & Marketing Lead",
      image: "/images/team/louise-marie-guy.png",
      quote:
        "As Sales & Marketing Lead, I make sure BarGo is everywhere. If you haven't heard of us, you're clearly not using enough soap (or following us on social media).",
    },
    {
      id: 4,
      name: "Javier Guinea Ferrer",
      role: "Partnership Lead / Financial Support",
      image: "/images/team/javier-guinea-ferrer.png",
      quote:
        "As Partnership Lead, I don't do partnerships, but I make sure our finances don't slip through the cracks, like a bar of soap in a slippery shower.",
    },
    {
      id: 5,
      name: "Mia Canuti",
      role: "Chief Operational Officer (COO)",
      image: "/images/team/mia-canuti.png",
      quote:
        "I make sure operations run smoother than our products glide through TSA, making sure everything is organized, efficient, and ready for action every step of the way.",
    },
    {
      id: 6,
      name: "Anouk Kerkhove",
      role: "Founder / Chief Executive Officer (CEO)",
      image: "/images/team/anouk-kerkhove.png",
      quote:
        "I had a simple idea and somehow convinced everyone it was brilliant. Now, I make sure BarGo stays on track, grows fast, and doesn't run out of soap... or ambition. No slip-ups allowed!",
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
      name: "Melissa Mali",
      role: "Supply Chain Lead",
      image: "/images/team/melissa-mali.png",
      quote:
        "As Supply Chain Lead, I find containers that are basically uncrackable. If it can't survive me throwing it across the office, it's not making the cut.",
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
    <main className="relative overflow-x-hidden bg-bargo-cream">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-bargo-mauve to-bargo-cream overflow-hidden pt-20"
      >
        <div className="absolute w-full h-full">
          {/* Decorative clouds */}
          <motion.div
            className="absolute top-[15%] left-[10%] w-20 h-12 bg-white rounded-full opacity-80"
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[30%] right-[15%] w-32 h-16 bg-white rounded-full opacity-80"
            animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[20%] w-24 h-14 bg-white rounded-full opacity-80"
            animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
          />
        </div>

        {/* Flying plane animation */}
        <motion.div
          className="absolute z-10"
          style={{
            x: planeX,
            y: planeY,
            rotate: planeRotate,
          }}
        >
          <div className="relative w-32 h-32">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.5H8.3C7.5 16.5 7 16 7 15.2C7 14.4 7.5 13.9 8.3 13.9H22V16.5Z" fill="white" />
              <path d="M22 10.1H8.3C7.5 10.1 7 9.6 7 8.8C7 8 7.5 7.5 8.3 7.5H22V10.1Z" fill="white" />
              <path d="M22 13.9H2V10.1H22V13.9Z" fill="white" />
              <path
                d="M8.3 16.5C7.9 16.5 7.5 16.4 7.1 16.1C6.7 15.8 6.5 15.5 6.5 15.2L6.5 8.8C6.5 8.5 6.7 8.2 7.1 7.9C7.5 7.6 7.9 7.5 8.3 7.5L8.3 16.5Z"
                fill="white"
              />
              <path
                d="M8.3 16.5C8.7 16.5 9.1 16.4 9.5 16.1C9.9 15.8 10.1 15.5 10.1 15.2L10.1 8.8C10.1 8.5 9.9 8.2 9.5 7.9C9.1 7.6 8.7 7.5 8.3 7.5L8.3 16.5Z"
                fill="white"
              />
              <path
                d="M2 13.9C2.8 13.9 3.5 13.6 4.1 13C4.7 12.4 5 11.7 5 10.9C5 10.1 4.7 9.4 4.1 8.8C3.5 8.2 2.8 7.9 2 7.9V13.9Z"
                fill="white"
              />
            </svg>
            <motion.div
              className="absolute -right-8 top-1/2 w-8 h-1 bg-white opacity-80"
              animate={{ width: [8, 20, 8] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Travel Clean with Bargo.sc
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Eco-friendly | Compact | Mess-free
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <SoapCaseImproved />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={() => scrollToSection("products")}
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20 bg-bargo-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-bargo-text">Our Travel Soaps</h2>
            <p className="text-xl text-bargo-text/80 max-w-2xl mx-auto">
              One travel-ready solution with four essentials in a sleek, compact case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCardImproved key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-bargo-mauve/10 rounded-xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-8 text-center text-bargo-text">Why Choose Bargo.sc?</h3>
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
                  <h4 className="text-xl font-bold mb-3 text-center text-bargo-text">Eco-friendly</h4>
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
                  <h4 className="text-xl font-bold mb-3 text-center text-bargo-text">Compact</h4>
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
                  <h4 className="text-xl font-bold mb-3 text-center text-bargo-text">Mess-free</h4>
                  <p className="text-bargo-text/80 text-center">
                    Our innovative case design prevents leaks and spills, keeping your luggage clean.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 bg-bargo-sage/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-bargo-text">Meet Our Team</h2>
            <p className="text-xl text-bargo-text/80 max-w-2xl mx-auto">
              International business students from HZ UAS who founded Bargo.sc
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMemberImproved key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-20 bg-gradient-to-b from-bargo-mauve to-bargo-cream text-bargo-text"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-white" />
                    <p className="text-white">info@bargo.sc</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-white" />
                    <p className="text-white">HZ University of Applied Sciences, Netherlands</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/bargo.sc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bargo-sage transition-colors text-white"
                  >
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover:text-bargo-sage transition-colors text-white">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="hover:text-bargo-sage transition-colors text-white">
                    <Twitter size={24} />
                  </a>
                </div>

                {/* Decorative plane ticket */}
                <motion.div
                  className="mt-8 bg-white rounded-lg p-4 shadow-lg transform rotate-3"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center border-b border-bargo-mauve/20 pb-2 mb-2">
                    <div className="text-bargo-text font-bold">BOARDING PASS</div>
                    <div className="text-bargo-mauve font-bold">BARGO AIR</div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xs text-bargo-text/60">FROM</div>
                      <div className="font-bold text-bargo-text">HOME</div>
                    </div>
                    <div>
                      <div className="text-xs text-bargo-text/60">TO</div>
                      <div className="font-bold text-bargo-text">ANYWHERE</div>
                    </div>
                    <div>
                      <div className="text-xs text-bargo-text/60">SEAT</div>
                      <div className="font-bold text-bargo-text">CLEAN</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-white text-bargo-mauve font-bold py-3 px-6 rounded hover:bg-bargo-cream transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-bargo-text text-white text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Bargo.sc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

