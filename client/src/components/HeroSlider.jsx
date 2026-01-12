import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full"
      >

        {/* ================= KIDS & MIDDLE SCHOOL ================= */}
        <SwiperSlide>
          <div className="h-[300px] bg-gradient-to-r from-blue-100 to-blue-200 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 gap-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Kids & Middle School
                </h2>
                <p className="text-gray-700 mb-6 max-w-md">
                  Comfortable, durable & playful school uniforms designed for young learners.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">
                  Shop Kids Wear
                </button>
              </div>

              <img
                src="https://media.istockphoto.com/id/1709220046/vector/group-of-scouts-boy-and-girl-with-backpack-holding-flag-hiking-in-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=0mKqlPq78sM5YUzG1cNjqyY-T1GWiTXkOwyO7K_LXu4="
                alt="Kids school uniform"
                className="h-56 w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* ================= HIGH SCHOOL ================= */}
        <SwiperSlide>
          <div className="h-[300px] bg-gradient-to-r from-purple-100 to-purple-200 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 gap-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  High School
                </h2>
                <p className="text-gray-700 mb-6 max-w-md">
                  Smart, disciplined & modern uniforms that match growing confidence.
                </p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700">
                  Explore Collection
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5"

                alt="High school students"
                className="h-56 w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* ================= CORPORATE WEAR ================= */}
        <SwiperSlide>
          <div className="h-[300px] bg-gradient-to-r from-orange-100 to-orange-200 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 gap-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Corporate Wear
                </h2>
                <p className="text-gray-700 mb-6 max-w-md">
                  Professional uniforms for offices, institutions & corporate teams.
                </p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700">
                  View Collection
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Corporate uniforms"
                className="h-56 w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* ================= ACCESSORIES ================= */}
        <SwiperSlide>
          <div className="h-[300px] bg-gradient-to-r from-emerald-100 to-emerald-200 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 gap-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Accessories
                </h2>
                <p className="text-gray-700 mb-6 max-w-md">
                  Belts, ties, socks & everyday school essentials to complete the look.
                </p>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700">
                  Shop Accessories
                </button>
              </div>

              <img
                src="https://media.istockphoto.com/id/483959744/vector/back-to-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=I2srN46o3exgHVZtE0XMgqxZDfjunYUjYos5vbu7dHQ="
                alt="School accessories"
                className="h-56 w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
