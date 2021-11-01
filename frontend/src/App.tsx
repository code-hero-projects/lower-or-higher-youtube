import { useSelector } from "react-redux";
import { CurrentGameState } from "./models";
import { EndGamePage, HomePage, InGamePage } from "./pages";
import { selectGameState } from "./redux";
import { useState } from 'react';
import { Carousel } from './components';

function App() {
  const gamePagesIndexes = {
    [CurrentGameState.NotStarted]: 0,
    [CurrentGameState.Playing]: 1,
    [CurrentGameState.Ended]: 2
  };

  const { gameState } = useSelector(selectGameState);
  const indexToSlide = gamePagesIndexes[gameState];

  return (
    <Carousel indexToSlide={indexToSlide} vertical={false}>
      <HomePage />
      <InGamePage />
      <EndGamePage />
    </Carousel>
  );
}

export default App;
