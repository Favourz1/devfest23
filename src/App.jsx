import devfestLogo from "./assets/images/devfest-logo.png"
import devfest23Logo from "./assets/images/devfest23-logo.png"
import globeIllustration from "./assets/images/globe-illustration.png"
import './App.css'
import { HandShakeSvg, LaptopSvg, PeopleSvg, PersonSvg } from "./assets/svgs"

function App() {

  return (
    <>
      <header className="py-4 md:py-5 bg-bgWhite">
        <nav className="container mx-auto !px-6 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#">
              <img className="w-60" src={devfestLogo} alt="Devfest Logo" />
            </a>
          </div>
          <ul className="hidden md:flex items-center space-x-4 text-xl font-nunito">
            <li className="text-xl font-medium"><a href="#">Events</a></li>
            <li className="text-xl font-medium"><a href="#">About us</a></li>
            <li className="text-xl font-medium"><a href="#">Projects</a></li>
            <li className="text-xl font-medium"><a href="#">Team</a></li>
          </ul>
          <button className=" flex justify-center items-center font-nunito font-medium py-2 px-5 rounded-[41px] bg-[#00A150] text-white text-xl hover:shadow-lg">Join us 🚀</button>
        </nav>
      </header>
      <main>
        <section className="py-5">
          <div className="container mx-auto">
            <div className="flex flex-col hero-section-wrapper">
              <img className="absolute w-32 right-[-4%] top-[-5%] rotate-[35.4deg] z-2" src={globeIllustration} alt="Globe" />
              <div className="flex flex-col justify-start items-center text-center max-w-[70%]">
                <img className="w-[250px] mb-4" src={devfest23Logo} alt="DevFest'23 logo" />
                <h1 className="text-6xl font-inter font-bold mb-6">The  <span className="typewriter"></span></h1>
                <p className="text-lg font-nunito mb-10">Join us as we discuss trending issues in tech, Artificial Intelligence, Machine Learning, Cloud, Intellectual Property and Startup Funding, Policy & Governance, and so much more!</p>
                <div className="flex justify-center items-center space-x-4">
                  <button className="flex justify-center items-center text-xl font-nunito font-medium rounded-[70px] bg-primaryBlue py-5 px-10 hover:shadow-lg text-white">Buy Tickets  <span className="text-primaryRed ml-2">🎟</span></button>
                  <button className="flex justify-center items-center text-xl font-nunito font-medium rounded-[70px] text-primaryBlue border border-primaryBlue bg-transparent py-5 px-10 hover:shadow-lg">Apply to speak 🎙</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-bgWhite">
          <div className="container mx-auto px-3">
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="flex flex-col items-center w-full md:w-[40%] pt-10 pb-5">
                <h2 className="text-4xl font-bold font-inter mb-8">About</h2>
                <p className="text-2xl mb-14">Whether you are a beginner or an experienced developer, GDG Warri welcomes you. Join our community and be a part of the vibrant tech scene in our city. Together, let&apos;s learn, grow, and make a difference in the world of technology.</p>
                <a href="group/link" className="flex self-start items-center text-xl font-nunito font-medium underline">
                  <span>Learn More</span>
                  <span className="ml-1 group-hover/link:translate-x-[5px]">
                    <svg className="group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 23 20" fill="none">
                      <path d="M20.9549 3.58672C18.4426 3.92872 15.1947 4.3302 13.3474 3.9151C11.5001 3.49999 7.51714 1.94417 8.50019 1.99996M19.5935 14.7973C18.6326 13.8313 18.4993 11.8806 18.4993 10.4989C18.4993 9.11724 18.6972 5.28905 21.013 3.45998C15.047 9.22708 7.90737 12.5798 1.74265 17.8889" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="w-full md:w-[60%] flex items-center relative">
                about pic
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-bgWhite">
          <div className="container mx-auto px-3">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-44">
              <img className="absolute w-32 right-[6%] top-[-35%] rotate-[35.4deg] z-2" src={globeIllustration} alt="Globe" />
              <div className="flex justify-center items-center text-2xl text-[#514D4D] font-bold">
                <PeopleSvg />
                <span className="ml-4">562 Members</span>
              </div>
              <div className="flex justify-center items-center text-2xl text-[#514D4D] font-bold">
                <PersonSvg />
                <span className="ml-4">Personal Development</span>
              </div>
              <div className="flex justify-center items-center text-2xl text-[#514D4D] font-bold">
                <LaptopSvg />
                <span className="ml-4">3+ Annual meetups</span>
              </div>
              <div className="flex justify-center items-center text-2xl text-[#514D4D] font-bold">
                <HandShakeSvg />
                <span className="ml-4">Team Collaboration</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
