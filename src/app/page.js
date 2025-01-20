import Button from '../components/Button'

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-between items-center pt-16 md:pt-24">
      
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[#cdff00] font-bold text-4xl lg:text-6xl leading-tight mb-4">
          Your Web3 Conference BD
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-4xl mb-8 py-5">
          Confra is your Web3 Conference BD. We go to conferences for you (or with you) to accelerate the growth of your sales pipeline by delivering qualified, quality leads from every conference booth, side event, dinner, party and hallway conversation at the most important conferences on Web3’s annual calendar. Confra removes the stress, hassle and time-consuming nature of conference attendance and booth management, ensuring your business can maximise the ROI from every dollar and minute spent at a conference.
        </p>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 justify-center mb-16">
          <a href='/client'>
            <Button>Engage a Confra BD</Button>
          </a>
          <a href='/bd'>
            <Button>Become a Confra BD</Button>
          </a>
        </div>
      </main>

      <footer className="pb-4 pt-14 text-center text-white/70 text-sm w-full">
        © 2024 Confra. All Rights Reserved.
      </footer>
    </div>
  )
}
