import { Box } from "@material-ui/core";
import { useState } from "react";
import { Timer } from "./Timer";

export const DisplayTime = () => <Box sx={{backgroundColor: 'black'}}><Timer time={15} stopTime={false} onUpdateTime={() => {}} /></Box>;

export const OnUpdateTime = () => {
  const [time, setTime] = useState<number>(10);
  
  return <Box sx={{backgroundColor: 'black'}}><Timer time={time} stopTime={false} onUpdateTime={(currentTime) => setTime(currentTime)} /></Box>;
}

export const OnStopTime = () => {
  const [time, setTime] = useState<number>(20);
  const [stopTime, setStopTime] = useState<boolean>(false);

  setInterval(() => setStopTime(true), 10000);

  return <Box sx={{backgroundColor: 'black'}}><Timer time={time} stopTime={stopTime} onUpdateTime={(currentTime) => setTime(currentTime)} /></Box>
};

export default {
  title: 'Components/Timer',
  components: Timer
};