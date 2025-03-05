import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  
  const { user, handleLogout } = useContext(authContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <nav className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            EquiSports
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center gap-2">
              {/* Phone Icon Bounce Animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <PhoneIcon size={20} className="text-white" />
              </motion.div>

              {/* Phone Number with Marquee Effect */}
              <div
                className="relative w-[150px] overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="whitespace-nowrap flex"
                  animate={isHovered ? {} : { x: ["0%", "-100%"] }}
                  transition={
                    isHovered
                      ? {}
                      : { repeat: Infinity, duration: 5, ease: "linear" }
                  }
                >
                  <a
                    href="tel:01780619346"
                    className="text-sm text-white hover:underline mr-6"
                  >
                    (+88) 01780-619346
                  </a>
                  <a
                    href="tel:01780619346"
                    className="text-sm text-white hover:underline"
                  >
                    (+88) 01780-619346
                  </a>
                </motion.div>
              </div>
            </div>
            {user?.email ? (
              <div className="relative group items-center gap-4 flex">
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                  />
                  <div className="absolute  left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {user.displayName}
                  </div>
                </div>

                <NavLink
                  onClick={handleLogout}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white dark:text-white underline"
                      : "text-white dark:text-white hover:underline"
                  }
                >
                  Log Out
                </NavLink>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={handleLogout}
                className={({ isActive }) =>
                  isActive
                    ? "text-white dark:text-white underline"
                    : "text-white dark:text-white hover:underline"
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-sports"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                   All Sports Equipment
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/add-equipment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                  Add Equipment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-equipment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-500 underline"
                      : "text-gray-900 dark:text-white hover:underline"
                  }
                >
                   My Equipment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


