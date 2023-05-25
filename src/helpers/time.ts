export const getTimeValues = (timeValue: number) => {
  const minutes = Math.floor(timeValue / 60);
  const seconds = timeValue % 60;
  const minutesValue = minutes.toString().padStart(2, '0');
  const secondsValue = seconds.toString().padStart(2, '0');

  return { minutesValue, secondsValue };
};
