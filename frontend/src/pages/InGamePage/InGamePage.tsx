import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Carousel, VideoGuessContainer, VideoInfoContainer } from "../../components";
import { AnswerSignContainer } from "../../components/AnswerSign";
import { selectVideoState } from '../../redux';
import { AnswerSignWrapper, BaseWrapper } from "./InGamePageStyled";

export function InGamePage() {
  const { videos } = useSelector(selectVideoState);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  
  const onAnswer = (correct: boolean) => {
    if (correct) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  return (
    <Carousel vertical={true} carouselIndex={carouselIndex}>
      {videos.map((video, index) =>
        <BaseWrapper>
          <VideoInfoContainer video={video} />
          <AnswerSignWrapper>
            <AnswerSignContainer />
          </AnswerSignWrapper>
          {index < videos.length - 1 && <VideoGuessContainer onAnswer={onAnswer} videoGuessed={video} videoToGuess={videos[index + 1]}/>}
        </BaseWrapper>
      )}
    </Carousel>
  );
}