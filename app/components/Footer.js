'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold text-gradient tracking-wide">Synrobot</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Synrobot is an AI robotics company where human movement meets machine intelligence.
              We build intuitive, responsive systems for healthcare, sports, and humanoid robotics — including our flagship product, Exbody.
            </p>
            <div className="flex space-x-4">
              {['📧', '💼', '💻', '🐦'].map((icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Architecture', 'Demo', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Tutorials', 'Support'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Synrobot Inc. All rights reserved. Exbody is a registered product of Synrobot.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
