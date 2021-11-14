import { HighScoreInput } from "./HighScoreInput";

export const Input = () => <HighScoreInput onNameInput={(name) => alert(name)} />;

export default {
  title: 'Components/HighScoreInput',
  components: HighScoreInput
};