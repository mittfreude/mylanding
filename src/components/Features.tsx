import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Cog, 
  Rocket, 
  Brain,
  Globe 
} from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning-fast performance' },
  { icon: Shield, title: 'Enterprise security' },
  { icon: BarChart3, title: 'Advanced analytics' },
  { icon: Users, title: 'Team collaboration' },
  { icon: Cog, title: 'Smart automation' },
  { icon: Rocket, title: 'Rapid deployment' },
  { icon: Brain, title: 'AI-powered insights' },
  { icon: Globe, title: 'Global scalability' },
]

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
