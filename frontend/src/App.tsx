import { useDispatch, useSelector } from "react-redux";
import { CurrentGameState } from "./models";
import { EndGamePage, HomePage, InGamePage } from "./pages";
import { selectGameState, setupGame } from "./redux";
import { Carousel } from './components';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupGame())
  }, []);

  const gamePagesIndexes = {
    [CurrentGameState.NotStarted]: 0,
    [CurrentGameState.Playing]: 1,
    [CurrentGameState.Ended]: 2,
  };

  const { gameState } = useSelector(selectGameState);
  const carouselIndex = gamePagesIndexes[gameState];

  return (
    <Carousel carouselIndex={carouselIndex} vertical={false}>
      <HomePage />
      <InGamePage />
      <EndGamePage />
    </Carousel>
  );
}

export default App;
