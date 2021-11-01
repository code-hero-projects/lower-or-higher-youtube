import { styled } from '@material-ui/system';
import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { SwiperWrapper } from './CarouselStyled';

interface CarouselProps {
  vertical: boolean;
  carouselIndex: number;
}

export const Carousel : React.FunctionComponent<CarouselProps> = props => {
  const { carouselIndex, vertical, children} = props;
  const [swipper, setSwipper] = useState<any>();

  useEffect(() => {
    if (swipper) {
      swipper.slideToLoop(carouselIndex);
    }
  }, [carouselIndex]);

  return (
    <SwiperWrapper allowTouchMove={false} loop={true} direction={vertical ? 'vertical' : 'horizontal'} onSwiper={(swipper) => setSwipper(swipper)} slidesPerView={1}>
      {React.Children.map(children, child => <SwiperSlide>{child}</SwiperSlide>)}
    </SwiperWrapper>
  );
}