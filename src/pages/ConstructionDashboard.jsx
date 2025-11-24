import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, DollarSign, TrendingUp } from 'lucide-react'

const ConstructionDashboard = () => {
  const stats = [
    { icon: BarChart3, label: 'Projects', value: '12', change: '+2' },
    { icon: Users, label: 'Team Members', value: '24', change: '+5' },
    { icon: DollarSign, label: 'Revenue', value: '$124K', change: '+12%' },
    { icon: TrendingUp, label: 'Efficiency', value: '94%', change: '+3%' },
  ]

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Construction Dashboard</h1>
          <p className="text-gray-300">Manage your projects and track performance</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  <span className="text-gray-400 text-sm ml-1">from last month</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="text-gray-300">
            <p>Your construction projects and analytics will appear here.</p>
            <p className="mt-2">This dashboard is under development.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConstructionDashboard
