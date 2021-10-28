import { Typography } from "@material-ui/core";
import { useEffect } from "react";

interface TimerProps {
  time: number;
  onUpdateTime: (time: number) => void;
}

export function Timer({ time, onUpdateTime }: TimerProps) {
  useEffect(() => {
    if (time !== 0) {
      const newTime = time - 1;
      const interval = setInterval(() => {
        onUpdateTime(newTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  return <Typography variant="h4" color="common.white">Time left: {time}</Typography>
}