import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

interface TimerProps {
  initialTime: number;
  onUpdateTime: (time: number) => void;
}

export function Timer({ initialTime, onUpdateTime }: TimerProps) {
  const [currentTime, setCurrentTime] = useState<number>(initialTime);

  useEffect(() => {
    if (currentTime != 0) {
      const newTime = currentTime - 1;
      const interval = setInterval(() => {
        onUpdateTime(newTime);
        setCurrentTime(newTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentTime]);

  return <Typography variant="h4" color="common.white">Time left: {currentTime}</Typography>
}