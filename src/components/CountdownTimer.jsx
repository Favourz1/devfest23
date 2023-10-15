import { useState, useEffect } from 'react';
import pointingHandEmoji from "../assets/images/pointing-hand-emoji.png"


function CountdownTimer() {
    const [targetDate, setTargetDate] = useState(new Date('2023-11-11T09:00:00').getTime());
    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const difference = new Date(targetDate) - currentDate;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="py-8" id="timer">
            <div className="relative container mx-auto px-3">
                <div className="relative flex flex-col items-center py-14">
                    {/* <img className="absolute animate-pulse w-32 right-[-2%] top-[-10%] z-2" src={desktopIllustration} alt="Globe" /> */}
                    <h2 className="flex items-center text-4xl font-bold font-inter mb-2"> <span className="mr-2">Be There</span> <img src={pointingHandEmoji} alt="" /></h2>
                    <p className="text-2xl text-[#AEAEAE] font-semibold mb-14">don&apos;t dull.</p>
                    <div className="flex flex-wrap justify-center items-center space-x-2 md:space-x-10 mb-12">
                        <div className="flex flex-col justify-between items-center min-h-auto  md:min-h-[180px] min-w-auto md:min-w-[200px] py-5 px-4 md:px-8 rounded-xl text-[#C1C1CA] bg-transparent md:bg-[#F5F5F7]">
                            <div className="text-2xl md:text-8xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                            <div className="text-lg md:text-2xl">days</div>
                        </div>
                        <div className="flex flex-col justify-between items-center min-h-auto  md:min-h-[180px] min-w-auto md:min-w-[200px] py-5 px-4 md:px-8 rounded-xl text-[#C1C1CA] bg-transparent md:bg-[#F5F5F7]">
                            <div className="text-2xl md:text-8xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                            <div className="text-lg md:text-2xl">hours</div>
                        </div>
                        <div className="flex flex-col justify-between items-center min-h-auto  md:min-h-[180px] min-w-auto md:min-w-[200px] py-5 px-4 md:px-8 rounded-xl text-[#C1C1CA] bg-transparent md:bg-[#F5F5F7]">
                            <div className="text-2xl md:text-8xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            <div className="text-lg md:text-2xl">minutes</div>
                        </div>
                        <div className="flex flex-col justify-between items-center min-h-auto  md:min-h-[180px] min-w-auto md:min-w-[200px] py-5 px-4 md:px-8 rounded-xl text-[#C1C1CA] bg-transparent md:bg-[#F5F5F7]">
                            <div className="text-2xl md:text-8xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            <div className="text-lg md:text-2xl">seconds</div>
                        </div>
                    </div>
                    <a href="https://gdg.community.dev/events/details/google-gdg-warri-presents-devfest-warri-2023/">
                        <button className=" flex justify-center items-center hover:scale-95 font-nunito font-medium py-3 px-6 rounded-[41px] bg-primaryBlue text-white text-xl hover:shadow-lg">Buy Tictets <span className="text-primaryRed ml-2">🎟</span></button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CountdownTimer;