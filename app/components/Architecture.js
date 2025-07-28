'use client'

import { motion } from 'framer-motion'

export default function Architecture() {
  const architectureFlow = [
    { step: 'Video Input', desc: 'Camera feed or video file input', icon: '📹' },
    { step: 'Computer Vision', desc: 'Real-time pose detection and keypoint extraction', icon: '👁️' },
    { step: 'AI Processing', desc: 'Neural network analysis of movement patterns', icon: '🤖' },
    { step: 'Biomechanical Analysis', desc: 'Calculate angles, velocities, and movement metrics', icon: '📐' },
    { step: 'Insights Generation', desc: 'Generate actionable recommendations and reports', icon: '💡' },
  ]

  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            System <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI pipeline processes visual data through multiple stages 
            to deliver precise biomechanical insights in real-time.
          </p>
        </motion.div>

        {/* Architecture Flow Diagram */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-center mb-16">
              {architectureFlow.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center relative"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-center">{item.step}</h3>
                  <p className="text-sm text-gray-600 text-center max-w-32">{item.desc}</p>
                  
                  {/* Arrow */}
                  {index < architectureFlow.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -right-16 top-8 text-primary-400"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {architectureFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-xl shadow-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                
                {/* Arrow */}
                {index < architectureFlow.length - 1 && (
                  <div className="absolute -bottom-4 left-8 text-primary-400">
                    <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Models</h4>
              <p className="text-gray-600 text-sm">TensorFlow & PyTorch based neural networks for pose estimation and movement analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
              <p className="text-gray-600 text-sm">Real-time processing at 60fps with sub-30ms latency for immediate feedback</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
              <p className="text-gray-600 text-sm">99.5% precision in pose detection with advanced error correction algorithms</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}