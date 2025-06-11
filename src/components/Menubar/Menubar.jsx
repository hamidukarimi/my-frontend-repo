import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEye,
  faMusic,
  faVideo,
  faBookOpenReader,
  faImages,
  faHeart,
  faCartShopping,
  faUser,
  faAdd,
  faPlus,
  faSquarePlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";

const Menubar = () => {
  const menusItems = [
    {
      objectId: 1,
      src: faHome,
      name: "Home",
      path: "/",
    },
    {
      objectId: 2,
      src: faUsers,
      name: "Users",
      path: "/users",
    },
    {
      objectId: 3,
      src: faSquarePlus,
      size: "text-3xl",
      path: "/create-post",
    },
    {
      objectId: 4,
      src: faCartShopping,
      name: "Cart",
      path: "/cart",
    },
    {
      objectId: 5,
      src: faUser,
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="menus  fixed bottom-0 w-full h-[65px] bg-white  grid grid-cols-5  items-center border-t-2 z-30">
      {menusItems.map((menusItem) => (
        <NavLink
          key={menusItem.objectId}
          to={menusItem.path}
          exact
          activeClassName=" "
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderTop: isActive ? "2px solid white" : "",
              color: isActive ? "black" : "#515151",
            };
          }}
        >
          <div className="menus-item w-full h-[63px]  bg-transparent hover:bg-[#f0f0f0] transition   flex flex-col justify-center items-center gap-1 text-[21px] ">
            <FontAwesomeIcon className={`${menusItem.size}`} icon={menusItem.src} />
            <span style={{ fontSize: "12px" }}>{menusItem.name}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Menubar;
