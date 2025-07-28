'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-32">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-bg opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* main */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-gradient">Synrobot</span>
            <br />
            <span className="text-gray-800">Where Robotics Meet Humanity</span>

          </motion.h1>

          {/* sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering next-gen robots with real-time motion mimicry and biomechanical intelligence.
 
            <strong className="text-primary-600"> Exbody2</strong> is our flagship solution for real-time biomechanical mimicry.
          </motion.p>

          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#features" className="btn-primary text-lg px-10 py-5">
              <span>Learn More</span>
            </a>
            <a href="#demo" className="btn-secondary text-lg px-8 py-4">
              Watch Product Demo
            </a>
          </motion.div>

          {/* videos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center pt-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Explore Exbody2 in Action</h2>
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sE4cEfhVOdE"
                title="ExBody Full Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200 mb-16"
          >
            {[
              { value: '99.5%', label: 'Accuracy Rate' },
              { value: '<30ms', label: 'Response Time' },
              { value: '24/7', label: 'Real-time Analysis' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
