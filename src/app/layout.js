// src/app/layout.js

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Confra',
  description: 'Your Web3 Conference BD',
  icons: {
    icon: '/head.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans flex flex-col min-h-screen bg-[#0c003c]`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
