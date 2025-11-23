import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LoadingSpinner from './components/atoms/LoadingSpinner/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home/HomePage'))
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage'))
const PortfolioPage = lazy(() => import('./pages/Portfolio/PortfolioPage'))
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'))

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
