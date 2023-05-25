import { useEffect, useState } from 'react';

export const useCountdown = (
  settingsTime: number,
  isPlay: boolean,
  resetFc: () => void
) => {
  const [counter, setCounter] = useState(settingsTime);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlay) {
      interval = setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
      }, 1000);
    }

    if (!counter) {
      setCounter(settingsTime);
      resetFc();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay, counter, settingsTime]);

  useEffect(() => {
    setCounter(settingsTime);
  }, [settingsTime]);

  return { counter };
};
