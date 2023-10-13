import avatar from "../assets/images/avatar-1.png"
const TestimonialCard = ({ mainText, name, variant }) => {
    return (
        <div className={`testimonial-card shadow-lg ${variant}`}>
            <div className="testimonial-card--header">{mainText}</div>
            <div className="testimonial-card--footer">
                <img src={avatar} alt="" /> <span>{name}</span>
            </div>
        </div>
    )
}

export default TestimonialCard