/* eslint-disable react/prop-types */
const SingleSpeaker = ({ bgImage, name, organization, role }) => {
    return (
        <div className={`relative flex flex-col min-h-[400px] max-w-[310px] rounded-xl border border-[#c7c7b6] bg-no-repeat bg-center bg-quincyLarson ${bgImage}`}>
            <div className="absolute bottom-0 left-0 w-full p-2 bg-white rounded-xl flex flex-col justify-center items-center">
                <p className="text-semibold text-xl mb-1">Quincy Larson {name}</p>
                <p className="text-semibold text-sm"><span>FreeCodeCamp {organization}</span> {role.length > 0 && <span>&#x2022;</span>} <span>Founder {role}</span></p>
                <div className="text-blue-600 underline cursor-pointer">See bio</div>
            </div>
        </div>
    )
}

export default SingleSpeaker