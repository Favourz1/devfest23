import { useEffect, useState } from "react";
import AOS from "aos";
import { CloseSvg } from "../assets/svgs";


/* eslint-disable react/prop-types */
const SingleSpeaker = ({ bgImage, name, organization, role, about }) => {
    const [isSeeBioActive, setisSeeBioActive] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-delay="300" className={`relative flex flex-col items-center min-h-[350px] w-[310px] rounded-xl border border-[#c7c7b6] overflow-hidden bg-no-repeat bg-center ${bgImage} bg-[url('../assets/images/speakers/quincy-larson.webp')]`} style={{ backgroundSize: "100% 100%" }}>
            <div className={`absolute bottom-0 left-0 w-full p-2 bg-white shadow-lg rounded-xl flex flex-col justify-center items-center text-center transition`} style={{ transition: "all 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s", transform: !isSeeBioActive ? "translateY(calc(100% - 76px))" : "" }}>
                {isSeeBioActive && <span className="absolute top-4 right-4 transition-all" onClick={() => setisSeeBioActive(false)}><CloseSvg /></span>}
                <p className="text-semibold text-xl mb-1">{name}</p>
                <p className="text-semibold text-sm"><span> {organization}</span> {role.length > 0 && <span>&#x2022;</span>} <span>{role}</span></p>
                <div className="text-blue-600 underline cursor-pointer" onClick={() => setisSeeBioActive(!isSeeBioActive)}>See bio</div>
                <div className="text-sm">
                    {about}
                </div>
            </div>
        </div>
    )
}

export default SingleSpeaker