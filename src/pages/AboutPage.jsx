import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best AI-powered solutions for content generation',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of construction professionals',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering excellence in every aspect of our service',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Enterprise-grade reliability and security for your business',
    },
  ]

  const team = [
    { name: 'John Doe', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Jane Smith', role: 'CTO', image: '👩‍💻' },
    { name: 'Mike Johnson', role: 'Lead Product Designer', image: '👨‍🎨' },
    { name: 'Sarah Williams', role: 'Head of Customer Success', image: '👩‍💼' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              HashGen Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming the construction industry with AI-powered content generation and management tools
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 glass-effect rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            HashGen Pro was founded in 2024 with a simple mission: to empower construction professionals with cutting-edge AI technology.
            We noticed that construction businesses were struggling with social media presence and content creation while managing complex projects.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, we serve thousands of construction companies worldwide, helping them generate engaging content, manage their online presence,
            and grow their business. Our platform leverages advanced AI algorithms to deliver personalized, relevant hashtags and descriptions
            that resonate with their target audience.
          </p>
        </motion.section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass-effect rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '50K+', label: 'Hashtags Generated Daily' },
            { number: '99.9%', label: 'Uptime' },
            { number: '50+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass-effect border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <Link
            to="/register"
            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
