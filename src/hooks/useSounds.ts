import useSound from 'use-sound';

import starSfx from 'assets/sounds/startTimer.mp3';
import pauseSfx from 'assets/sounds/pauseTimer.mp3';
import timeUpSfx from 'assets/sounds/timesUp.mp3';
import slideSfx from 'assets/sounds/slide.mp3';

const volume = 1;
export const useSounds = () => {
  const [start] = useSound(starSfx, {
    interrupt: true,
    volume,
  });

  const [pause] = useSound(pauseSfx, {
    interrupt: true,
    volume,
  });

  const [timeUp] = useSound(timeUpSfx, {
    volume,
  });

  const [slide] = useSound(slideSfx, {
    volume,
  });

  return {
    start,
    pause,
    timeUp,
    slide,
  };
};
