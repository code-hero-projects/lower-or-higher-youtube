import { useEffect, useState } from 'react';
import { Carousel } from './Carousel';

interface CarouselWithStateProps {
  vertical: boolean;
}

function CarouselWithState ({ vertical }: CarouselWithStateProps) {
  const [carouselIndex, setChangeIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setChangeIndex(carouselIndex + 1) , 1500);
    return () => clearInterval(interval);
  }, [carouselIndex]);

  return (
    <Carousel vertical={vertical} carouselIndex={carouselIndex}>
      <h1 style={{ height: '100%' }}>First Page</h1>
      <h1 style={{ height: '100%' }}>Second Page</h1>
      <h1 style={{ height: '100%' }}>Third Page</h1>
      <h1 style={{ height: '100%' }}>Fourth Page</h1>
      <h1 style={{ height: '100%' }}>Fifth Page</h1>
    </Carousel>
  );
}

export const Horizontal = () => <CarouselWithState vertical={false} />;

export const Vertical = () => <CarouselWithState vertical={true} />;

export default {
  title: 'Components/Carousel',
  components: Carousel
};