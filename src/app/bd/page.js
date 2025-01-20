'use client'

import Button from '../../components/Button'
import FadeInSection from '../../components/FadeInSection'

export default function BDPage() {
  return (
    <div className="bg-[#0c003c] min-h-screen w-full flex flex-col items-center font-sans">
      
      {/* Hero Section */}
      <FadeInSection>
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
            <h1 className="text-[#cdff00] font-bold text-4xl lg:text-5xl leading-tight mb-4">
                Get Paid to Attend Web3 Conferences
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-4xl mb-8 py-5">
            Join Confra’s network of seasoned BD professionals and get paid to attend Web3 
            conferences worldwide. We employ highly technical, experienced Web3 BDs in order 
            to deliver qualified, quality leads from every conference booth, side event, dinner, 
            party and hallway conversation at the most important conferences on Web3’s annual 
            calendar. Put simply, as a Confra BD, you get paid to go to Web3 conferences and 
            grind.
            </p>

            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 justify-center mb-16">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfCRebSwg8scFexh0SbOEKRNeSHXEL5jvlgOpCol9bPQhCpSA/formrestricted'>
                    <Button>Apply Now</Button>
                </a>
            </div>
        </main>
      </FadeInSection>

      {/* How It Works Section */}
      <FadeInSection>
        <section className="w-full min-h-screen py-20 bg-white content-center items-center text-center content-center sm:px-10">
            <h2 className="text-gray-900 text-4xl sm:text-5xl font-bold leading-[60px] mb-2">
            Who We Need
            </h2>
            <p className="text-gray-900 text-base sm:text-lg font-normal leading-7 mb-20">
                Skilled Web3 BD Professionals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pre-Conference */}
            <div className="flex flex-col items-center">
                <img src='expertise.png' className="w-8 h-9 mb-6" />
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Expertise
                </h3>
                <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
                    Demonstrated success in Web3 business development, sales, or partnerships ensures you can drive value at events.
                </p>
            </div>
            
            {/* On-Site Coverage */}
            <div className="flex flex-col items-center">
                <img src='proficiency.png' className="w-8 h-9 mb-6" />
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Technical Proficiency
                </h3>
                <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
                    Deep expertise in one of a range of Web3 verticals, including DeFi, infrastructure, security, markets, custody and more
                </p>
            </div>
            
            {/* Post-Conference */}
            <div className="flex flex-col items-center">
                <img src='passion.png' className="w-6 h-9 mb-6" />
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Passion
                </h3>
                <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
                    Thrive in dynamic environments, enjoy networking, and excel at identifying new opportunities.
                </p>
            </div>
            </div>
        </section>
      </FadeInSection>

      {/* Benefits Section */}
      <FadeInSection>
        <section className="w-full min-h-screen py-20 bg-[#0c003c] content-center items-center text-center sm:px-10">
            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-[60px] mb-2">
                Benefits for Confra BDs
            </h2>
            <p className="text-white/70 text-base sm:text-lg font-normal leading-7 mb-20">
                Earn, Network, and Grow
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Quality Leads */}
            <div className="flex flex-col items-center">
                <img src='travel.png' className="w-9 h-9 mb-6" />
                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Travel & Compensation
                </h3>
                <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
                    Enjoy fully paid trips to top Web3 conferences with competitive compensation and performance bonuses.
                </p>
            </div>

            {/* Industry Expertise */}
            <div className="flex flex-col items-center">
                <img src='headphones.png' className="w-11 h-9 mb-6" />
                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Support & Coaching
                </h3>
                <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
                    Receive comprehensive support from pre-event planning to post-conference follow-ups, along with coaching to enhance your skills.
                </p>
            </div>

            {/* Customized Approach */}
            <div className="flex flex-col items-center">
                <img src='graph.png' className="w-9 h-9 mb-6" />
                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Progress & Recognition
                </h3>
                <p className="text-white/70 text-base font-normal leading-normal max-w-xs">
                    Expand your network, elevate your industry reputation, and build a strong personal brand through successful engagements.
                </p>
            </div>
            </div>
        </section>
      </FadeInSection>

      {/* How It Works Section */}
      <FadeInSection>
        <section className="w-full min-h-screen py-20 bg-white content-center items-center text-center content-center sm:px-10">
            <h2 className="text-gray-900 text-4xl sm:text-5xl font-bold leading-[60px] mb-2">
                How It Works
            </h2>
            <p className="text-gray-900 text-base sm:text-lg font-normal leading-7 mb-20">
                From Preparation to Follow-Up
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pre-Conference */}
            <div className="flex flex-col items-center">
                <img src='pre.png' className="w-9 h-9 mb-6" />
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Pre-Conference
                </h3>
                <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
                    Collaborate on refining pitches, reviewing materials, and scheduling key meetings to ensure a strategic approach.
                </p>
            </div>
            
            {/* On-Site Coverage */}
            <div className="flex flex-col items-center">
                <img src='during.png' className="w-9 h-9 mb-6" />
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    At-Conference
                </h3>
                <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
                Find and engage with potential prospects at booths, side events, and networking sessions.
                </p>
            </div>
            
            {/* Post-Conference */}
            <div className="flex flex-col items-center">
                <img src='post.png' className="w-9 h-9 mb-6" />
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-10 mb-2">
                    Post-Conference
                </h3>
                <p className="text-gray-700 text-base font-normal leading-normal max-w-xs">
                    Represent clients professionally, connect with targeted prospects, and seize opportunities in real-time at events.
                </p>
            </div>
            </div>
        </section>
      </FadeInSection>

        <div className='flex w-full justify-center bg-white pb-10'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfCRebSwg8scFexh0SbOEKRNeSHXEL5jvlgOpCol9bPQhCpSA/formrestricted'>
                <Button>Apply Now</Button>
            </a>
        </div>
    </div>
  )
}
