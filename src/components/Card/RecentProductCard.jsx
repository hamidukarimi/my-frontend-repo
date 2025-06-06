import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const RecentProductCard = ({ image, title, price, prevPrice, description }) => {
  return (
    <div className="relative w-[264px]   flex-shrink-0">
      <div className="w-full h-[180px] bg-placeholderColor rounded-xl overflow-hidden ">
        <img className="object-cover" src={image} />
      </div>
      <div className="absolute top-3 right-3 text-white w-[36px] h-[36px] flex justify-center items-center rounded-[8px] bg-[rgba(44,44,44,0.3)] hover:bg-[#0000007d] transition">
        <FontAwesomeIcon className="text-[22px]" icon={faHeart} />
      </div>
      {/* <span className="text-[12px] bg-gray-300 rounded-full p-1"><FontAwesomeIcon className="text-orange-500" icon={faStar}/> 43</span> */}
      <p className="text-[18px] font-semibold my-2">
        {title}{" "}
        <span className="font-bold text-[22px]">
          {price}{" "}
          <span className="font-normal line-through text-gray-500 text-[14px]">
            {prevPrice}
          </span>
        </span>
      </p>
      <p className="text-[12px]">
        {description} <span className="text-[#827BEB] underline">more</span>
      </p>
    </div>
  );
};

export default RecentProductCard;