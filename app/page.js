'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Demo from './components/Demo'
import Note from './components/Note'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Demo />
      <Note />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
