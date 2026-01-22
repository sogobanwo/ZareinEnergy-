"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import { cn } from "@/lib/utils"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % 3)
          return 0
        }
        return prev + (100 / 30) // 3.33 per 100ms = 3 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setProgress(0)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="pt-32 sm:pt-36 md:pt-40 lg:pt-[240px] flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0 -mb-17"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#1a5f7a] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0"
            >
              Powering the Future
              <br />
              with Zarein Energy
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(26,95,122,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
            >
              Innovative sustainable power generation
              <br className="hidden sm:block" />
              solutions for a cleaner tomorrow.
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        >
          <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center bg-[length:200%_auto] hover:bg-right transition-all duration-500"
              onClick={() => window.location.href = '/contact'}
            >
              <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
              <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans relative z-10">
                Discover Our Solutions
              </div>
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
          <img
            src="/mask-group-pattern.svg"
            alt=""
            className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
            style={{
              filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
            }}
          />
        </div>

        <motion.div
          variants={fadeInUp}
          className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0"
        >
          <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px]  shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start relative">
            {/* Dashboard Content */}
            <div className="self-stretch flex-1 flex justify-start items-start w-full h-full">
              {/* Main Content */}
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeCard === 0 && (
                    <motion.img
                      key="grid-solutions"
                      src="/grid-solution.avif"
                      alt="Smart Grid Management"
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {activeCard === 1 && (
                    <motion.img
                      key="renewable"
                      src="/renewable-energy.avif"
                      alt="Renewable Energy"
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {activeCard === 2 && (
                    <motion.img
                      key="storage"
                      src="/energy-storage.webp"
                      alt="Energy Storage"
                      className="absolute inset-0 w-full h-full object-contain"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
          <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
            <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
            <FeatureCard
              title="Grid Solutions"
              description="Modernize power distribution with intelligent grid management and optimization."
              isActive={activeCard === 0}
              progress={activeCard === 0 ? progress : 0}
              onClick={() => handleCardClick(0)}
            />
            <FeatureCard
              title="Renewable Energy"
              description="Harness solar, wind, and hydroelectric power for sustainable energy generation."
              isActive={activeCard === 1}
              progress={activeCard === 1 ? progress : 0}
              onClick={() => handleCardClick(1)}
            />
            <FeatureCard
              title="Energy Storage"
              description="Advanced battery systems for efficient storage and distribution of clean power."
              isActive={activeCard === 2}
              progress={activeCard === 2 ? progress : 0}
              onClick={() => handleCardClick(2)}
            />
          </div>

          <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
            <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
          <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none"
            >
              <Badge
                icon={
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
                    <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
                    <rect x="2" y="4" width="1" height="1" fill="#37322F" />
                    <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
                    <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
                    <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
                    <rect x="8" y="2" width="1" height="1" fill="#37322F" />
                    <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
                    <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
                    <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
                    <rect x="8" y="5" width="1" height="1" fill="#37322F" />
                    <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
                  </svg>
                }
                text="Social Proof"
              />
              <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#1a5f7a] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                Trusted by Energy Leaders
              </div>
              <div className="self-stretch text-center text-[#1a5f7a] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                Zarein Energy powers thousands of MW across the globe
                <br className="hidden sm:block" />
                with innovative and sustainable solutions.
              </div>
            </motion.div>
          </div>

          {/* Logo Grid */}
          <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
            <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
              <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
              {Array.from({ length: 8 }).map((_, index) => {
                const isMobileFirstColumn = index % 2 === 0
                const isDesktopFirstColumn = index % 4 === 0
                const isDesktopLastColumn = index % 4 === 3
                const isDesktopTopRow = index < 4
                const isDesktopBottomRow = index >= 4

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3 border-b border-[#E3E2E1]",
                      index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b",
                      index >= 6 ? "border-b" : "",
                      isMobileFirstColumn ? "border-r-[0.5px]" : "",
                      "sm:border-r-[0.5px] sm:border-l-0",
                      isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]",
                      isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]",
                      isDesktopTopRow ? "md:border-b-[0.5px]" : "",
                      isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""
                    )}
                  >
                    <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 relative shadow-[0px_-4px_8px_rgba(255,255,255,0.64)_inset] overflow-hidden rounded-full">
                      <img src="/horizon-icon.svg" alt="Horizon" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">
                      Acute
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
              <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <TestimonialsSection />
        <FAQSection />
      </motion.div>
    </>
  )
}

function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={cn(
        "w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 transition-all duration-500",
        isActive
          ? "shadow-[0px_0px_0px_0.75px_#E0DEDB_inset] bg-white"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80 hover:bg-slate-50 hover:shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
      )}
      onClick={onClick}
      onMouseEnter={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <motion.div
            className="h-full bg-[#322D2B]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
