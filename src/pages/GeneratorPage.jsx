import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Hash, Copy, Check, Zap, Building2, Loader2, Sparkles } from 'lucide-react'
import { generateHashtags as generateHashtagsAI, generateContent } from '../services/deepseekService'

const GeneratorPage = () => {
  const [inputText, setInputText] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [platform, setPlatform] = useState('instagram')
  const [generatedContent, setGeneratedContent] = useState('')

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'twitter', name: 'Twitter', icon: '🐦' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'facebook', name: 'Facebook', icon: '📘' },
    { id: 'youtube', name: 'YouTube', icon: '🎥' }
  ]

  const generateHashtags = async () => {
    if (!inputText.trim()) return

    setLoading(true)
    setError(null)

    try {
      // Generate hashtags using DeepSeek AI
      const generatedHashtags = await generateHashtagsAI(inputText, platform, 15)
      setHashtags(generatedHashtags)

      // Also generate enhanced content description
      const content = await generateContent(inputText, 'professional')
      setGeneratedContent(content)
    } catch (err) {
      console.error('Error generating hashtags:', err)
      setError('Failed to generate hashtags. Please try again.')

      // Fallback to basic generation
      const fallbackHashtags = generateFallbackHashtags(inputText)
      setHashtags(fallbackHashtags)
    } finally {
      setLoading(false)
    }
  }

  const generateFallbackHashtags = (text) => {
    const constructionKeywords = [
      'construction', 'build', 'architecture', 'engineering',
      'contractor', 'renovation', 'design', 'project',
      'building', 'constructionlife', 'constructionmanager',
      'site', 'progress', 'blueprint', 'masonry', 'carpentry',
      'electrical', 'plumbing', 'concrete', 'foundation'
    ]

    const words = text.toLowerCase().split(/\s+/)
    const generated = []

    generated.push('#construction', '#building', '#architecture')

    words.forEach(word => {
      if (word.length > 3) {
        generated.push(`#${word}`)
      }
    })

    constructionKeywords.forEach(keyword => {
      if (Math.random() > 0.7) {
        generated.push(`#${keyword}`)
      }
    })

    return [...new Set(generated)].slice(0, 15)
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

          {/* Platform Selector */}
          <div className="mb-4">
            <label className="text-sm text-gray-300 mb-2 block">Select Platform</label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {platforms.map((p) => (
                <motion.button
                  key={p.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlatform(p.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    platform === p.id
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="text-2xl mb-1">{p.icon}</div>
                  <div className="text-xs text-gray-300">{p.name}</div>
                </motion.button>
              ))}
            </div>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Describe your construction project, materials used, location, or special features..."
            className="w-full h-32 bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          {error && (
            <div className="mt-3 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generateHashtags}
            disabled={!inputText.trim() || loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating with AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                <span>Generate with AI</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Generated Content Section */}
        {generatedContent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">AI-Generated Caption</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(generatedContent, 'content')}
                className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
              >
                {copiedIndex === 'content' ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
              </motion.button>
            </div>
            <p className="text-gray-200 leading-relaxed">{generatedContent}</p>
          </motion.div>
        )}

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
