import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">StartupName</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-blue-200 transition-colors font-semibold">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-blue-200 transition-colors font-semibold">
              Pricing
            </a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors font-semibold">
              About
            </a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors font-semibold">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-white hover:text-blue-200 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-blue-200 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-white hover:text-blue-200 transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">
                Contact
              </a>
              <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 w-full mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
