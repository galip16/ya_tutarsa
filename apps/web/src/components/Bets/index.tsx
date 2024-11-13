import React from 'react'
import { betFaktors } from './betFaktors'
import {  Container } from './styled';
import { Bet } from '../Basket';
import BetCard from './BetCard';
import { getBetsFromLocalStorage } from '../../utils/storage';
import { Match } from '../../graphql/types';




interface Props {
    match:Match;
    setUserBets:React.Dispatch<React.SetStateAction<Bet[]>>
  }

export const Bets: React.FC<Props> = ({setUserBets, match}) => {


    const handleAddBet = (bet: Bet) => {        
        
    const currentBets = getBetsFromLocalStorage();
    const isBetAlreadyAdded = currentBets.some(existingBet => existingBet.title === bet.title);
        if (!isBetAlreadyAdded) {
            const updatedBets = [...currentBets, bet];
            setUserBets(updatedBets);
            window.alert("Bet added to basket")
            window.location.reload();
        } 

    };



    return (
        <Container >
            {Object.values(betFaktors).map((bet, index) => (
                <BetCard
                    key={index}
                    title={bet.title}
                    details={bet.details}
                    factor={bet.factor}
                    onClick={() => handleAddBet({...bet, match})}
                />
            ))}
        </Container>)
}