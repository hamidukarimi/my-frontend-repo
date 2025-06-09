import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
// import { icons } from "@/assets/images";
import Notifications from "../notifications/Notifications";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Overlay from "../Overlay/Overlay";

let Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => setSidebarShow((prev) => !prev);
  const closeSidebar = () => setSidebarShow(false);

  return (
    <>
      <nav className="sticky -top-1 z-40 w-full bg-[#f1f2f4]  border-b-4 flex justify-between  text-[27px]   py-1 px-5">
      <button
            onClick={() => setSidebarOpen(true)}
            className="text-black hover:text-gray-700 focus:outline-none"
            aria-label="Open sidebar"
          >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="flex  items-center relative">
          <Link to="/create-post" className="cursor-pointer p-3 rounded-full hover:bg-[#e5e5e5] transition">
          <span>
            <img className="w-6" src="./plus.svg" />
          </span>
          </Link>
          <span className="cursor-pointer p-3 rounded-full hover:bg-[#e5e5e5] transition">
            <img src="./heart.svg" />
          </span>
          <span className="cursor-pointer p-3  rounded-full hover:bg-[#e5e5e5] transition">
            <img src="./bell-icon.svg" />
          </span>
        </div>
      </nav>

      
      {/* Inject the Sidebar component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
    </>
  );
};

export default Header;
