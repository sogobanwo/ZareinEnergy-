'use client'

import { Header } from '@/components/header'
import FooterSection from '@/components/footer-section'

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-center text-[#1a5f7a] text-5xl md:text-6xl font-semibold leading-tight">
              About Zarein Energy
            </h1>
            <p className="max-w-[700px] text-center text-[#1a5f7a]/80 text-lg leading-7">
              Leading the global transition to sustainable energy through innovation, reliability, and commitment to a cleaner future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-white to-[#f0fafb]">
        <div className="max-w-[1060px] mx-auto">
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
              <div key={index} className="bg-gradient-to-br from-white to-[#f0fafb] p-8 rounded-lg border border-[#1a5f7a]/10">
                <h3 className="text-[#1a5f7a] text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-[#1a5f7a]/80 text-sm leading-6">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e]">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: 'GW Capacity' },
              { number: '50+', label: 'Countries' },
              { number: '15+', label: 'Years Experience' },
              { number: '10M+', label: 'Lives Powered' }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-white text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
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
                bio: 'Visionary leader with 20+ years in renewable energy, driving innovation in global power generation.'
              },
              {
                name: 'Jennifer Walsh',
                title: 'Chief Technology Officer',
                bio: 'Expert in smart grid systems and energy storage, leading our technological advancement initiatives.'
              },
              {
                name: 'Amara Okonkwo',
                title: 'Chief Sustainability Officer',
                bio: 'Passionate advocate for climate action, ensuring all operations meet highest environmental standards.'
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white border border-[#1a5f7a]/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e]"></div>
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

      <FooterSection /> {/* Use the declared Footer component */}
    </div>
  )
}
