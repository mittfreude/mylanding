import React from 'react'
import { motion } from 'framer-motion'

const SecondaryHero = () => {
  return (
    <section className="section-padding bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your business deserves more than outdated tools. 
            Experience the future of productivity and growth.
          </motion.h2>

          {/* Description */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our platform provides a comprehensive solution for modern businesses looking to optimize their operations. 
              From intelligent automation to real-time analytics, we deliver the tools you need to stay ahead of the competition.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Instead of juggling multiple disconnected tools, our platform gives your business a unified digital home, 
              branded to be truly yours. It lets you take care of the most important aspects of running a business, 
              from automating workflows to analyzing performance, scaling operations, and managing team collaboration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              At the same time, giving your team easy access to all the data and tools they need, 
              with powerful integration capabilities and worldwide scalability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SecondaryHero
