'use client'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import FadeInSection from '../../components/FadeInSection'
import React, { useState } from 'react'

export default function ClientsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="bg-[#0c003c] min-h-screen w-full flex flex-col items-center font-sans">
      
      {/* Hero Section */}
      <FadeInSection>
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
          <h1 className="text-[#cdff00] font-bold text-4xl lg:text-6xl leading-tight mb-4">
            Maximize Lead Gen at Web3 Conferences
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-4xl mb-8 py-5">
          Confra is your dedicated Web3 conference business development team. We 
          supercharge your sales pipeline by deploying skilled, technical Web3 BD 
          to top Web3 conferences, delivering high-quality, qualified leads 
          straight to you. Confra BD have deep experience in L1/L2s, infrastructure, 
          DeFi, RWAs, Stables, Memecoins, Payments, Custody, Tokenomics, 
          Market-Making, and more...
        </p>

          <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 justify-center mb-16">
            <Button onClick={handleOpenModal}>Get Started</Button>
          </div>
        </main>
      </FadeInSection>

      {/* How It Works Section */}
      <FadeInSection>
        <section className="w-full min-h-screen py-20 bg-white content-center items-center text-center sm:px-10">
        <h2 className="text-gray-900 text-4xl sm:text-5xl font-bold leading-[60px] mb-2">
          How It Works
        </h2>
        <p className="text-gray-900 text-base sm:text-lg font-normal leading-7 mb-20">
          From preparation to lead-delivery, we take care of it all
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Pre-Conference */}
          <div className="flex flex-col items-center">
            <img src='pre.png' className="w-9 h-9 mb-6" />
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Pre-Conference
            </h3>
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
            You approve your Confra BD, who will learn your business, align on targeting and plan every conference day in order to maximise leads.
            </p>
          </div>
          
          {/* On-Site Coverage */}
          <div className="flex flex-col items-center">
            <img src='during.png' className="w-9 h-9 mb-6" />
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
              On-Site Coverage
            </h3>
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Expert BD reps engage with prospects at pre-arranged meetings, booths, side events, and networking sessions.            </p>
          </div>
          
          {/* Post-Conference */}
          <div className="flex flex-col items-center">
            <img src='post.png' className="w-9 h-9 mb-6" />
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Post-Conference
            </h3>
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Receive prioritized, CRM-ready leads and conference summaries.
            </p>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* Benefits Section */}
      <FadeInSection>
        <section className="w-full min-h-screen py-20 bg-[#0c003c] content-center items-center text-center sm:px-10">
        <h2 className="text-white text-4xl sm:text-5xl font-bold leading-[60px] mb-2">
          Benefits
        </h2>
        <p className="text-white/70 text-base sm:text-lg font-normal leading-7 mb-20">
          Quality Leads, Industry Expertise, and End-to-End Support
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quality Leads */}
          <div className="flex flex-col items-center">
            <img src='quality.png' className="w-9 h-9 mb-6" />
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Quality Leads
            </h3>
            <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
              Pay only for leads that result in meaningful follow-ups.
            </p>
          </div>

          {/* Industry Expertise */}
          <div className="flex flex-col items-center">
            <img src='industry.png' className="w-9 h-9 mb-6" />
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Industry Expertise
            </h3>
            <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
              Our BDs specialize in L1/L2, DeFi, infrastructure, stablecoins, and more.
            </p>
          </div>

          {/* Customized Approach */}
          <div className="flex flex-col items-center">
            <img src='approach.png' className="w-9 h-9 mb-6" />
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Customized Approach
            </h3>
            <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
              Fully align brand representation and messaging with your goals.
            </p>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* Pricing Section */}
      <FadeInSection>
        <section className="w-full min-h-screen content-center items-center text-center bg-white text-center py-20 sm:px-10">
        <h2 className="text-gray-900 text-4xl sm:text-5xl font-bold leading-[60px] mb-20">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-60">
          {/* Flat daily fee */}
          <div className="flex flex-col items-center pb-10 md:pb-0">
            <img src='dollar.png' className="w-6 h-9 mb-6" />
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Flat daily fee (covering BD rep, travel, conference costs)
            </p>
          </div>

          {/* Variable fee */}
          <div className="flex flex-col items-center">
            <img src='graph.png' className="w-9 h-9 mb-6" />
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Variable fee based on qualified leads and deals closed
            </p>
          </div>
        </div>
        </section>
        <div className='flex w-full justify-center bg-white pb-10'>
          <Button onClick={handleOpenModal}>Get Started</Button>
        </div>
      </FadeInSection>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
