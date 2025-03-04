import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co.com/fdgMZMj1/banner01.jpg",
    title: "Basketball Gear",
    description: "Premium basketballs, shoes, and accessories for all players.",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/JwwC5Vj4/banner02.webp",
    title: "Football Gear",
    description: "Top-notch footballs, shoes, and accessories for matches.",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/FLtkvzvG/banner03.jpg",
    title: " Cricket Equipment",
    description: " High-quality cricket gear tailored for all levels.",
  },
];

const Banner = () => {
  return (
    <div className="relative h-screen max-w-screen-xl mx-auto mt-6">
      <Swiper
        effect={"fade"}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={slide.img}
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <h2 className="text-7xl font-bold text-white">{slide.title}</h2>
                  <p className="text-2xl text-gray-300 mt-4">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

