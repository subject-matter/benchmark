import React, { useEffect, useState } from 'react';
import Star from './ui/star';
import { getReviews } from '../../../../sanity/sanity-utils';
import { Review } from '../../../../types/reviews';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { review } from '../../../../sanity/schemas/review';

const reviews = [
  {
    author: 'Russell Tullis',
    text: `We used benchmark to build our new house in Cashmere Estate, we have been in the house for 7 months now
		and absolutely loving it. Richard was really enthusiastic about listening to our ideas and how we live as
		a family to create a unique design. Killian did a fantasic job of project management. We wanted a boutique
		high quality professional building company to build a modern architecural house for good value, and
		benchmark more than exceeded all our expectations; would build with them again! They made the whole
		process really straight forward and were a really enjoyable group of people to work with. Thanks team for
		the awesome house!`,
    rating: 5,
  },
  {
    author: 'Emily Timothy',
    text: `We were impressed with Benchmark from the start. The small, warm team really listened and cared about our vision. Richard completely nailed our brief and designed a concept plan that we instantly loved. We valued the guidance that Benchmark offered and passion for attention to detail. We built in challenging times with rising costs and delays in supplies. Despite this Benchmark remained transparent and always responded to any concerns we had; listening and understanding. Benchmark instilled trust which was paramount in the journey of building. We absolutely love our beautiful home which is so well designed - delivering elegant form and function with all the features we dreamed of.`,
    rating: 5,
  },
  {
    author: 'Russell Tullis',
    text: `We used benchmark to build our new house in Cashmere Estate, we have been in the house for 7 months now
		and absolutely loving it. Richard was really enthusiastic about listening to our ideas and how we live as
		a family to create a unique design. Killian did a fantasic job of project management. We wanted a boutique
		high quality professional building company to build a modern architecural house for good value, and
		benchmark more than exceeded all our expectations; would build with them again! They made the whole
		process really straight forward and were a really enjoyable group of people to work with. Thanks team for
		the awesome house!`,
    rating: 5,
  },
  {
    author: 'Emily Timothy',
    text: `We were impressed with Benchmark from the start. The small, warm team really listened and cared about our vision. Richard completely nailed our brief and designed a concept plan that we instantly loved. We valued the guidance that Benchmark offered and passion for attention to detail. We built in challenging times with rising costs and delays in supplies. Despite this Benchmark remained transparent and always responded to any concerns we had; listening and understanding. Benchmark instilled trust which was paramount in the journey of building. We absolutely love our beautiful home which is so well designed - delivering elegant form and function with all the features we dreamed of.`,
    rating: 5,
  },
];

export default function ReviewCards() {
  //   const reviews = getReviews();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index + 1 === reviews.length) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="bg-white  text-black mx-[10px] md:mx-0 p-5 rounded-lg h-auto md:w-[350px] flex flex-col justify-between space-y-10">
      <div>
        <Tabs value={`review-${index}`} className="">
          {reviews.map((review, i) => (
            <TabsContent value={`review-${i}`} key={i}>
              <div className="flex justify-between items-center mb-10">
                <p className="text-xs-medium">{review.author}</p>
                <span className="flex">
                  {Array.from({ length: review.rating }).map((item, i) => (
                    <Star key={i} />
                  ))}
                </span>
              </div>
              <p className="text-xxs">{review.text}</p>
            </TabsContent>
          ))}

          <TabsList>
            {Array.from({ length: reviews.length }).map((_, i) => (
              <TabsTrigger key={i} value={`review-${i}`}></TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
