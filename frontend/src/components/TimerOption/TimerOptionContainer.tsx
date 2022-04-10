import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionState, toggleUseTimer } from '../../redux';
import { TimerOption } from './TimerOption';

export function TimerOptionContainer() {
  const { useTimer } = useSelector(selectQuestionState);
  const dispatch = useDispatch();

  const onToogleUseTimer = () => dispatch(toggleUseTimer());

  return <TimerOption useTimer={useTimer} onToogleUseTimer={onToogleUseTimer} />;
}