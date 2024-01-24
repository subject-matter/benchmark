import React, { useEffect, useState } from 'react';
import Star from './ui/star';
import { getReviews } from '../../../../sanity/sanity-utils';
import { Review } from '../../../../types/reviews';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { review } from '../../../../sanity/schemas/review';

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
		<div className="bg-white  text-black mx-[10px] md:mx-0 p-5 rounded-lg md:w-[400px] flex flex-col justify-between space-y-10 relative">
			<div>
				<Swiper
					spaceBetween={30}
					effect={"fade"}
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
							<div className="bg-white min-h-[400px]">
								<div className="flex justify-between items-center mb-10">
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
