'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState(0)

  const demoItems = [
    {
      title: 'Real-time Posture Analysis',
      description: 'Watch as our AI analyzes posture in real-time, providing instant feedback on alignment and positioning.',
      type: 'video',
      videoUrl: '/videos/posture.mp4'
    },
    {
      title: 'Movement Pattern Detection',
      description: 'Advanced algorithms identify repetitive movements and potential areas for improvement.',
      type: 'video',
      videoUrl: '/videos/movement.mp4'
    },
    {
      title: 'Biomechanical Insights',
      description: 'Comprehensive reports showing joint angles, movement efficiency, and personalized recommendations.',
      type: 'video',
      videoUrl: '/videos/insights.mp4'
    }
  ]
  
  

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Exbody in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven biomechanical analysis through our 
            interactive demos and real-world applications.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Demo Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-4"
          >
            {demoItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveDemo(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-white shadow-lg border-2 border-primary-200'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <h3 className={`font-semibold mb-2 ${
                  activeDemo === index ? 'text-primary-600' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {demoItems[activeDemo].type === 'video' ? (
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-96"
                >
                  <video
                    src={demoItems[activeDemo].videoUrl}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </motion.div>
              ) : (
                <motion.img
                  key={activeDemo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={demoItems[activeDemo].image}
                  alt={demoItems[activeDemo].title}
                  className="w-full h-96 object-cover"
                />
              )}

              
              {/* Demo Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{demoItems[activeDemo].title}</h3>
                  <p className="text-gray-200">{demoItems[activeDemo].description}</p>
                </div>
              </div>
              {demoItems[activeDemo].type !== 'video' && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                  <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.button>
              )}

            </div>
          </motion.div>
        </div>

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: '🎥', 
              title: 'Live Demo', 
              desc: 'Try the system with your webcam',
              action: 'Start Camera'
            },
            { 
              icon: '📱', 
              title: 'Mobile App', 
              desc: 'Download our mobile application',
              action: 'Get App'
            },
            { 
              icon: '🔗', 
              title: 'API Access', 
              desc: 'Integrate with your applications',
              action: 'View Docs'
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.desc}</p>
              <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300">
                {feature.action} →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}