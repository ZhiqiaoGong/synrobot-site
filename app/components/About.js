'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Synrobot</h2>
          {/* <p className="text-xl text-primary-600 font-medium mb-6">Where Robotics Meet Humanity</p> */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Synrobot is an AI-driven robotics company dedicated to bridging the gap between human motion and intelligent machines.
            We specialize in biomechanical analysis, real-time motion tracking, and human-robot interaction technologies.
          </p>
          {/* <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-6">
            Our flagship product, <strong>Exbody2</strong>, showcases this vision by enabling natural and precise whole-body motion replication.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/images/ucsd.jpg"
            alt="Exbody2 Product Showcase"
            className="rounded-3xl shadow-xl"
          />

          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              At Synrobot, we envision a future where robots not only understand human movement but respond in real time with empathy and precision.
              Our work supports diverse domains — from assistive robotics and rehabilitation to sports performance and motion learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
