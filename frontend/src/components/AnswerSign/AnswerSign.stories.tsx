import { Box } from "@material-ui/core";
import { Answer } from "../../models";
import { AnswerSign } from "./AnswerSign";

export const DisplayVs = () => <Box sx= {{ backgroundColor: 'black' }}><AnswerSign answer={Answer.NotSelected} /></Box>;

export const DisplayCorrect = () => <Box sx= {{ backgroundColor: 'black' }}><AnswerSign answer={Answer.Correct} /></Box>;

export const DisplayIncorrect = () => <Box sx= {{ backgroundColor: 'black' }}><AnswerSign answer={Answer.Incorrect} /></Box>;

export default {
  title: 'Components/AnswerSign',
  components: AnswerSign
};