import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Send, CheckCircle, Download, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Sign up and configure your workspace',
    description: 'Create your account and set up your workspace with custom branding, team members, and initial configurations tailored to your business needs.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Send,
    title: 'Connect your existing tools and data',
    description: 'Integrate with your current systems using our extensive API library or pre-built connectors. Import your data and establish workflows.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: CheckCircle,
    title: 'Configure automation and workflows',
    description: 'Set up intelligent automation rules, approval processes, and notification systems that match your business operations and requirements.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Download,
    title: 'Launch and train your team',
    description: 'Go live with your new platform. Provide training to your team members and start experiencing improved productivity and streamlined operations.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: DollarSign,
    title: 'Scale and optimize continuously',
    description: 'Monitor performance through our analytics dashboard, optimize workflows based on insights, and scale your operations as your business grows.',
    color: 'from-pink-500 to-pink-600'
  }
]

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            From setup to success. Here's how it works.
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Getting started with our platform and seeing real results takes just five straightforward steps. 
            Simple, powerful, effective.
          </motion.p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual */}
                <div className={isEven ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1 lg:row-start-1'}>
                  <motion.div
                    className={`relative bg-gradient-to-br ${step.color} rounded-3xl p-8 shadow-2xl`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${step.color} text-transparent`} style={{
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }} />
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Step {index + 1}</h4>
                        <p className="text-sm text-gray-600">{step.title}</p>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-4 h-4 bg-white/50 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-3 h-3 bg-white/30 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
