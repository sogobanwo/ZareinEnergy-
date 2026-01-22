'use client'


import FooterSection from '@/components/footer-section'
import { motion } from "framer-motion"

export default function AboutPage() {
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
               >
        <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#1a5f7a] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0"
            >
              About Zarein Energy
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(26,95,122,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
            >
              Leading the global transition to sustainable energy through
              <br className="hidden sm:block" />
              innovation, reliability, and commitment to a cleaner future.
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

        {/* Mission & Vision */}
        <section className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2 mt-30">
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
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0"
            >        <div className="max-w-[1060px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#1a5f7a] text-3xl font-semibold">Our Mission</h2>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      To empower communities and industries with reliable, sustainable energy solutions that drive economic growth while protecting our planet for future generations. We're committed to accelerating the global shift toward renewable energy and smart grid technologies.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#1a5f7a] text-3xl font-semibold">Our Vision</h2>
                    <p className="text-[#1a5f7a]/80 text-base leading-7">
                      To become the world's most trusted and innovative energy company, delivering 100% clean, renewable power with zero carbon emissions. We envision a world where sustainable energy is accessible, affordable, and abundant for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Core Values */}
        <section className="w-full py-16 px-4">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-[#1a5f7a] text-3xl font-semibold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly pushing boundaries with cutting-edge renewable energy and smart grid technologies to solve tomorrow\'s challenges today.'
                },
                {
                  title: 'Sustainability',
                  description: 'Committed to environmental stewardship and creating solutions that minimize carbon footprint while maximizing clean energy output.'
                },
                {
                  title: 'Reliability',
                  description: 'Delivering consistent, dependable power generation and distribution with 99.8% uptime and industry-leading performance standards.'
                },
                {
                  title: 'Integrity',
                  description: 'Operating with transparency and ethical business practices, holding ourselves accountable to our communities and stakeholders.'
                },
                {
                  title: 'Excellence',
                  description: 'Striving for excellence in every aspect of our operations, from engineering to customer service and safety standards.'
                },
                {
                  title: 'Partnership',
                  description: 'Building strong collaborations with governments, industries, and communities to create shared value and accelerate energy transition.'
                }
              ].map((value, index) => (
                <div key={index} className="shadow-sm hover:shadow-lg transition-shadow p-8 rounded-lg border border-[#1a5f7a]/10">
                  <h3 className="text-[#1a5f7a] text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-[#1a5f7a]/80 text-sm leading-6">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2  md:mt-30">
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
            <section className="w-full py-16 px-4">
              <div className="max-w-[1060px] mx-auto">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  {[
                    { number: '25+', label: 'GW Capacity' },
                    { number: '50+', label: 'Countries' },
                    { number: '15+', label: 'Years Experience' },
                    { number: '10M+', label: 'Lives Powered' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <p className="text-[#1a5f7a] text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                      <p className="text-[#1a5f7a] text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-[#1a5f7a] text-3xl font-semibold text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Hassan Al-Mansouri',
                  title: 'Chief Executive Officer',
                  bio: 'Visionary leader with 20+ years in renewable energy, driving innovation in global power generation.',
                  image: '/professional-man-avatar-with-beard-and-glasses-loo.jpg'
                },
                {
                  name: 'Jennifer Walsh',
                  title: 'Chief Technology Officer',
                  bio: 'Expert in smart grid systems and energy storage, leading our technological advancement initiatives.',
                  image: '/professional-woman-avatar-with-short-brown-hair-an.jpg'
                },
                {
                  name: 'Amara Okonkwo',
                  title: 'Chief Sustainability Officer',
                  bio: 'Passionate advocate for climate action, ensuring all operations meet highest environmental standards.',
                  image: '/professional-person-avatar-with-curly-hair-and-war.jpg'
                }
              ].map((leader, index) => (
                <div key={index} className="border border-[#1a5f7a]/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="h-64 bg-[#1a5f7a]/10 relative overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#1a5f7a] text-xl font-semibold mb-1">{leader.name}</h3>
                    <p className="text-[#2b8c3e] text-sm font-medium mb-3">{leader.title}</p>
                    <p className="text-[#1a5f7a]/80 text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
</motion.div>  )
}
