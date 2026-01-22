'use client'

import React from "react"
import Footer from '@/components/footer' // Declare the Footer variable

import { useState } from 'react'
import { Header } from '@/components/header'
import FooterSection from '@/components/footer-section'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-center text-[#1a5f7a] text-5xl md:text-6xl font-semibold leading-tight">
              Get In Touch
            </h1>
            <p className="max-w-[700px] text-center text-[#1a5f7a]/80 text-lg leading-7">
              Have a question about our services or ready to partner with Zarein Energy? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="w-full py-16 px-4">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Card 1 */}
            <div className="bg-gradient-to-br from-white to-[#f0fafb] p-8 rounded-lg border border-[#1a5f7a]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📍</span>
                </div>
                <h3 className="text-[#1a5f7a] font-semibold">Our Office</h3>
              </div>
              <p className="text-[#1a5f7a]/80 text-sm leading-6">
                Zarein Energy Limited<br />
                Energy Building, 42 Sustainable Street<br />
                Dubai, UAE 30120
              </p>
            </div>

            {/* Contact Info Card 2 */}
            <div className="bg-gradient-to-br from-white to-[#f0fafb] p-8 rounded-lg border border-[#1a5f7a]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📞</span>
                </div>
                <h3 className="text-[#1a5f7a] font-semibold">Phone</h3>
              </div>
              <p className="text-[#1a5f7a]/80 text-sm leading-6">
                General Inquiries:<br />
                <a href="tel:+971-4-XXX-XXXX" className="text-[#1a5f7a] hover:text-[#2b8c3e] font-medium">
                  +971-4-XXX-XXXX
                </a><br />
                <br />
                Support Hotline:<br />
                <a href="tel:+971-800-ZAREIN" className="text-[#1a5f7a] hover:text-[#2b8c3e] font-medium">
                  +971-800-ZAREIN
                </a>
              </p>
            </div>

            {/* Contact Info Card 3 */}
            <div className="bg-gradient-to-br from-white to-[#f0fafb] p-8 rounded-lg border border-[#1a5f7a]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a5f7a] to-[#2b8c3e] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📧</span>
                </div>
                <h3 className="text-[#1a5f7a] font-semibold">Email</h3>
              </div>
              <p className="text-[#1a5f7a]/80 text-sm leading-6">
                General:<br />
                <a href="mailto:info@zareinenergy.com" className="text-[#1a5f7a] hover:text-[#2b8c3e] font-medium">
                  info@zareinenergy.com
                </a><br />
                <br />
                Support:<br />
                <a href="mailto:support@zareinenergy.com" className="text-[#1a5f7a] hover:text-[#2b8c3e] font-medium">
                  support@zareinenergy.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-[#f0fafb] p-10 rounded-lg border border-[#1a5f7a]/10">
              <h2 className="text-[#1a5f7a] text-2xl font-semibold mb-2">Send us a Message</h2>
              <p className="text-[#1a5f7a]/80 text-sm mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-[#2b8c3e]/10 border border-[#2b8c3e] rounded-lg p-4">
                  <p className="text-[#2b8c3e] font-medium">
                    ✓ Thank you for your message! We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1a5f7a] text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a5f7a] text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1a5f7a] text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#1a5f7a] text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
                    >
                      <option value="">Select a subject</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Career Opportunities">Career Opportunities</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#1a5f7a] text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] hover:from-[#0f4a61] hover:to-[#1f6a2f] text-white font-medium py-3 rounded-lg transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="w-full py-16 px-4 bg-gradient-to-b from-[#f0fafb] to-white">
        <div className="max-w-[1060px] mx-auto">
          <h2 className="text-[#1a5f7a] text-3xl font-semibold text-center mb-12">How We Can Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Project Inquiries',
                description: 'Interested in developing a renewable energy project? Our team can discuss feasibility, design, and implementation strategies tailored to your needs.'
              },
              {
                title: 'Technical Support',
                description: 'Need assistance with existing systems? Our 24/7 technical support team is ready to help with maintenance, troubleshooting, and optimization.'
              },
              {
                title: 'Partnership Opportunities',
                description: 'Explore collaboration opportunities with Zarein Energy. We partner with innovative companies to expand our global reach and impact.'
              },
              {
                title: 'Consulting Services',
                description: 'Leverage our expertise for energy audits, feasibility studies, and strategic planning to maximize your renewable energy potential.'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-3 p-6 bg-white border border-[#1a5f7a]/10 rounded-lg">
                <h3 className="text-[#1a5f7a] font-semibold">{item.title}</h3>
                <p className="text-[#1a5f7a]/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
