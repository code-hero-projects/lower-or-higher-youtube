import { EndGameCountrySelector } from "./EndGameCountrySelector";

export const DisplayEndGameCountrySelector = () => <EndGameCountrySelector onChooseAnotherCountry={() => {}}/>;

export const OnClick = () => <EndGameCountrySelector onChooseAnotherCountry={() => {alert('clicked')}}/>;

export default {
  title: 'Components/EndGameCountrySelector',
  components: EndGameCountrySelector
};