import { Checkbox, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import { Title } from '../Styled';

export interface TimerOptionProps {
  useTimer: boolean;
  onToogleUseTimer: () => void;
}

export function TimerOption({ useTimer, onToogleUseTimer }: TimerOptionProps) {
  return (
    <FormGroup>
      <Typography align="center">
        <FormControlLabel
          control={<Checkbox checked={useTimer} color="default" />}
          onChange={onToogleUseTimer}
          label={<Title variant="h4" marginTop={1} marginLeft={2}>Play with timer</Title>}
          sx={{'& .MuiSvgIcon-root': { fontSize: 45 } }}
        />
      </Typography>
    </FormGroup>
  );
}