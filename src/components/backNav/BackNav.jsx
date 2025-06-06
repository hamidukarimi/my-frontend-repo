import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackNav = ({pageName}) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-[60px] bg-darkGray sticky -top-1 z-50 flex items-center p-3 text-3xl">
      <FontAwesomeIcon className="cursor-pointer" onClick={goBack} icon={faArrowLeft} />
      <span className="text-2xl ml-4">{pageName}</span>
    </div>
  );
};

export default BackNav;
