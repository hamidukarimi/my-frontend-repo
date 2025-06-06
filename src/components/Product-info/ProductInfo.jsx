import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../header/Navbar";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = () => {
  return (
    <>
      <Navbar pageName="Iphone XR" />
      <div className="p-4">
        {/* product image */}
        <div className="w-full h-[365px] bg-placeholderColor"></div>
        <p className="text-[25px] font-bold mt-3">Iphone XR</p>
        <p>
          Lorem ispum doler sign is somethign diffrent thant anythign lorem
          ispum doler this is that
        </p>

        <div className="text-[14px] mt-2 flex items-center">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <div className="flex justify-between w-full">
            <span className="ml-1">5.0</span>
            <span className="font-bold">380 sold</span>
          </div>
        </div>

        <p className="text-[23px] font-bold mt-3">AU$5.40</p>

        <div className="flex justify-center gap-5 my-6">
          <button className="w-[160px] h-[45px] font-bold border border-black rounded-md hover:text-[#222] transition">
            Add to card
          </button>
          <button className="w-[160px] h-[45px] font-bold bg-black hover:bg-[#222] transition text-white border border-black rounded-md">
            Add to card
          </button>
        </div>

        <p className="text-[23px] font-semibold">Reviews</p>

        <div className="my-2">
          <p className="text-[17px]">Ahmad Khan</p>
          <div className="text-[10px]">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>

          <p className="text-[12px] mt-1">
            Lorem ispum doler sign is so,ethign diffrent that tnauthing i really
            use this thing ever
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
