import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

/* ============================= */
/* CSS OUTSIDE COMPONENT */
/* ============================= */
const sliderStyles = `
.mySwiper {
  width: 100%;
  height: 100vh;
  position: relative;
}

.swiper-slide {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #ffffff;
  text-align: center;
}

.parallax-bg {
  position: absolute;
  inset: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.parallax-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  z-index: 2;
}

.subtitle {
  font-size: 22px;
  font-weight: 400;
  z-index: 2;
}

.swiper-button-next,
.swiper-button-prev {
  color: #ffffff;
}

.swiper-pagination-bullet {
  background: #ffffff;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  background: #ffffff;
  opacity: 1;
}
`;

export default function StaticSlider() {
  return (
    <>
      {/* Inject CSS once */}
      <style>{sliderStyles}</style>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${banner1})` }}
            data-swiper-parallax="-23%"
          />
          <div className="title" data-swiper-parallax="-300">
            Zootopia
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            The ultimate odd-couple detective duo is back! Join Judy Hopps and
            Nick Wilde as they dive into a brand-new, high-stakes mystery in the
            sprawling, animal-filled metropolis
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${banner2})` }}
            data-swiper-parallax="-23%"
          />
          <div className="title" data-swiper-parallax="-300">
            The Bad Guys
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            They’re trying to be good, but being "bad" is just so much more fun!
            Follow the world’s most wanted reformed criminals as they’re pulled
            back for one final, hilarious heist.
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${banner3})` }}
            data-swiper-parallax="-23%"
          />
          <div className="title" data-swiper-parallax="-300">
            Dog Man
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Half dog, half man, and all hero! Based on the global best-selling sensation, this crime-fighting canine is ready to fetch justice and save the city from his feline arch-nemesis
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
