'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  // Determine which button to show
  let buttonText = ''
  let buttonLink = ''

  if (pathname === '/client') {
    buttonText = 'Become a Confra BD'
    buttonLink = '/bd'
  } else if (pathname === '/bd') {
    buttonText = 'Engage a Confra BD'
    buttonLink = '/client'
  }

  return (
    <header className="flex items-center justify-between w-full pt-10 lg:px-20 px-6">
      {/* Logo placeholder */}
      <div className="text-white text-xl font-bold">
        <a href="/">
          <img className="w-15 h-7" src="logo.png" alt="Confra Logo" />
        </a>
      </div>

      {/* Conditionally Render Button */}
      {buttonText && buttonLink && (
        <a href={buttonLink}>
          <div className="bg-[#00cdff] text-white text-lg font-medium rounded-full py-2 px-4 md:px-6 hover:bg-[#00b3e6] transition-colors">
            {buttonText}
          </div>
        </a>
      )}
    </header>
  )
}
