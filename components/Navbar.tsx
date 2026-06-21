'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#C9A84C]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Shabir
            </span>
            <span className="text-white text-sm font-light tracking-widest uppercase">
              Carpets Chitral
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-sm font-medium tracking-wide hover:text-[#C9A84C] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923456331153"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-[#C9A84C] text-[#0A1628] hover:opacity-90 transition-all duration-200"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 flex flex-col gap-3 bg-[#0A1628]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-sm font-medium px-2 py-1 hover:text-[#C9A84C]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923456331153"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-semibold text-center mt-2 bg-[#C9A84C] text-[#0A1628]"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}