import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import Menubar from "../Menubar/Menubar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  return (
    <>
      <Header />
      <Menubar />
      <div className="px-4 py-6">

      {/* card */}
        <div className="relative w-full h-[312px] bg-placeholderColor shadow-lg rounded-[12px] ">
          <span className="absolute top-4 right-4 text-4xl text-[red]">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>

         {/* card */}
         <div className="relative w-full h-[312px] bg-placeholderColor shadow-lg rounded-[12px] mt-5">
          <span className="absolute top-4 right-4 text-4xl text-[red]">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Favorites;
