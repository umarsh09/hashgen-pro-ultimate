import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Rocket, BarChart3, Zap, Shield, ArrowRight, Play } from 'lucide-react'

const HomePage = () => {
  const features = [
    { icon: Rocket, title: 'AI-Powered Generation', description: 'Generate smart hashtags and descriptions using advanced AI algorithms' },
    { icon: BarChart3, title: 'Construction Analytics', description: 'Track project performance and social media engagement metrics' },
    { icon: Zap, title: 'Real-time Processing', description: 'Instant content generation with real-time optimization' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security for your construction data' },
  ]

  const stats = [
    { number: '10K+', label: 'Projects Managed' },
    { number: '50K+', label: 'Hashtags Generated' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              Build Better with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                HashGen Pro
              </span>
            </motion.h1>
            
            <motion.p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              Advanced construction management platform with AI-powered content generation. Streamline your projects and enhance your social media presence.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <Link to="/generator" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-2xl">
                <span>Start Generating</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm border border-white/20">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + index * 0.1 }} className="text-center p-6 rounded-2xl glass-effect hover:bg-white/5 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Construction Pros
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Everything you need to manage construction projects and create engaging content</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} whileHover={{ y: -10, scale: 1.05 }} className="p-6 rounded-2xl glass-effect hover:bg-white/5 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Construction Business?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of construction professionals using HashGen Pro</p>
            <Link to="/register" className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
