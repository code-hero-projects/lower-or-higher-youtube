import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { SwiperWrapper } from './CarouselStyled';

interface CarouselProps {
  vertical: boolean;
  carouselIndex: number;
}

export const Carousel : React.FunctionComponent<CarouselProps> = props => {
  const { carouselIndex, vertical, children } = props;
  const [ swipper, setSwipper ] = useState<any>();

  useEffect(() => {
    if (swipper) {
      swipper.slideTo(carouselIndex);
    }
  }, [carouselIndex]);

  return (
    <SwiperWrapper allowTouchMove={true} initialSlide={carouselIndex} direction={vertical ? 'vertical' : 'horizontal'} onSwiper={(swipper) => setSwipper(swipper)} slidesPerView={1}>
      {React.Children.map(children, child => <SwiperSlide>{child}</SwiperSlide>)}
    </SwiperWrapper>
  );
}