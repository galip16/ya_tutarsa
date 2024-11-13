// BasketPage.tsx
import React, { useState } from 'react';
import Basket, { Bet } from '../../components/Basket';
import { Link } from 'react-router-dom';

interface Props {
    userBets: Bet[];
    setUserBets:React.Dispatch<React.SetStateAction<Bet[]>>
}

const BasketPage: React.FC<Props> = ({userBets, setUserBets}) => {


  const handleConfirmBets = () => {
    console.log('Confirmed Bets:', userBets);
  };

  return (
    <div>
      <h1>Your Basket</h1>
      <Basket basket={userBets} setUserBets={setUserBets} onConfirm={handleConfirmBets}  />
      <Link to='/'>
      Home
      </Link>
    </div>
  );
};

export default BasketPage;
