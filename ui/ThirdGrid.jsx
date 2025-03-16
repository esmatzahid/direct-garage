"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
const ThirdGrid = () => {
  const imageSrc = "/assets/imgs/insulation-feature.webp";
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "/assets/imgs/IMG-20250310-WA0057.jpg",
    },
    {
      id: 2,
      title: "Project 1",
      image: "/assets/imgs/IMG-20250310-WA0055.jpg",
    },
    {
      id: 3,
      title: "Project 1",
      image: "/assets/imgs/IMG-20250310-WA0054.jpg",
    },
    {
      id: 4,
      title: "Project 1",
      image: "/assets/imgs/IMG-20250310-WA0053.jpg",
    },
    {
      id: 5,
      title: "Project 1",
      image: "/assets/imgs/IMG-20250310-WA0052.jpg",
    },
    
  ];
  return (
    <Swiper
    spaceBetween={4}
    slidesPerView={1} // Default for mobile
    loop={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false,
    }}
    speed={3000}
    modules={[Pagination, Autoplay]}
    breakpoints={{
      // When window width is >= 640px (sm)
      640: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      // When window width is >= 768px (md)
      768: {
        slidesPerView: 3,
        spaceBetween: 4,
      },
      // When window width is >= 1024px (lg)
      1024: {
        slidesPerView: 4,
        spaceBetween: 4,
      },
    }}
    >
      <div className=" my-5">
        <div className="image-main-container">
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="img-container">
                <Image
                  src={project.image}
                  alt={`Image `}
                  width={300}
                  height={300}
                //   style={{
                //     color: "transparent",
                //     height: "400px !important",
                //     objectFit: "cover",
                //     width: "100% !important",
                //   }}
                  className="img-fluid rounded main-image-container-swiper"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>

  );
};

export default ThirdGrid;
