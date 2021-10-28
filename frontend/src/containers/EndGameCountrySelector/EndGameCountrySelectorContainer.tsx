import { useDispatch } from "react-redux";
import { EndGameCountrySelector } from "../../components";
import { resetGame } from "../../redux";

export function EndGameCountrySelectorContainer() {
  const dispatch = useDispatch();

  const onChooseAnotherCountry = () => {
    dispatch(resetGame());
  };

  return <EndGameCountrySelector onChooseAnotherCountry={onChooseAnotherCountry} />;
}