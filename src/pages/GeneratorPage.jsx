import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Hash, Copy, Check, Zap, Building2 } from 'lucide-react'

const GeneratorPage = () => {
  const [inputText, setInputText] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [copiedIndex, setCopiedIndex] = useState(null)

  const constructionKeywords = [
    'construction', 'build', 'architecture', 'engineering', 
    'contractor', 'renovation', 'design', 'project',
    'building', 'constructionlife', 'constructionmanager',
    'site', 'progress', 'blueprint', 'masonry', 'carpentry',
    'electrical', 'plumbing', 'concrete', 'foundation'
  ]

  const generateHashtags = () => {
    if (!inputText.trim()) return

    const words = inputText.toLowerCase().split(/\s+/)
    const generated = []
    
    // Add main construction hashtags
    generated.push('#construction', '#building', '#architecture')
    
    // Add hashtags based on input words
    words.forEach(word => {
      if (word.length > 3) {
        generated.push(`#${word}`)
      }
    })

    // Add some popular construction hashtags
    constructionKeywords.forEach(keyword => {
      if (Math.random() > 0.7) {
        generated.push(`#${keyword}`)
      }
    })

    // Remove duplicates and limit to 15
    const uniqueHashtags = [...new Set(generated)].slice(0, 15)
    setHashtags(uniqueHashtags)
  }

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Hash className="h-10 w-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construction{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hashtag Generator
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Generate professional construction hashtags for your projects and social media posts
          </p>
        </motion.div>

        {/* Generator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Building2 className="h-5 w-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Project Description</h2>
          </div>
          
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Describe your construction project, materials used, location, or special features..."
            className="w-full h-32 bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generateHashtags}
            disabled={!inputText.trim()}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Zap className="h-5 w-5" />
            <span>Generate Hashtags</span>
          </motion.button>
        </motion.div>

        {/* Results Section */}
        {hashtags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Generated Hashtags</h2>
              <span className="text-gray-300">{hashtags.length} hashtags</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {hashtags.map((hashtag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-800/50 rounded-lg p-3 flex items-center justify-between group hover:bg-gray-700/50 transition-colors"
                >
                  <span className="text-white font-medium">{hashtag}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(hashtag, index)}
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Copy All Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => copyToClipboard(hashtags.join(' '), 'all')}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold mt-6 flex items-center justify-center space-x-2"
            >
              {copiedIndex === 'all' ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
              <span>Copy All Hashtags</span>
            </motion.button>
          </motion.div>
        )}

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-2xl p-6 mt-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">💡 Pro Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="font-semibold text-white">Best Practices:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Use 5-10 relevant hashtags per post</li>
                <li>Mix popular and niche hashtags</li>
                <li>Include location-based tags</li>
                <li>Update hashtags as project progresses</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Popular Categories:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Project Type (#renovation, #newbuild)</li>
                <li>Materials (#concrete, #steel, #wood)</li>
                <li>Location (#nyconstruction, #londonbuild)</li>
                <li>Profession (#builder, #architect)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GeneratorPage;
