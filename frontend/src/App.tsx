import { useSelector } from "react-redux";
import { CurrentGameState } from "./models";
import { EndGamePage, HomePage, InGamePage } from "./pages";
import { selectGameState } from "./redux";
import { Carousel } from './components';
import { LeaderboardPage } from './pages/LeaderboardPage';

function App() {
  const gamePagesIndexes = {
    [CurrentGameState.Leaderboard]: 0,
    [CurrentGameState.NotStarted]: 1,
    [CurrentGameState.Playing]: 2,
    [CurrentGameState.Ended]: 3,
    [CurrentGameState.EndGameLeaderboard]: 4,
  };

  const { gameState } = useSelector(selectGameState);
  const carouselIndex = gamePagesIndexes[gameState];

  return (
    <Carousel carouselIndex={carouselIndex} vertical={false}>
      <LeaderboardPage />
      <HomePage />
      <InGamePage />
      <EndGamePage />
      <LeaderboardPage />
    </Carousel>
  );
}

export default App;
