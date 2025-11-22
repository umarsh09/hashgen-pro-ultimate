import { useState } from 'react'
import CryptoJS from 'crypto-js'
import { Hash, Copy, FileText, CheckCircle2, Upload } from 'lucide-react'

function App() {
  const [inputText, setInputText] = useState('')
  const [hashes, setHashes] = useState({})
  const [copiedHash, setCopiedHash] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const algorithms = [
    { name: 'MD5', func: CryptoJS.MD5 },
    { name: 'SHA-1', func: CryptoJS.SHA1 },
    { name: 'SHA-256', func: CryptoJS.SHA256 },
    { name: 'SHA-512', func: CryptoJS.SHA512 },
    { name: 'SHA-3', func: CryptoJS.SHA3 },
    { name: 'RIPEMD-160', func: CryptoJS.RIPEMD160 },
  ]

  const generateHashes = (text) => {
    if (!text) {
      setHashes({})
      return
    }

    const newHashes = {}
    algorithms.forEach(algo => {
      newHashes[algo.name] = algo.func(text).toString()
    })
    setHashes(newHashes)
  }

  const handleTextChange = (e) => {
    const text = e.target.value
    setInputText(text)
    generateHashes(text)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file.name)
      const reader = new FileReader()
      reader.onload = (event) => {
        const wordArray = CryptoJS.lib.WordArray.create(event.target.result)
        const newHashes = {}
        algorithms.forEach(algo => {
          newHashes[algo.name] = algo.func(wordArray).toString()
        })
        setHashes(newHashes)
      }
      reader.readAsArrayBuffer(file)
    }
  }

  const copyToClipboard = (hash, name) => {
    navigator.clipboard.writeText(hash)
    setCopiedHash(name)
    setTimeout(() => setCopiedHash(null), 2000)
  }

  const clearAll = () => {
    setInputText('')
    setHashes({})
    setSelectedFile(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Hash className="w-12 h-12 text-white" />
            <h1 className="text-5xl font-bold text-white">HashGen Pro Ultimate</h1>
          </div>
          <p className="text-white/90 text-lg">
            Generate secure cryptographic hashes instantly
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              <FileText className="inline w-5 h-5 mr-2" />
              Enter Text
            </label>
            <textarea
              value={inputText}
              onChange={handleTextChange}
              placeholder="Type or paste your text here..."
              className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none text-gray-700 font-mono"
            />
          </div>

          {/* File Upload Section */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              <Upload className="inline w-5 h-5 mr-2" />
              Or Upload File
            </label>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileSelect}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
              />
              {selectedFile && (
                <p className="mt-2 text-sm text-gray-600">Selected: {selectedFile}</p>
              )}
            </div>
          </div>

          {/* Clear Button */}
          {(inputText || selectedFile) && (
            <div className="mb-6">
              <button
                onClick={clearAll}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Hash Results */}
          {Object.keys(hashes).length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Generated Hashes</h2>
              {algorithms.map(algo => (
                <div key={algo.name} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-700">{algo.name}</h3>
                    <button
                      onClick={() => copyToClipboard(hashes[algo.name], algo.name)}
                      className="flex items-center gap-2 px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
                    >
                      {copiedHash === algo.name ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <code className="block bg-white px-3 py-2 rounded border border-gray-200 text-sm font-mono text-gray-800 break-all">
                    {hashes[algo.name]}
                  </code>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {Object.keys(hashes).length === 0 && (
            <div className="text-center py-12">
              <Hash className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                Enter text or upload a file to generate hashes
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/80">
          <p>© 2025 HashGen Pro Ultimate - Secure Hash Generation Tool</p>
        </div>
      </div>
    </div>
  )
}

export default App
