'use client'

import { Header } from '@/components/header'
import FooterSection from '@/components/footer-section'

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-center text-[#1a5f7a] text-5xl md:text-6xl font-semibold leading-tight">
              Our Services
            </h1>
            <p className="max-w-[700px] text-center text-[#1a5f7a]/80 text-lg leading-7">
              Comprehensive energy solutions designed to meet the unique needs of businesses, governments, and communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Solar Energy Solutions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2b8c3e] to-[#1a5f7a] rounded-lg flex items-center justify-center">
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
            </div>

            {/* Wind Energy Solutions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg flex items-center justify-center">
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
            </div>

            {/* Hydroelectric Solutions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2b8c3e] to-[#1a5f7a] rounded-lg flex items-center justify-center">
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
            </div>

            {/* Energy Storage Solutions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg flex items-center justify-center">
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
            </div>

            {/* Smart Grid Solutions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2b8c3e] to-[#1a5f7a] rounded-lg flex items-center justify-center">
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
            </div>

            {/* Consulting & Integration */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-[#f0fafb] to-white">
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
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-[#1a5f7a] font-semibold">{item.title}</h3>
                <p className="text-[#1a5f7a]/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection /> {/* Use Footer component */}
    </div>
  )
}
