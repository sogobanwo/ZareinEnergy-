'use client'

import { Header } from '@/components/header'
import FooterSection from '@/components/footer-section'
import Footer from '@/components/footer' // Declare the Footer variable

export default function ProjectsPage() {
  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-center text-[#1a5f7a] text-5xl md:text-6xl font-semibold leading-tight">
              Our Projects
            </h1>
            <p className="max-w-[700px] text-center text-[#1a5f7a]/80 text-lg leading-7">
              Showcasing our most impactful renewable energy installations transforming communities across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-16 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="space-y-12">
            {/* Project 1: Solar Farm */}
            <div className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
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
            </div>

            {/* Project 2: Wind Farm */}
            <div className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
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
            </div>

            {/* Project 3: Hydro */}
            <div className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
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
            </div>

            {/* Project 4: Energy Storage */}
            <div className="grid md:grid-cols-2 gap-8 items-center border-b border-[#1a5f7a]/10 pb-12">
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
            </div>

            {/* Project 5: Smart Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e]">
        <div className="max-w-[1060px] mx-auto">
          <h2 className="text-white text-3xl font-semibold text-center mb-12">Our Collective Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+ GW', label: 'Total Capacity' },
              { number: '50M+ tons', label: 'CO2 Prevented' },
              { number: '200M+', label: 'Lives Powered' },
              { number: '50+ Countries', label: 'Global Presence' }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-white text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection /> {/* Use the Footer component */}
    </div>
  )
}
