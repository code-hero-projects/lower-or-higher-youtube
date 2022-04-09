import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, VideoGuessContainer, VideoInfoContainer } from "../../components";
import { AnswerSignContainer } from "../../components/AnswerSign";
import { extendVideos, selectVideoState } from '../../redux';
import { AnswerSignWrapper, BaseWrapper } from "./InGamePageStyled";

export function InGamePage() {
  const { videos } = useSelector(selectVideoState);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const dispatch = useDispatch();
  
  const onAnswer = (correct: boolean) => {
    if (correct) {
      if (carouselIndex === videos.length - 2) {
        dispatch(extendVideos());
      }
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
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