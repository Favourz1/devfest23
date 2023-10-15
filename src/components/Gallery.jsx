import img1 from "../assets/images/highlights/devfest-2022-1.jpg"
import img2 from "../assets/images/highlights/devfest-2022-2.jpg"
import img3 from "../assets/images/highlights/devfest-2022-3.webp"
import img4 from "../assets/images/highlights/devfest-2022-4.webp"
import img5 from "../assets/images/highlights/devfest-2022-5.webp"
import img6 from "../assets/images/highlights/sylvia.jpg"

import "../gallery.scss"

const Gallery = () => {
    return (
        <div className="gallery mx-auto">
            <img className="rounded-2xl border-[10px] border-primaryYellow" src={img1} alt="Devfest 2022" />
            <img className="rounded-2xl border-[10px] border-primaryGreen" src={img2} alt="Devfest 2022" />
            <img className="rounded-2xl border-[10px] border-primaryBlue" src={img3} alt="Devfest 2022" />
            <img className="rounded-2xl border-[10px] border-primaryRed" src={img4} alt="Devfest 2022" />
            <img className="rounded-2xl border-[10px] border-primaryYellow" src={img5} alt="Devfest 2022" />
            <img className="rounded-2xl border-[10px] border-primaryRed" src={img6} alt="Devfest 2022" />
        </div>
    )
}

export default Gallery