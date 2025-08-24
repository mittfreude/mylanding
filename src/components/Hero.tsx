import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-32 bg-gradient-to-b from-indigo-600 to-blue-500 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Build an operations command center your whole team will love
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-indigo-100 mb-10">
          Portal combines payments, messaging and client collaboration into a single platform so you can run your business without switching tools.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
          Start for free
        </button>
      </div>

      {/* 3D mockup window */}
      <div className="mt-20 flex justify-center">
        <div style={{ perspective: '1200px' }} className="relative">
          <div
            className="relative w-[750px] max-w-full h-[450px] bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{
              transform: 'rotateX(15deg) rotateY(-5deg)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="flex items-center h-10 px-4 bg-gray-100 border-b border-gray-200 relative">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-500">
                Your Beautiful Toolkit
              </div>
            </div>
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Portal-Style 3D Effect
              </h2>
              <p className="text-gray-600 max-w-md text-center mb-6">
                This mockup recreates the perspective effect from Portal's website with smooth transforms and depth.
              </p>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80"
            style={{ top: '20%', left: '-40px' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80"
            style={{ bottom: '10%', right: '-40px' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

