"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "products", "team", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bargo-cream/90 backdrop-blur-md text-bargo-text shadow-md" : "bg-transparent text-black/70"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className="text-2xl font-bold"
            >
              Bargo.sc
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className={`hover:opacity-75 transition-opacity ${activeSection === "home" ? "font-bold" : ""}`}
            >
              Home
            </a>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("products")
              }}
              className={`hover:opacity-75 transition-opacity ${activeSection === "products" ? "font-bold" : ""}`}
            >
              Products
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("team")
              }}
              className={`hover:opacity-75 transition-opacity ${activeSection === "team" ? "font-bold" : ""}`}
            >
              Team
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
              className={`hover:opacity-75 transition-opacity ${activeSection === "contact" ? "font-bold" : ""}`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-bargo-cream text-bargo-text"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className={`py-2 hover:text-bargo-mauve transition-colors ${activeSection === "home" ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("home")
                }}
              >
                Home
              </a>
              <a
                href="#products"
                className={`py-2 hover:text-bargo-mauve transition-colors ${activeSection === "products" ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("products")
                }}
              >
                Products
              </a>
              <a
                href="#team"
                className={`py-2 hover:text-bargo-mauve transition-colors ${activeSection === "team" ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("team")
                }}
              >
                Team
              </a>
              <a
                href="#contact"
                className={`py-2 hover:text-bargo-mauve transition-colors ${activeSection === "contact" ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

