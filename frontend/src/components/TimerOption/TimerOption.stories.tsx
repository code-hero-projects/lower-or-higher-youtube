import { TimerOption } from './TimerOption';

export const DisplayTimerOptions = () => <TimerOption useTimer={true} onToogleUseTimer={() => console.log()} />;

export default {
  title: 'Components/TimerOption',
  components: TimerOption
};