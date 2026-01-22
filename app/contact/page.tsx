'use client'


import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { PageShell } from "@/components/page-shell"
import { motion } from "framer-motion"

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
              Get In Touch
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(26,95,122,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm"
            >
              Have a question about our services or ready to partner 
              <br className="hidden sm:block" />
              with Zarein Energy? We'd love to hear from you.
            </motion.div>
          </div>
        </div>

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

        {/* Contact Information & Form */}
        <section className="w-full py-8 sm:py-12 md:py-16 px-4 relative z-10 mt-8 sm:mt-12 md:mt-16">
          <div className="max-w-[1060px] mx-auto">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <div className="p-5 sm:p-7 md:p-10 rounded-lg border border-[#1a5f7a]/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="text-[#1a5f7a] text-xl sm:text-2xl font-semibold mb-2">Send us a Message</h2>
                <p className="text-[#1a5f7a]/80 text-sm mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="bg-[#2b8c3e]/10 border border-[#2b8c3e] rounded-lg p-4">
                    <p className="text-[#2b8c3e] font-medium">
                      ✓ Thank you for your message! We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
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
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
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
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a]"
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-[#1a5f7a]/20 rounded-lg focus:outline-none focus:border-[#1a5f7a] text-[#1a5f7a] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1a5f7a] to-[#2b8c3e] hover:from-[#0f4a61] hover:to-[#1f6a2f] text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Contact Info Card 1 */}
              <div className="p-5 sm:p-6 md:p-8 rounded-lg border border-[#1a5f7a]/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#1a5f7a] rounded-lg flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg">📍</span>
                  </div>
                  <h3 className="text-[#1a5f7a] font-semibold text-sm sm:text-base">Our Office</h3>
                </div>
                <p className="text-[#1a5f7a]/80 text-sm leading-6">
                  Zarein Energy Limited<br />
                  Energy Building, 42 Sustainable Street<br />
                  Dubai, UAE 30120
                </p>
              </div>

              {/* Contact Info Card 2 */}
              <div className="p-5 sm:p-6 md:p-8 rounded-lg border border-[#1a5f7a]/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#1a5f7a] rounded-lg flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg">📞</span>
                  </div>
                  <h3 className="text-[#1a5f7a] font-semibold text-sm sm:text-base">Phone</h3>
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
              <div className="p-5 sm:p-6 md:p-8 rounded-lg border border-[#1a5f7a]/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#1a5f7a] rounded-lg flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg">📧</span>
                  </div>
                  <h3 className="text-[#1a5f7a] font-semibold text-sm sm:text-base">Email</h3>
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
            </motion.div>

            
          </div>
        </section>

        {/* Additional Info */}
        <section className="w-full py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-[#1a5f7a] text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-10 md:mb-12">How We Can Help</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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
                <div key={index} className="flex flex-col gap-3 p-5 sm:p-6 border border-[#1a5f7a]/10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-[#1a5f7a] font-semibold text-sm sm:text-base">{item.title}</h3>
                  <p className="text-[#1a5f7a]/80 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </motion.div>
  )
}
