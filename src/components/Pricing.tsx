import React from 'react'
import { motion } from 'framer-motion'
import { Check, TrendingUp } from 'lucide-react'

const Pricing = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Simple, transparent pricing.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Choose the plan that fits your business size and needs.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  From startups to enterprise, we have flexible pricing options that scale with your growth. 
                  Start free and upgrade when you're ready.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  All plans include core features, dedicated support, and regular updates. 
                  Enterprise customers get additional customization and priority support.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">ROI that speaks for itself</h4>
                    <p className="text-blue-800">
                      Our customers typically see 3x ROI within the first 6 months. 
                      Increased efficiency and automation savings more than pay for the platform cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">What you get:</h4>
                <ul className="space-y-3">
                  {[
                    'Unlimited users and workspaces',
                    'Advanced analytics and reporting',
                    'Custom integrations and API access',
                    'Enterprise-grade security',
                    '24/7 priority support',
                    'Custom branding and white-labeling',
                    'Automated workflows and approvals',
                    'Regular feature updates'
                  ].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main pricing card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border-2 border-blue-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl font-bold text-blue-600">%</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Flexible Plans
                  </h3>
                  <p className="text-gray-600">Scale as you grow</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-gray-900">$49</span>
                    <span className="text-lg text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">Starting price - scales with usage</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Free trial</span>
                    <span className="font-semibold text-green-600">14 days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Setup fees</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Contract required</span>
                    <span className="font-semibold text-green-600">No</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">Cancel anytime</span>
                    <span className="font-semibold text-blue-600">Yes</span>
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Start Free Trial
                </button>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-50 to-blue-50 rounded-full transform -translate-x-12 translate-y-12 opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
