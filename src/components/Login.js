import newtofu from "../assets/newtofu.svg";
import back from "../assets/Back.svg";
import Button from "./Button";
import Otp from "./Otp";

export default function Login() {
  return (
    <div>
      {/* this is the page below 375 px screen size */}
      <div className="sm:hidden flex flex-col items-center justify-center min-h-screen">
        <img src={newtofu} alt="" className=" mb-10" />
        <h1 className="flex text-lg font-bold  m-6 text-center">
          Minimover III Portal
        </h1>
        <p className=" text-center mx-8  text-sm">
          <span className="font-bold leading-4">
            This device is too small to support control.
          </span>
          <br />
          <span className="font-light leading-4">
            Please use a device with width larger than or equal to 375px.
          </span>
        </p>
      </div>
      {/* this is the page above 375 px screen size */}
      <div className=" hidden sm:flex sm:flex-col items-center justify-center min-h-screen mx-auto text-center">
        <div className=" mb-11">
          <h2 className="text-lg font-bold leading-5 mb-3">
            Please enter passcode.
          </h2>
          <span className="grid grid-cols-4 gap-4 mx-2">
            <Otp />
            <Otp />
            <Otp />
            <Otp />
          </span>
        </div>
        <div>
          <span className="grid grid-cols-4 gap-4 grid-flow-row-dense xl:grid-cols-6 ">
            <Button num="1" />
            <Button num="2" />
            <Button num="3" />
            <Button num="4" />
            <Button num="5" />
            <Button num="6" />
            <Button num="7" />
            <Button num="8" />
            <Button num="9" />
            <button className="bg-[#F9F9F9] sm:h-[67px]  md:h-[77px]  lg:h-[110px]  number text-center transition text-2xl  numberShadow rounded-sm col-span-2 ">
              0
            </button>
            <button className="bg-[#F9F9F9] sm:h-[67px] sm:w-[72px] md:h-[77px] md:w-[82px] lg:h-[110px] lg:w-[118px]  number text-center transition text-2xl  numberShadow rounded-sm flex justify-center items-center">
              <img src={back} alt="" />
            </button>
          </span>
        </div>
        <div className=" absolute bottom-0 right-8">
          <img src={newtofu} alt="" className=" mb-10" />
        </div>
      </div>

      {/* end of the login page  */}
    </div>
  );
}
