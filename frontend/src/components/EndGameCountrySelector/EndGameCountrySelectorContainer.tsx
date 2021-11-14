import { useDispatch } from "react-redux";
import { resetGame, resetScore } from "../../redux";
import { EndGameCountrySelector } from "./EndGameCountrySelector";

export function EndGameCountrySelectorContainer() {
  const dispatch = useDispatch();

  const onChooseAnotherCountry = () => {
    dispatch(resetGame());
    dispatch(resetScore());
  };

  return <EndGameCountrySelector onChooseAnotherCountry={onChooseAnotherCountry} />;
}