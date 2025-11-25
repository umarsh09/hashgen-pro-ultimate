import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, DollarSign, TrendingUp, Plus, Edit2, Trash2, MapPin, Calendar } from 'lucide-react'

const ConstructionDashboard = () => {
  const stats = [
    { icon: BarChart3, label: 'Projects', value: '12', change: '+2' },
    { icon: Users, label: 'Team Members', value: '24', change: '+5' },
    { icon: DollarSign, label: 'Revenue', value: '$124K', change: '+12%' },
    { icon: TrendingUp, label: 'Efficiency', value: '94%', change: '+3%' },
  ]

  const projects = [
    {
      id: 1,
      name: 'Downtown Commercial Complex',
      location: 'New York, NY',
      status: 'In Progress',
      completion: 65,
      startDate: '2024-01-15',
      budget: '$2.5M',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Residential Development',
      location: 'Austin, TX',
      status: 'Planning',
      completion: 25,
      startDate: '2024-03-01',
      budget: '$1.8M',
      color: 'purple',
    },
    {
      id: 3,
      name: 'Retail Center Renovation',
      location: 'Los Angeles, CA',
      status: 'Completed',
      completion: 100,
      startDate: '2023-06-15',
      budget: '$900K',
      color: 'green',
    },
    {
      id: 4,
      name: 'Industrial Warehouse',
      location: 'Houston, TX',
      status: 'In Progress',
      completion: 78,
      startDate: '2024-02-10',
      budget: '$3.2M',
      color: 'orange',
    },
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'Planning':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Construction Dashboard</h1>
            <p className="text-gray-300">Manage your projects and track performance</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <Plus className="h-5 w-5" />
            <span>New Project</span>
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
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

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Active Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                className={`glass-effect rounded-2xl p-6 cursor-pointer border transition-all duration-300 ${
                  selectedProject === project.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <div className="flex items-center space-x-2 mt-1 text-gray-300 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">Progress</span>
                      <span className="text-white font-semibold">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          project.color === 'blue'
                            ? 'from-blue-400 to-blue-600'
                            : project.color === 'purple'
                            ? 'from-purple-400 to-purple-600'
                            : project.color === 'green'
                            ? 'from-green-400 to-green-600'
                            : 'from-orange-400 to-orange-600'
                        }`}
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-xs">Start Date</p>
                      <div className="flex items-center space-x-1 text-white text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(project.startDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Budget</p>
                      <p className="text-white text-sm font-semibold">{project.budget}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Edit2 className="h-4 w-4 text-blue-400" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Monthly Analytics</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Content Generated</span>
                <span className="text-white font-semibold">847</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Engagement Rate</span>
                <span className="text-white font-semibold">12.5%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Social Reach</span>
                <span className="text-white font-semibold">52K</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConstructionDashboard
