import { Bet } from "../components/Basket";

export const getBetsFromLocalStorage = (): Bet[] => {
  const storedBets = localStorage.getItem('userBets');
  return storedBets ? JSON.parse(storedBets) : [];
};

export const saveBetsToLocalStorage = (bets: Bet[]) => {
  localStorage.setItem('userBets', JSON.stringify(bets));
};
