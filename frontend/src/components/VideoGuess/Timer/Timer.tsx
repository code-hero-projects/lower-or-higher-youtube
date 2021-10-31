import { useEffect } from "react";
import { TypographyWrapper } from "../../Styled";

interface TimerProps {
  time: number;
  stopTime: boolean;
  onUpdateTime: (time: number) => void;
}

export function Timer({ time, stopTime, onUpdateTime }: TimerProps) {
  useEffect(() => {
    if (!stopTime && time !== 0) {
      const newTime = time - 1;
      const interval = setInterval(() => {
        onUpdateTime(newTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  return <TypographyWrapper variant="h4">Time left: {time}</TypographyWrapper>
}