// components/Sidebar.jsx
import React, { useState, useEffect } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faFolder,
  faClipboardList,
  faChevronDown,
  faChevronUp,
  faBell,
  faLifeRing,
  faCog,
  faUserCircle,
  faTimes,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Example menu structure with Font Awesome icons.
 */
const MENU_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: faHome,
    href: "/",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: faTachometerAlt,
    href: "",
  },
  {
    id: "projects",
    label: "Projects",
    icon: faFolder,
    href: "",
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: faClipboardList,
    href: "",
  },
  {
    id: "reporting",
    label: "Reporting",
    icon: faClipboardList,
    subItems: [
      { id: "overview", label: "Overview", href: "" },
      {
        id: "notifications",
        label: "Notifications",
        href: "",
      },
      { id: "analytics", label: "Analytics", href: "" },
      { id: "reports", label: "Reports", href: "" },
    ],
  },
  {
    id: "users",
    label: "Users",
    icon: faUserCircle,
    subItems: [
      { id: "all-users", label: "All Users", href: "/users" },
      { id: "invite-user", label: "Invite User", href: "/users" },
    ],
  },
];

/**
 * Sidebar component
 *
 * Props:
 *   - isOpen: boolean, whether the sidebar is open or closed
 *   - onClose: function to call when the sidebar (or overlay) should close
 */
export default function Sidebar({ isOpen, onClose }) {
  const [user, setUser] = useState(null);

  // ✅ Reusable function to fetch latest user data
  const fetchUserData = async () => {
    const storedUser = localStorage.getItem("user");
    const { _id } = JSON.parse(storedUser);

    try {
      const res = await fetch(`${BASE_URL}/api/users/${_id}`);
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error("❌ Error fetching user data:", err);
    }
  };

  // ✅ On mount, fetch user or redirect
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/register");
      return;
    }

    fetchUserData();
  }, []);

  //     const {

  //   name,
  //   lastName,
  //   email,
  //   profilePicture,

  // } = user;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT token
    localStorage.removeItem("user"); // ✅ remove stored user data
    navigate("/register"); // redirect to register page
  };

  const [openSections, setOpenSections] = useState({});

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Toggle expand/collapse of a specific section
  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // Wrapper for overlay + sidebar
        <motion.div key="sidebar-wrapper" className="fixed inset-0 h-full z-50 flex">
          {/* Overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Sidebar panel */}
          <motion.aside
            key="sidebar"
            className="relative flex w-64 flex-col bg-white text-black shadow-xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <h2 className="text-lg font-semibold">Untitled UI</h2>
              <button
                className="text-black hover:text-gray-600 focus:outline-none"
                onClick={onClose}
                aria-label="Close sidebar"
              >
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
            </div>

            {/* Search Input (optional) */}
            <div className="px-4 py-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:border-black focus:outline-none"
              />
            </div>

            {/* Main Menu */}
            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <ul className="space-y-1">
                {MENU_ITEMS.map((item) => (
                  <li key={item.id}>
                    {item.subItems ? (
                      /* Accordion parent */
                      <div>
                        <button
                          onClick={() => toggleSection(item.id)}
                          className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 focus:outline-none"
                        >
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="h-5 w-5"
                            />
                            <span>{item.label}</span>
                          </div>
                          {openSections[item.id] ? (
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="h-4 w-4"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="h-4 w-4"
                            />
                          )}
                        </button>

                        {/* Accordion children */}
                        <AnimatePresence>
                          {openSections[item.id] && (
                            <motion.ul
                              key="sub-list"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1 space-y-1 pl-8"
                            >
                              {item.subItems.map((sub) => (
                                <li key={sub.id}>
                                  <Link
                                    to={sub.href}
                                    className="block rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Single menu link */
                      <Link
                        to={item.href}
                        className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer Links */}
            <div className="border-t border-gray-200 px-4 py-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/notifications"
                    className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
                    <span>Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="h-5 w-5" />
                    <span>Support</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faCog} className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>

                <li>
                  <span
                    onClick={handleLogout}
                    className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-[red] hover:bg-gray-100"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      className="h-5 w-5"
                    />
                    <span>Log Out</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Profile Section */}
            <div className="mt-auto border-t border-gray-200 px-4 py-4">
              {!user ? (
                <div className="p-3 flex items-center gap-2">
                  <div className="spinner w-5 h-5 border-gray-800 border-t-white"></div>
                  <span className="text-gray-800">Loading Profile</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      user.profilePicture
                        ? `${user.profilePicture}`
                        : "https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
                    }
                    alt="User Avatar"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {user.name} {user.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
