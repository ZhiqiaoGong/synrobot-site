'use client'

import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: 'Real-time Posture Detection',
      description: 'Advanced computer vision algorithms analyze body positioning with sub-degree precision, providing instant feedback on posture alignment and movement patterns.',
      icon: '🎯',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Biomechanical Analysis',
      description: 'Comprehensive movement analysis using machine learning models trained on biomechanical data, delivering professional-grade insights for optimization.',
      icon: '🔬',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Movement Pattern Recognition',
      description: 'Intelligent pattern recognition identifies repetitive movements, asymmetries, and potential injury risks through continuous motion tracking.',
      icon: '📊',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI-Powered Insights',
      description: 'Neural networks process complex movement data to generate actionable recommendations for posture improvement and injury prevention.',
      icon: '🧠',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI technology meets biomechanical expertise to deliver 
            unprecedented insights into human movement and posture analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="card-gradient rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '25+', label: 'Body Points Tracked' },
            { value: '60fps', label: 'Analysis Rate' },
            { value: '15+', label: 'Movement Metrics' },
            { value: '3D', label: 'Spatial Analysis' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-gray-600 mt-2 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}