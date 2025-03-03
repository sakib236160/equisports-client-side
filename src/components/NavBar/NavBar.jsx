import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white shadow-lg">
      <div className="min-h-20 flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-bold">EquiSports</div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => `hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-sports"
            className={({ isActive }) => `hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
          >
            All Sports Equipment
          </NavLink>
          <NavLink
            to="/add-equipment"
            className={({ isActive }) => `hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/my-equipment"
            className={({ isActive }) => `hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
          >
            My Equipment
          </NavLink>
        </div>

        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-lg font-semibold">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-black text-white">
          <NavLink
            to="/"
            className={({ isActive }) => `block py-2 hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-sports"
            className={({ isActive }) => `block py-2 hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            All Sports Equipment
          </NavLink>
          <NavLink
            to="/add-equipment"
            className={({ isActive }) => `block py-2 hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/my-equipment"
            className={({ isActive }) => `block py-2 hover:text-gray-400 ${isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            My Equipment
          </NavLink>
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-lg font-semibold w-full">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
