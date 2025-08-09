import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Gift, Clock, RefreshCw, MousePointer } from 'lucide-react'

const PaymentSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Stop struggling with complex systems. Experience seamless integration instead.
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Streamline your operations with our intuitive platform. Connect all your tools, 
            automate workflows, and access real-time insights that drive better business decisions. 
            Join leading companies already transforming their operations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Connect with 1000+ integrations seamlessly
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Integrate with your existing tech stack effortlessly. From CRM systems to analytics tools, 
                  connect everything through our unified API platform.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Automated workflows & smart notifications
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Set up intelligent automation that adapts to your business needs. 
                  Receive contextual alerts and let our AI handle routine tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Real-time collaboration across teams
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Enable seamless collaboration with shared workspaces, instant messaging, 
                  and synchronized project management across your entire organization.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scalable infrastructure & 99.9% uptime
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Built on enterprise-grade infrastructure that scales with your growth. 
                  Guaranteed reliability with comprehensive monitoring and automatic failover.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Payment Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Command Center</h3>
                  <p className="text-gray-600">Unified dashboard for all operations</p>
                </div>

                {/* Integration grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {['Salesforce', 'Slack', 'Hubspot', 'Shopify', 'Zoom', 'GitHub'].map((integration, index) => (
                    <motion.div
                      key={integration}
                      className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {integration}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-600 text-white rounded-xl p-4 mb-4 flex items-center justify-center space-x-2 cursor-pointer hover:bg-blue-700 transition-colors">
                    <MousePointer className="w-5 h-5" />
                    <span className="font-semibold">Connect everything with one simple click.</span>
                  </div>
                  <p className="text-sm text-gray-500">Enterprise-grade security & compliance</p>
                </motion.div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PaymentSection
