import React from 'react'
import { motion } from 'framer-motion'

const ProjectTypes = () => {
  const metrics = [
    { metric: 'Revenue Growth', value: '+284%', status: 'up' },
    { metric: 'Customer Acquisition', value: '+156%', status: 'up' },
    { metric: 'Process Efficiency', value: '+92%', status: 'up' },
    { metric: 'Cost Reduction', value: '-34%', status: 'down' },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive platform for businesses of all sizes. 
            Scale operations, optimize workflows, track performance, and achieve sustainable growth.
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
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Flexible solutions for startups, enterprises, and everything in between
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a growing startup or an established enterprise, our platform adapts to your needs. 
                  Customize workflows, integrate with existing tools, and scale seamlessly as your business grows.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Automate repetitive tasks and focus on strategic initiatives
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Eliminate manual processes with intelligent automation. Our platform learns from your patterns 
                  and optimizes workflows, giving your team more time to focus on high-value activities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Real-time insights and data-driven decision making
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access comprehensive analytics and reporting tools that provide actionable insights. 
                  Make informed decisions with real-time data visualization and predictive analytics.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Enterprise-grade security and compliance built-in
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your data is protected with industry-leading security measures. We maintain compliance with 
                  major standards and regulations, giving you peace of mind and meeting your governance requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Payment Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              {/* Performance alerts */}
              <div className="space-y-4 mb-8">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold text-blue-800">Performance Alert</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-800">+25% Growth</div>
                      <div className="text-sm text-blue-600">Live</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Metrics list */}
              <div className="space-y-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.metric}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <div className="font-semibold text-gray-900">{metric.metric}</div>
                      <div className="text-sm text-gray-600">{metric.value} • trending {metric.status}</div>
                    </div>
                    <div className={`w-3 h-3 ${metric.status === 'up' ? 'bg-green-500' : 'bg-orange-500'} rounded-full`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectTypes
