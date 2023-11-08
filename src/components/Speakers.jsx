import SingleSpeaker from "./SingleSpeaker"

const Speakers = () => {
    return (
        <section className="py-14">
            <div className="container mx-auto px-3">
                <div className="text-4xl font-bold font-inter mb-10 text-center">Speakers</div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[80px] w-full">
                    <SingleSpeaker />
                </div>
            </div>
        </section>
    )
}

export default Speakers