export const toggleBetSlip = (bets, bet) => {
  const betExists = bets.some(({ id }) => id === bet.id);
  if (betExists) {
    return bets.filter(({ id }) => id !== bet.id);
  } else {
    return [...bets, bet];
  }
};
