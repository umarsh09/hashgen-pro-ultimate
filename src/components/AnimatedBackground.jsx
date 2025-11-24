// src/components/AnimatedBackground.jsx
import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
            'linear-gradient(45deg, #96ceb4, #ff6b6b, #4ecdc4, #45b7d1)',
            'linear-gradient(45deg, #45b7d1, #96ceb4, #ff6b6b, #4ecdc4)',
            'linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4, #ff6b6b)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-20"
      />
      
      {/* Animated Grid Pattern */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Shapes - Construction Themed */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 60 - 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          style={{
            width: Math.random() * 120 + 30,
            height: Math.random() * 120 + 30,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Geometric Construction Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
          className="absolute bg-white/3 backdrop-blur-sm border border-white/10"
          style={{
            width: Math.random() * 80 + 20,
            height: Math.random() * 80 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '0%',
            transform: i % 3 === 2 ? 'rotate(45deg)' : 'none',
          }}
        />
      ))}

      {/* Pulse Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-xl"
      />

      {/* Construction Tool Icons (Simplified) */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`tool-${i}`}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut",
          }}
          className="absolute text-white/10"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + Math.random() * 80}%`,
            fontSize: `${Math.random() * 24 + 16}px`,
          }}
        >
          {i % 4 === 0 && '⚒️'}
          {i % 4 === 1 && '🏗️'}
          {i % 4 === 2 && '🔧'}
          {i % 4 === 3 && '📐'}
        </motion.div>
      ))}

      {/* Light Beams */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-32 bg-gradient-to-b from-blue-400/20 to-transparent"
            style={{
              transform: `rotate(${i * 60}deg)`,
              top: '50%',
              left: '50%',
              transformOrigin: 'bottom center',
            }}
          />
        ))}
      </motion.div>

      {/* Particle Effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 + 100}%`,
          }}
        />
      ))}

      {/* Construction Blueprint Grid */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Subtle Noise Texture */}
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

export default AnimatedBackground
