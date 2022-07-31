export default function Button(props) {
  return (
    <div>
      <button className="bg-[#F9F9F9] sm:h-[67px] sm:w-[72px] md:h-[77px] md:w-[82px] lg:h-[110px] lg:w-[118px] number text-center transition text-2xl  numberShadow rounded-sm">
        {props.num}
      </button>
    </div>
  );
}
