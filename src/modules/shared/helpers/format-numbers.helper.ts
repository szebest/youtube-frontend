export const formatNumbers = (views: number, precision: number = 0): string => {
  const k = 1000;
  const sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
  const i = Math.floor(Math.log(views) / Math.log(k));

  return `${parseFloat((views / Math.pow(k, i)).toFixed(precision))}${sizes[i]}`;
}