import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-indigo-900/50" />
      
      {/* Bottom Fade to White */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* Animated Stars/Sparkles */}
      <motion.div
        className="absolute top-24 left-8 text-white/60"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={24} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-12 text-white/40"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.8, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Sparkles size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 text-white/30"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Sparkles size={16} />
      </motion.div>

      {/* Twinkle Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Text Content */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your beautiful business platform.
          <br className="hidden sm:block" />
          <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-100 font-normal">
            Streamline operations and accelerate growth
          </span>
        </motion.h1>

        {/* Desktop Description */}
        <motion.div 
          className="hidden sm:block max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-blue-50 leading-relaxed">
            Transform your business with our cutting-edge platform. 
            Eliminate inefficiencies, automate workflows, and scale faster than ever. 
            Our innovative solution empowers teams to focus on what matters most while we handle the complexity behind the scenes.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <button className="bg-white/90 hover:bg-white text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm border border-white/20">
            Start Free Trial
          </button>
        </motion.div>

        {/* Large Product Mockup - Portal Style */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Main Large Mockup Window */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30 transform rotate-[-2deg] hover:rotate-0 transition-all duration-700">
            {/* Window Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-base text-gray-600 font-medium">StartupName Dashboard</div>
              <div className="w-8 h-8"></div>
            </div>

            {/* Large Window Content */}
            <div className="p-8 space-y-8">
              {/* Top Section with large image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold mb-2">Your Platform</div>
                    <div className="text-lg opacity-90">Beautiful Dashboard Interface</div>
                  </div>
                </div>
                {/* Floating UI elements */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-white text-sm font-medium">Live Analytics</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 min-w-[200px]">
                  <div className="text-sm text-gray-700 font-medium">Revenue Growth</div>
                  <div className="text-2xl font-bold text-green-600">+284%</div>
                </div>
              </div>

              {/* Bottom Stats Grid */}
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600">2.4K</div>
                  <div className="text-sm text-blue-600 font-medium">Active Users</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600">$124K</div>
                  <div className="text-sm text-green-600 font-medium">Revenue</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-purple-600 font-medium">Uptime</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600">156</div>
                  <div className="text-sm text-orange-600 font-medium">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -top-8 -right-8 bg-blue-500 text-white rounded-full px-6 py-3 font-semibold text-sm shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨ Live Demo
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
