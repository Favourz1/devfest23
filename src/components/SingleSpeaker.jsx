/* eslint-disable react/prop-types */
const SingleSpeaker = ({ bgImage, name, organization, role }) => {
    return (
        <div className={`relative flex flex-col items-center min-h-[350px] w-[310px] rounded-xl border border-[#c7c7b6] bg-no-repeat bg-center ${bgImage}`} style={{ backgroundSize: "100% 100%" }}>
            <div className="absolute bottom-0 left-0 w-full p-2 bg-white rounded-xl flex flex-col justify-center items-center">
                <p className="text-semibold text-xl mb-1 text-center">{name}</p>
                <p className="text-semibold text-sm text-center"><span> {organization}</span> {role.length > 0 && <span>&#x2022;</span>} <span>{role}</span></p>
                <div className="text-blue-600 underline cursor-pointer">See bio</div>
            </div>
        </div>
    )
}

export default SingleSpeaker