'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="flex items-center justify-between w-full pt-10 lg:px-20 md:16 px-6">
      {/* Logo */}
      <Link href="/">
        <img 
          className="h-7 w-auto" 
          src="logo.png" 
          alt="Confra Logo" 
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex space-x-8 items-center">
        <NavLink href="/client" pathname={pathname}>
          Engage a Confra BD
        </NavLink>
        <NavLink href="/bd" pathname={pathname}>
          Become a Confra BD
        </NavLink>
        <NavLink href="/booth" pathname={pathname}>
          Conference Booth Support
        </NavLink>
      </nav>

      {/* HAMBURGER BUTTON (MOBILE ONLY) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          // Close (X) icon
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        )}
      </button>

      {/* 
        MOBILE FULL-SCREEN OVERLAY 
      */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c003c]
          transform transition-all duration-300
          ${
            isOpen
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white"
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Stacked Navigation Links */}
        <nav className="flex flex-col items-center space-y-8">
          <OverlayNavLink href="/client" pathname={pathname} onClick={toggleMenu}>
            Engage a Confra BD
          </OverlayNavLink>

          <OverlayNavLink href="/bd" pathname={pathname} onClick={toggleMenu}>
            Become a Confra BD
          </OverlayNavLink>

          <OverlayNavLink href="/booth" pathname={pathname} onClick={toggleMenu}>
            Conference Booth Support
          </OverlayNavLink>
        </nav>
      </div>
    </header>
  )
}

/**
 * Helper component for desktop nav links
 */
function NavLink({ href, pathname, children }) {
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={` 
        font-medium transition-colors duration-300
        ${isActive ? 'text-[#00cdff]' : 'text-white hover:text-[#00cdff]'}
      `}
    >
      {children}
    </Link>
  )
}

/**
 * Helper component for overlay nav links (mobile)
 */
function OverlayNavLink({ href, pathname, onClick, children }) {
  const isActive = pathname === href
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        text-2xl font-semibold transition-colors duration-300
        ${isActive ? 'text-[#00cdff]' : 'text-white hover:text-[#00cdff]'}
      `}
    >
      {children}
    </Link>
  )
}
