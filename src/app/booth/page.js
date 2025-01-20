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
            Your Web3 Conference Booth Experts
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-4xl py-5">
            Sponsoring a booth at Web3 events is a great way to generate leads.  Staffing the booth, on the other hand, is a pain.  You pull expensive, important resources away from your business, or rely on contractors who don’t know your business or even Web3. 
          </p>
          <p className="text-white/70 text-lg md:text-xl max-w-4xl mb-10">
            Confra Booth BD solves this - we provide Web3-native experts, sourced from the local community and trained on your product.  These BD act as an extension of your team, finding and qualifying the right leads, allowing you to deliver more leads from more conferences.
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
          From preparation to lead-delivery, we take care of it all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Pre-Conference */}
          <div className="flex flex-col items-center">
            <img src='pre.png' className="w-9 h-9 mb-6" />
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Pre-Conference
            </h3>
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              You approve dedicated Confra Booth BD, who then get trained on your product, value prop and lead qualification criteria.  We then create the detailed booth coverage schedules to ensure maximum coverage at all times.
            </p>
          </div>
          
          {/* On-Site Coverage */}
          <div className="flex flex-col items-center">
            <img src='during.png' className="w-9 h-9 mb-6" />
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
              On-Site Coverage
            </h3>
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Skilled BD professionals engage attendees, qualify leads, field questions, display product features and drive conversations.  We can use the Confra lead capture tools or your own.
            </p>
          </div>
          
          {/* Post-Conference */}
          <div className="flex flex-col items-center">
            <img src='post.png' className="w-9 h-9 mb-6" />
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Post-Conference
            </h3>
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Get summary reports and qualified leads lists for your team to follow up.
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
          Quality leads, industry expertise, and end-to-end support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quality Leads */}
          <div className="flex flex-col items-center">
            <img src='quality.png' className="w-9 h-9 mb-6" />
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Quality Leads
            </h3>
            <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
              Confra Booth BD are both Web3-natives and sales professionals, ensuring the post-conference leads lists are expertly qualified.
            </p>
          </div>

          {/* Industry Expertise */}
          <div className="flex flex-col items-center">
            <img src='industry.png' className="w-9 h-9 mb-6" />
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Industry and Regional Expertise
            </h3>
            <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
              Confra Booth BD excel in DeFi, infrastructure, custody, markets, security and more, and are fluent in the language of the region the event is hosted in.
            </p>
          </div>

          {/* Customized Approach */}
          <div className="flex flex-col items-center">
            <img src='approach.png' className="w-9 h-9 mb-6" />
            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
              Customized Approach
            </h3>
            <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
              Align messaging with objectives, ensuring brand synergy that resonates with attendees of the conference.
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
              Fixed daily fee, covering training and BD’s time at the conference.
            </p>
          </div>

          {/* Variable fee */}
          <div className="flex flex-col items-center">
            <img src='graph.png' className="w-9 h-9 mb-6" />
            <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
              Variable fee tied to qualified lead generated at the booth.
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