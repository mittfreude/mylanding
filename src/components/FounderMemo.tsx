import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const FounderMemo = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet our leadership</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Quote Section - Takes up 2 columns */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Quote className="w-12 h-12 text-blue-600 mb-6 opacity-50" />
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Building exceptional products requires a deep understanding of real business challenges. We believe the best solutions come from teams that have experienced these problems firsthand.
                </p>
                <p>
                  Technology should empower businesses to focus on what they do best, not struggle with complex systems and inefficient processes. That's why we've dedicated ourselves to creating platforms that are both powerful and intuitive, scalable yet simple to implement.
                </p>
                <p>
                  Our mission is to democratize access to enterprise-grade tools, making them accessible to businesses of all sizes. We're committed to continuous innovation, listening to our customers, and evolving our platform based on real-world feedback and emerging market needs.
                </p>
                <p>
                  We're just getting started on this journey. Join thousands of businesses already transforming their operations with our platform. Together, we're building the future of business technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founder Info - Takes up 1 column */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              {/* Founder Avatar */}
              <motion.div 
                className="relative inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">JS</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">John Smith</h3>
                <p className="text-lg text-gray-600 font-medium">CEO & Founder</p>
                <p className="text-sm text-gray-500">Building the future from San Francisco</p>
              </div>

              {/* Social Links */}
              <div className="mt-6 space-y-3">
                <motion.a 
                  href="#" 
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → LinkedIn Profile
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → Company Blog
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → Industry Insights
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → Follow on Twitter
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to transform your business? Start your free trial today.
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join thousands of successful businesses already using our platform. 
              Experience the power of streamlined operations, intelligent automation, and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-12 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-12 py-4">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderMemo
