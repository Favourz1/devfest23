import SPEAKERS_DATA from "../data/speakerData"
import SingleSpeaker from "./SingleSpeaker"

const Speakers = () => {
    return (
        <section className="py-14">
            <div className="container mx-auto px-3">
                <div className="text-4xl font-bold font-inter mb-10 text-center">Speakers</div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[80px] w-full justify-items-center items-center">
                    {SPEAKERS_DATA.map(item => (
                        <SingleSpeaker
                            key={item.name}
                            name={item.name}
                            bgImage={item.bgImage}
                            organization={item.organization}
                            role={item.role}
                            about={item.about}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Speakers