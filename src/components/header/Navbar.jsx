import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ pageName }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-[52px] flex items-center  px-6 ">
      <div
        onClick={handleBack}
        className="flex items-center gap-1 text-[16px] font-bold"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>{pageName}</span>
      </div>
    </div>
  );
};

export default Navbar;
