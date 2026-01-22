"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-all duration-300",
          scrolled ? "py-2" : "py-6"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "flex items-center justify-between px-6 py-2 rounded-full transition-all duration-300",
            scrolled
              ? "bg-white/80 backdrop-blur-md shadow-md border border-slate-200/50 w-[90%] max-w-5xl"
              : "bg-transparent w-full max-w-[1060px]"
          )}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/zarein-logo.png"
              alt="Zarein Energy"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-[#1a5f7a]",
                    isActive ? "text-[#1a5f7a]" : "text-slate-600"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-[#1a5f7a]/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop Get Started Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-[#1a5f7a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col items-center gap-8"
          >
            <nav className="flex flex-col items-center gap-6 w-full">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "text-2xl font-medium transition-colors w-full text-center py-2",
                      isActive ? "text-[#1a5f7a]" : "text-slate-600"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-xs bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md"
              onClick={() => {
                setMobileMenuOpen(false)
                window.location.href = '/contact'
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
