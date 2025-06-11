import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import Menubar from "../Menubar/Menubar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import BackNav from "../backNav/BackNav";

const Favorites = () => {
  return (
    <>
      <BackNav pageName="Favorites"/>
      {/* <div className="px-4 py-6">

      
        <div className="relative w-full h-[312px] bg-placeholderColor shadow-lg rounded-[12px] ">
          <span className="absolute top-4 right-4 text-4xl text-[red]">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>

         
         <div className="relative w-full h-[312px] bg-placeholderColor shadow-lg rounded-[12px] mt-5">
          <span className="absolute top-4 right-4 text-4xl text-[red]">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div> */}


      <section className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-nowrap">No Favorites Yet</p>
      </section>
    </>
  );
};

export default Favorites;
