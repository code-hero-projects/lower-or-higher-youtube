import { useDispatch } from "react-redux";
import { resetGame } from "../../redux";
import { EndGameCountrySelector } from "./EndGameCountrySelector";

export function EndGameCountrySelectorContainer() {
  const dispatch = useDispatch();

  const onChooseAnotherCountry = () => {
    dispatch(resetGame());
  };

  return <EndGameCountrySelector onChooseAnotherCountry={onChooseAnotherCountry} />;
}