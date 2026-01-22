'use client'

import { PageShell } from '@/components/page-shell'
import { motion } from "framer-motion"

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
 <motion.div
                 className="pt-32 sm:pt-36 md:pt-40 lg:pt-[240px] flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0"
                 initial="initial"
                 animate="animate"
                 variants={{
                   animate: { transition: { staggerChildren: 0.1 } }
                 }}
               >        <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#1a5f7a] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0"
            >
              Our Services
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(26,95,122,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
            >
              Comprehensive energy solutions designed to meet
              <br className="hidden sm:block" />
              the unique needs of businesses, governments, and communities worldwide.
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
              className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#1a5f7a] hover:bg-[#0f4a61] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center transition-all duration-500"
              onClick={() => window.location.href = '/contact'}
            >
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

        {/* Services Grid */}
        <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2 mt-30">
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
            <section className="w-full py-16 px-4 relative z-10 mt-12 sm:mt-16">
              <div className="max-w-[1060px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  {/* Solar Energy Solutions */}
                  <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1a5f7a] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">☀️</span>
                      </div>
                      <h2 className="text-[#1a5f7a] text-2xl font-semibold">Solar Energy Solutions</h2>
                    </div>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      Harness the power of the sun with our state-of-the-art solar farms and photovoltaic systems. We provide reliable, scalable solar energy generation with efficiency rates exceeding 22%. Our systems are designed for optimal performance in various climate conditions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Large-scale solar farms (100 MW+)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Commercial rooftop installations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Advanced monitoring systems</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Wind Energy Solutions */}
                  <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1a5f7a] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">💨</span>
                      </div>
                      <h2 className="text-[#1a5f7a] text-2xl font-semibold">Wind Energy Solutions</h2>
                    </div>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      Capitalize on wind energy with our modern wind turbine installations and onshore/offshore wind farms. We optimize placement and generate consistent power output with capacity factors up to 45%.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Onshore wind farms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Offshore installations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Predictive maintenance</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Hydroelectric Solutions */}
                  <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1a5f7a] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">💧</span>
                      </div>
                      <h2 className="text-[#1a5f7a] text-2xl font-semibold">Hydroelectric Solutions</h2>
                    </div>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      Harness the power of flowing water with our hydroelectric facilities. We provide dependable baseload power generation with minimal environmental impact and excellent grid stability.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Run-of-river systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Reservoir management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Environmental compliance</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Energy Storage Solutions */}
                  <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1a5f7a] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">🔋</span>
                      </div>
                      <h2 className="text-[#1a5f7a] text-2xl font-semibold">Energy Storage Solutions</h2>
                    </div>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      Maximize renewable energy utilization with our advanced battery storage systems. Store excess power during peak generation and release it during peak demand to optimize grid performance.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Lithium-ion battery systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Long-duration storage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Grid balancing technology</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Smart Grid Solutions */}
                  <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1a5f7a] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">🌐</span>
                      </div>
                      <h2 className="text-[#1a5f7a] text-2xl font-semibold">Smart Grid Solutions</h2>
                    </div>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      Modernize power distribution with our intelligent grid management systems. Real-time monitoring, AI-powered analytics, and automated load balancing ensure optimal efficiency and reliability.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Real-time grid monitoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">AI-driven optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Demand forecasting</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Consulting & Integration */}
                  <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1a5f7a] rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">📊</span>
                      </div>
                      <h2 className="text-[#1a5f7a] text-2xl font-semibold">Consulting & Integration</h2>
                    </div>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      Leverage our expertise to develop customized energy strategies. Our consultants work with you to design efficient energy portfolios that align with your business goals and sustainability objectives.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">Energy audits & assessments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">System integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#2b8c3e] font-bold">✓</span>
                        <span className="text-[#1a5f7a]/80">24/7 technical support</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="w-full py-16 px-4 relative z-10">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-[#1a5f7a] text-3xl font-semibold text-center mb-12">Why Choose Zarein Energy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Industry-Leading Efficiency',
                  description: 'Our systems achieve 99.8% uptime with advanced monitoring and predictive maintenance ensuring peak performance.'
                },
                {
                  title: 'Proven Track Record',
                  description: 'Over 15 years of experience delivering reliable renewable energy across 50+ countries powering 10M+ lives.'
                },
                {
                  title: 'Expert Team',
                  description: 'World-class engineers and technicians committed to delivering exceptional results and continuous innovation.'
                },
                {
                  title: 'Scalable Solutions',
                  description: 'From small installations to massive farms, we scale solutions to meet your specific energy requirements.'
                },
                {
                  title: 'Environmental Commitment',
                  description: 'Zero carbon emissions, 100% renewable energy with full commitment to climate change mitigation.'
                },
                {
                  title: 'Complete Support',
                  description: '24/7 technical support, maintenance services, and consulting to ensure your success.'
                }
              ].map((item, index) => (
                <div key={index} className="shadow-sm hover:shadow-lg transition-shadow p-8 rounded-lg border border-[#1a5f7a]/10 flex flex-col gap-3">
                  <h3 className="text-[#1a5f7a] font-semibold text-lg">{item.title}</h3>
                  <p className="text-[#1a5f7a]/80 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
     </motion.div>
  )
}
