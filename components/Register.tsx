"use client";

const Register = () => {
    return (
        <>
            <div className="relative mx-auto">
                <img 
                    className="relative left-1"
                    src={"/events/registergiant.png"}
                    alt={"registernow"}
                />
                
                <div className="flex">
                    <button className="relative -top-20 .. sm:-top-24 .. md:-top-26 .. lg:-top-32 mx-auto px-10 py-1 rounded-full text-white font-poppins border-2 bg-purple-90 hover:bg-purple-800">
                        Register
                    </button>
                </div>
                
            </div>
        </>
    )
}

export default Register;
