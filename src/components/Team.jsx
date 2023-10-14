import charlesFreeborn from "../assets/images/charlesfreeborn.jfif"
import edmundChibuzor from "../assets/images/edmund_chibuzor.jpg"
import kelvinForterta from "../assets/images/kelvin_forteta.jpg"
import marthaFreeborn from "../assets/images/martha_freeborn.webp"
import tejiri from "../assets/images/oghenetejiri_agbodoroba.png"
import onome from "../assets/images/onome_commander.jpeg"

const Team = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto team-section__wrapper">
                <div className="team-section__main-title text-4xl font-bold font-inter mb-10">Our Organizing Team</div>
                <div className="grid grid-cols-3 gap-[80px] w-full">
                    <div className="team-section__item">
                        <div className="team-section__item-img-wrapper">
                            <img
                                className="team-section__item-img object-cover"
                                src={charlesFreeborn}
                                alt=""
                            />
                        </div>
                        <div className="team-section__item__user-wrapper">
                            <div className="team-section__item__user-name">
                                Charles Freeborn
                            </div>
                            <div className="team-section__item__user-title">Sponsorship And Partnership</div>
                        </div>
                    </div>
                    <div className="team-section__item">
                        <div className="team-section__item-img-wrapper">
                            <img
                                className="team-section__item-img"
                                src={edmundChibuzor}
                                alt=""
                            />
                        </div>
                        <div className="team-section__item__user-wrapper">
                            <div className="team-section__item__user-name">
                                Edmund Chibuzor
                            </div>
                            <div className="team-section__item__user-title">Organizer</div>
                        </div>
                    </div>
                    <div className="team-section__item">
                        <div className="team-section__item-img-wrapper">
                            <img
                                className="team-section__item-img"
                                src={marthaFreeborn}
                                alt=""
                            />
                        </div>
                        <div className="team-section__item__user-wrapper">
                            <div className="team-section__item__user-name">
                                Martha Freeborn{" "}
                            </div>
                            <div className="team-section__item__user-title">Co-organizer</div>
                        </div>
                    </div>
                    <div className="team-section__item">
                        <div className="team-section__item-img-wrapper">
                            <img
                                className="team-section__item-img"
                                src={tejiri}
                                alt=""
                            />
                        </div>
                        <div className="team-section__item__user-wrapper">
                            <div className="team-section__item__user-name">
                                Oghenetejiri Agbodoroba
                            </div>
                            <div className="team-section__item__user-title">Co-organizer</div>
                        </div>
                    </div>
                    <div className="team-section__item">
                        <div className="team-section__item-img-wrapper">
                            <img
                                className="team-section__item-img"
                                src={onome}
                                alt=""
                            />
                        </div>
                        <div className="team-section__item__user-wrapper">
                            <div className="team-section__item__user-name">
                                Onome Commander
                            </div>
                            <div className="team-section__item__user-title">Co-organizer</div>
                        </div>
                    </div>
                    <div className="team-section__item">
                        <div className="team-section__item-img-wrapper">
                            <img
                                className="team-section__item-img object-cover"
                                src={kelvinForterta}
                                alt=""
                            />
                        </div>
                        <div className="team-section__item__user-wrapper">
                            <div className="team-section__item__user-name">
                                Kelvin Forteta
                            </div>
                            <div className="team-section__item__user-title">Co-organizer</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team