/* eslint-disable react/prop-types */
// import avatar from "../assets/images/avatar-1.png"
const TestimonialCard = ({ mainText, name, variant, photo }) => {
    return (
        <div className={`testimonial-card shadow-lg ${variant}`}>
            <div className="testimonial-card--header">{mainText}</div>
            <div className="testimonial-card--footer">
                <img className="w-[40px] h-[40px] object-cover" src={photo} alt="" /> <span>{name}</span>
            </div>
        </div>
    )
}

export default TestimonialCard