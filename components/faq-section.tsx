"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What does Zarein Energy provide?",
    answer:
      "Zarein Energy is a leading sustainable power generation and distribution company. We specialize in renewable energy solutions including solar, wind, and hydroelectric power, along with advanced energy storage systems and smart grid technologies.",
  },
  {
    question: "How does your smart grid technology work?",
    answer:
      "Our smart grid system uses real-time monitoring and AI-powered analytics to optimize power distribution, reduce losses, balance supply and demand, and integrate renewable energy sources seamlessly into the network.",
  },
  {
    question: "What renewable energy sources does Zarein operate?",
    answer:
      "We operate state-of-the-art solar farms, wind turbine installations, and hydroelectric facilities across multiple regions. Our diverse portfolio ensures stable, reliable power generation with minimal environmental impact.",
  },
  {
    question: "How is your energy storage technology beneficial?",
    answer:
      "Our advanced battery storage systems capture excess renewable energy during peak generation periods and release it during high demand. This ensures consistent power supply and maximizes grid stability.",
  },
  {
    question: "Is Zarein Energy's infrastructure environmentally sustainable?",
    answer:
      "Absolutely. We are committed to 100% renewable energy generation with zero carbon emissions. All our facilities meet international environmental standards and contribute to climate change mitigation.",
  },
  {
    question: "How can businesses partner with Zarein Energy?",
    answer:
      "We offer customized energy solutions for enterprises, government agencies, and municipalities. Contact our partnerships team to discuss renewable energy contracts, grid integration, or energy consulting services.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#1a5f7a] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#1a5f7a] text-base font-normal leading-7 font-sans">
            Learn more about Zarein Energy's innovative
            <br className="hidden md:block" />
            sustainable power generation solutions.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(26,95,122,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(26,95,122,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#1a5f7a] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(26,95,122,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#1a5f7a] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
