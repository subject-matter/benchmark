//@ts-nocheck
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function MagSwiper() {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="reviews-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.default} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const Image = ({ src }) => {
  return <img src={src} alt="Magazine Page" />;
};

export default MagSwiper;
