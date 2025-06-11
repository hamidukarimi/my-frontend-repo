const BASE_URL = import.meta.env.VITE_BASE_URL;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import Stories from "../stories/Stories";

const Hero = () => {
  

  return (
    <div>
      <div className="px-5 mt-6">
        <input
          className="w-full pl-5 pr-14 py-2  rounded-lg  text-2xl bg-[#f1f2f4] border border-gray-800 outline-none"
          placeholder="Search here"
        />
      </div>

     <Stories />

      <div className="bg-placeholderColor w-full h-[203px] overflow-hidden   mt-7 mb-5">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/90/bb/25/90bb25f9ba49d000185f014a7daee676.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
