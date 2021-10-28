import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { HigherLowerOption } from "./HigherLowerOption";

export const HigherOption = () => <HigherLowerOption text="higher" color="success" icon={<ExpandLess />} onOption={() => {}} />

export const LowerOption = () => <HigherLowerOption text="lower" color="error" icon={<ExpandMore />}  onOption={() => {}}/>

export const OnClick = () => <HigherLowerOption text="higher" color="success" icon={<ExpandLess />}  onOption={() => alert('clicked')}/>

export default {
  title: 'Components/HigherLowerOption',
  components: HigherLowerOption
};