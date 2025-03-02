import {NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="min-h-20 bg-black text-white flex justify-between items-center px-6 py-4 shadow-lg">
      <div className="text-3xl font-bold">EquiSports</div>
      <div className="flex space-x-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-gray-400 ${
              isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-sports"
          className={({ isActive }) =>
            `hover:text-gray-400 ${
              isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
            }`
          }
        >
          All Sports Equipment
        </NavLink>
        <NavLink
          to="/add-equipment"
          className={({ isActive }) =>
            `hover:text-gray-400 ${
              isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
            }`
          }
        >
          Add Equipment
        </NavLink>
        <NavLink
          to="/my-equipment"
          className={({ isActive }) =>
            `hover:text-gray-400 ${
              isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
            }`
          }
        >
          My Equipment
        </NavLink>
      </div>
      <div>
        <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-lg font-semibold">
          login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
