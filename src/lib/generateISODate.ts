export const generateISODate = () => {
  const currentDate = new Date();
  const eightWeeksLater = new Date(currentDate.getTime() + 8 * 7 * 24 * 60 * 60 * 1000);
  const formattedDate = eightWeeksLater.toISOString();

  return formattedDate;
};
