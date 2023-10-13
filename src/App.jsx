import devfestLogo from "./assets/images/devfest-logo.png"
import devfest23Logo from "./assets/images/devfest23-logo.png"
import globeIllustration from "./assets/images/globe-illustration.png"
import './App.css'

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
                <h1 className="text-6xl font-inter font-bold mb-6">The biggest Tech event in Warri</h1>
                <p className="text-lg font-nunito mb-10">Join us as we discuss trending issues in tech, Artificial Intelligence, Machine Learning, Cloud, Intellectual Property and Startup Funding, Policy & Governance, and so much more!</p>
                <div className="flex justify-center items-center space-x-4">
                  <button className="flex justify-center items-center text-xl font-nunito font-medium rounded-[70px] bg-primaryBlue py-5 px-10 hover:shadow-lg text-white">Buy Tickets  <span className="text-primaryRed ml-2">🎟</span></button>
                  <button className="flex justify-center items-center text-xl font-nunito font-medium rounded-[70px] text-primaryBlue border border-primaryBlue bg-transparent py-5 px-10 hover:shadow-lg">Apply to speak 🎙</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
