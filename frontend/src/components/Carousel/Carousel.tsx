import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export interface CarouselProps {
  vertical: boolean;
  indexToSlide: number;
}

export const Carousel : React.FunctionComponent<CarouselProps> = props => {
  const { vertical, indexToSlide, children} = props;
  const [swipper, setSwipper] = useState<any>();

  useEffect(() => {
    if (swipper) {
      swipper.slideTo(indexToSlide);
    }
  }, [indexToSlide]);

  return (
    <Swiper allowTouchMove={false} direction={vertical ? 'vertical' : 'horizontal'} onSwiper={(swipper) => setSwipper(swipper)}>
      {React.Children.map(children, child => <SwiperSlide>{child}</SwiperSlide>)}
    </Swiper>
  );
}