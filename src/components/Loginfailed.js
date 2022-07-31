import error from "../assets/error.svg";

export default function LoginFailed() {
  return (
    <div className="hidden sm:flex items-center justify-center h-screen bg-black/50 ">
      <div className=" m-4 bg-white  sm:flex sm:flex-col sm:w-5/6 md:w-9/12 lg:w-6/12">
        <div className="flex flex-col gap-4 md:gap-6 md:m-12 items-center m-8 text-center">
          <img src={error} alt="error" className="lg:w-[100px]" />
          <span>
            <h2 className=" font-bold sm:text-lg md:text-xl lg:text-2xl  xl:text-3xl">
              Wrong Password
            </h2>
            <p className=" text-sm sm:text-base lg:text-lg xl:text-2xl">
              Passcode is invalid.
            </p>
          </span>
        </div>
        <button className="flex h-12 md:h-16 lg:h-20 bg-[#1B75BC] w-full text-center items-center justify-center text-white text-sm sm:text-base lg:text-lg xl:text-2xl">
          Dismiss
        </button>
      </div>
    </div>
  );
}
