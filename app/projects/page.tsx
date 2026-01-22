'use client'



import CTASection from '@/components/cta-section';
import FooterSection from '@/components/footer-section'
import { PageShell } from "@/components/page-shell"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
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
            Our Projects
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(26,95,122,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
          >
            Showcasing our most impactful renewable energy
            <br className="hidden sm:block" />
            installations transforming communities across the globe.
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

      {/* Featured Projects */}
      <section className="w-full py-16 px-4 relative z-10 mt-12 sm:mt-16 border-t border-[#1a5f7a]/10">
        <div className="max-w-[1060px] mx-auto">
          <div className="space-y-12">
            {/* Project 1: Solar Farm */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
              <div className="bg-gradient-to-br from-[#2b8c3e] to-[#1a5f7a] rounded-lg h-80 flex items-center justify-center">
                <span className="text-white text-6xl">☀️</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[#1a5f7a] text-3xl font-semibold mb-3">Middle East Solar Complex</h2>
                  <span className="inline-block bg-[#2b8c3e]/20 text-[#2b8c3e] px-4 py-1 rounded-full text-sm font-medium mb-4">Solar Energy</span>
                </div>
                <p className="text-[#1a5f7a]/80 text-base leading-7">
                  A massive 2,480 MW solar farm spanning 5,000 hectares across the Middle East. This project utilizes advanced photovoltaic technology and integrated energy storage systems, generating clean electricity for over 2 million households while reducing CO2 emissions by 3.5M tons annually.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">2,480 MW</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Capacity</p>
                  </div>
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">2M+</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Households</p>
                  </div>
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">2024</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Completed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Wind Farm */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
              <div className="flex flex-col gap-6 order-2 md:order-1">
                <div>
                  <h2 className="text-[#1a5f7a] text-3xl font-semibold mb-3">North Atlantic Wind Farm</h2>
                  <span className="inline-block bg-[#1a5f7a]/20 text-[#1a5f7a] px-4 py-1 rounded-full text-sm font-medium mb-4">Wind Energy</span>
                </div>
                <p className="text-[#1a5f7a]/80 text-base leading-7">
                  An offshore wind farm with 250 turbines generating 1,850 MW of clean energy. Located in optimal wind corridor conditions, this project achieves 45% capacity factor and supplies electricity to 1.8 million users across Northern Europe with exceptional grid stability.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[#1a5f7a] text-2xl font-bold">1,850 MW</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Capacity</p>
                  </div>
                  <div>
                    <p className="text-[#1a5f7a] text-2xl font-bold">250</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Turbines</p>
                  </div>
                  <div>
                    <p className="text-[#1a5f7a] text-2xl font-bold">2023</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Completed</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg h-80 flex items-center justify-center order-1 md:order-2">
                <span className="text-white text-6xl">💨</span>
              </div>
            </motion.div>

            {/* Project 3: Hydro */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
              <div className="bg-gradient-to-br from-[#2b8c3e] to-[#1a5f7a] rounded-lg h-80 flex items-center justify-center">
                <span className="text-white text-6xl">💧</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[#1a5f7a] text-3xl font-semibold mb-3">Alpine Hydro Complex</h2>
                  <span className="inline-block bg-[#2b8c3e]/20 text-[#2b8c3e] px-4 py-1 rounded-full text-sm font-medium mb-4">Hydroelectric</span>
                </div>
                <p className="text-[#1a5f7a]/80 text-base leading-7">
                  A multi-facility hydroelectric complex generating 980 MW of baseload power from Alpine water sources. This project provides reliable 24/7 renewable energy, supports local irrigation systems, and maintains pristine environmental standards while serving 1.2 million households.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">980 MW</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Capacity</p>
                  </div>
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">24/7</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Baseload</p>
                  </div>
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">2022</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Completed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 4: Energy Storage */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
              <div className="flex flex-col gap-6 order-2 md:order-1">
                <div>
                  <h2 className="text-[#1a5f7a] text-3xl font-semibold mb-3">Asia-Pacific Battery Storage Hub</h2>
                  <span className="inline-block bg-[#1a5f7a]/20 text-[#1a5f7a] px-4 py-1 rounded-full text-sm font-medium mb-4">Energy Storage</span>
                </div>
                <p className="text-[#1a5f7a]/80 text-base leading-7">
                  A state-of-the-art 500 MWh battery storage facility with cutting-edge lithium-ion technology. This hub enables grid balancing, peak shaving, and seamless renewable integration, storing excess solar and wind energy for optimal dispatch during peak demand periods.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[#1a5f7a] text-2xl font-bold">500 MWh</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Storage</p>
                  </div>
                  <div>
                    <p className="text-[#1a5f7a] text-2xl font-bold">99.8%</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Uptime</p>
                  </div>
                  <div>
                    <p className="text-[#1a5f7a] text-2xl font-bold">2024</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Operational</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg h-80 flex items-center justify-center order-1 md:order-2">
                <span className="text-white text-6xl">🔋</span>
              </div>
            </motion.div>

            {/* Project 5: Smart Grid */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-[#2b8c3e] to-[#1a5f7a] rounded-lg h-80 flex items-center justify-center">
                <span className="text-white text-6xl">🌐</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[#1a5f7a] text-3xl font-semibold mb-3">European Smart Grid Network</h2>
                  <span className="inline-block bg-[#2b8c3e]/20 text-[#2b8c3e] px-4 py-1 rounded-full text-sm font-medium mb-4">Smart Grid</span>
                </div>
                <p className="text-[#1a5f7a]/80 text-base leading-7">
                  An integrated smart grid system managing power distribution across 15 European countries. Featuring AI-driven load balancing, real-time monitoring, and predictive maintenance, this network achieves 98% efficiency and serves 50 million users with unprecedented reliability.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">15</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Countries</p>
                  </div>
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">50M+</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Users</p>
                  </div>
                  <div>
                    <p className="text-[#2b8c3e] text-2xl font-bold">98%</p>
                    <p className="text-[#1a5f7a]/60 text-sm">Efficiency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="w-full relative overflow-hidden flex flex-col justify-center items-center">
        {/* Content */}
        <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full relative">
              {Array.from({ length: 300 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  style={{
                    top: `${i * 16 - 120}px`,
                    left: "-100%",
                    width: "300%",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <section className="w-full py-16 relative z-10">
            <div className="max-w-[1060px] mx-auto">
              <h2 className="text-[#1a5f7a] text-4xl font-semibold text-center mb-12">Our Collective Impact</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: '25+ GW', label: 'Total Capacity' },
                  { number: '50M+ tons', label: 'CO2 Prevented' },
                  { number: '200M+', label: 'Lives Powered' },
                  { number: '50+ Countries', label: 'Global Presence' }
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-[#1a5f7a] text-3xl font-bold mb-2">{stat.number}</p>
                    <p className="text-[#1a5f7a]/80 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  )
}
