export const calculatePercentageProfit = (totalDeposit: number, totalProfit: number): number => {
  if (totalDeposit <= 0) {
    throw new Error("Total Deposit must be greater than zero");
  }

  const percentageProfit = (totalProfit / totalDeposit) * 100;
  return percentageProfit;
};
