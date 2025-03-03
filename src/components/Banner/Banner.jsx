
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/fdgMZMj1/banner01.jpg",
    title: "Professional Football",
    subtitle: "FREE WORKOUTS NOW",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/JwwC5Vj4/banner02.webp",
    title: "Elite Basketball",
    subtitle: "IMPROVE YOUR GAME",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/FLtkvzvG/banner03.jpg",
    title: "Run Like a Pro",
    subtitle: "JOIN THE RACE",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className={`relative w-full h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <p className="text-lg font-semibold">{slide.subtitle}</p>
            <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
            <button className="mt-4 bg-yellow-400 px-6 py-2 text-black font-semibold rounded-md">Shop Now</button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute bottom-4 left-4 bg-black text-white p-3 rounded-full"
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </div>
  );
};

export default Banner;