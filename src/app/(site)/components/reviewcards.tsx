import React, { useEffect, useState } from 'react';
import Star from './ui/star';
import { getReviews } from '../../../../sanity/sanity-utils';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

export default function ReviewCards() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getReviews();
        setReviews(fetchedReviews);
      } catch (error) {
        throw error;
      }
    };
    fetchReviews();
  }, []);
  return (
    <div className="relative flex w-full flex-col justify-between space-y-10 rounded-lg bg-white p-5 text-black  md:w-[400px]">
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
          {reviews.map((review: any, i) => (
            <SwiperSlide key={i}>
              <div className="h-auto bg-white md:min-h-[400px]">
                <div className="mb-10 flex items-center justify-between">
                  <p className="text-xs-medium">{review.reviewer}</p>
                  <span className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                </div>
                <p className="text-xxs">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
