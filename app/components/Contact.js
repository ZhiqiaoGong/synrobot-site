'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-accent-400">Started?</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Experience the future of biomechanical analysis. Contact us to learn more 
            about implementing Exbody2 in your organization or research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-accent-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-accent-400 transition-colors duration-300"
                  />
                </div>
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-accent-400 transition-colors duration-300"
              />
              
              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-accent-400 transition-colors duration-300"
              />
              
              <textarea
                rows="4"
                placeholder="Tell us about your project or questions..."
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-accent-400 transition-colors duration-300 resize-none"
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold py-4 rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: '📧',
                    title: 'Email',
                    info: 'zqgong8@gmail.com',
                    desc: 'For general inquiries and support'
                  },
                  {
                    icon: '💼',
                    title: 'LinkedIn',
                    info: '/in/zhiqiao-gong',
                    desc: 'Connect for professional opportunities'
                  },
                  {
                    icon: '💻',
                    title: 'GitHub',
                    info: '/zhiqiao-gong',
                    desc: 'View my development portfolio'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-accent-300 font-medium">{item.info}</p>
                      <p className="text-primary-200 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-3xl p-8 border border-accent-400/30"
            >
              <h4 className="text-xl font-bold mb-4">Ready for a Demo?</h4>
              <p className="text-primary-100 mb-6">
                Schedule a personalized demonstration of Exbody2's capabilities 
                and see how it can transform your biomechanical analysis workflow.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors duration-300"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
