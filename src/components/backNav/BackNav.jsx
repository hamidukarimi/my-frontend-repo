import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackNav = ({pageName}) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-[60px] bg-[#f2f4f1] sticky -top-1 z-50 flex items-center  p-3 text-xl">
      <FontAwesomeIcon className="cursor-pointer hover:bg-gray-200 p-2 rounded-full" onClick={goBack} icon={faArrowLeft} />
      <span className=" ">{pageName}</span>
    </div>
  );
};

export default BackNav;
