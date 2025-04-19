"use client";

import Navbar from "@/app/components/Navbar";
import ThemeToggle from "@/app/components/ThemeToggle";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-60 relative min-h-[400px] bg-cover bg-center md:bg-[length:100%_auto] flex items-center"
        style={{ backgroundImage: "url(/images/backgrounds/Bobo&Bros.png)" }}
        aria-label="Hero section catsitter">
        <div className="container mx-auto px-4">
          <div className="text-center flex flex-col items-center">
            <div className="max-w-2xl text-white mb-12">
              <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p className="text-lg mb-6 md:text-xl lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <button
                className="bg-[#e2725b] px-8 py-3 rounded-lg hover:bg-[#d06550] transition-colors 
                          text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 
                          focus:ring-[#e2725b]"
                aria-label="Hubungi Kami">
                Hubungi Kami
              </button>
            </div>

            {/* Cards Carousel */}
            <div className="w-full max-w-6xl mx-auto pb-10 relative">
              {/* Navigation Arrows */}
              <div className="swiper-button-prev !text-[#e2725b] hidden md:!hidden"></div>
              <div className="swiper-button-next !text-[#e2725b] hidden md:!hidden"></div>

              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    navigation: false,
                  },
                }}
                className="mySwiper">
                {[1, 2, 3].map((item) => (
                  <SwiperSlide key={item}>
                    <div
                      className="bg-white/90 p-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-4 mx-2"
                      role="region"
                      aria-label={`Keunggulan ${item}`}>
                      <FaStar className="text-[#e2725b] text-3xl" aria-hidden="true" />
                      <h4 className="text-xl font-semibold text-gray-800">Placeholder Keunggulan {item}</h4>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Toggle Positioning */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </main>
  );
}
