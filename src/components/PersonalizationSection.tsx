import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Image, Type, Link2 } from 'lucide-react'

const PersonalizationSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Customize everything to match your brand. Create experiences that truly represent your business.
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Build a platform that reflects your company's unique identity. From custom branding to tailored workflows, 
            create an environment where your team thrives and your customers receive exceptional experiences.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Customization Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Image className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  White-label branding & custom themes
                </h3>
                <p className="text-gray-700">
                  Apply your brand colors, logos, and custom themes across the entire platform. Create a consistent experience that matches your corporate identity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Type className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Custom domains & personalized URLs
                </h3>
                <p className="text-gray-700">
                  Use your own domain and create branded URLs that reinforce your professional image and build customer trust.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Link2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  API customization & third-party integrations
                </h3>
                <p className="text-gray-700">
                  Extend functionality with custom integrations and API connections. Build exactly what your business needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Role-based permissions & user management
                </h3>
                <p className="text-gray-700">
                  Configure detailed user roles and permissions to ensure the right people have access to the right features and data.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-semibold text-gray-900">
                Build a platform that's uniquely yours.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Portal Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Portal Card */}
              <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Header with gradient */}
                  <div className="h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 relative">
                    <div className="absolute bottom-4 left-6">
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                        <span className="text-xl font-bold text-purple-600">JD</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">YourCompany Inc</h3>
                    <p className="text-gray-600 mb-4">Transforming businesses with innovative solutions</p>
                    
                    {/* Platform details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Enterprise Plan</span>
                        <span className="font-semibold text-gray-900">Custom</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Setup Time</span>
                        <span className="font-semibold text-gray-900">24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Features</span>
                        <span className="font-semibold text-gray-900">All Included</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                      Get Started
                    </button>

                    {/* Portfolio links */}
                    <div className="flex justify-center space-x-4 mt-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full opacity-80"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizationSection
