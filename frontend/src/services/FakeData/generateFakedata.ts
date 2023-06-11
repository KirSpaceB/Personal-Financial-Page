export const generateFakeData = () => {
  const startDate = new Date('2023-06-07T11:30:00');
  const data = [];

  for (let i = 0; i < 10; i++) {
    const time = new Date(startDate.getTime() + i * 5 * 60 * 1000);
    const open = Math.random() * 1000;
    const high = open + Math.random() * 100;
    const low = open - Math.random() * 100;
    const close = low + Math.random() * (high - low);
    const volume = Math.floor(Math.random() * 100000);

    data.push({
      time,
      open: open.toFixed(4),
      high: high.toFixed(4),
      low: low.toFixed(4),
      close: close.toFixed(4),
      volume: volume.toString(),
    });
  }
  return data;
};