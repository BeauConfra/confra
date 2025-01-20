'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <footer
      className={`pb-6 text-center text-sm ${
        !isHome ? 'bg-white text-gray-900' : 'text-white/70'
      }`}
    >
      © 2024 Confra. All Rights Reserved.
    </footer>
  )
}
