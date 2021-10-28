import { useSelector } from "react-redux";
import { CurrentGameState } from "./models";
import { EndGamePage, HomePage, InGamePage } from "./pages";
import { selectGameState } from "./redux";

function App() {
  const { gameState } = useSelector(selectGameState);

  const gamePages = {
    [CurrentGameState.NotStarted]: <HomePage />,
    [CurrentGameState.Playing]: <InGamePage />,
    [CurrentGameState.Ended]: <EndGamePage />
  };

  return gamePages[gameState];
}

export default App;
