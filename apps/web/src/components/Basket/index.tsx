import React from 'react';
import { BasketContainer, BetItem } from './styled';
import { saveBetsToLocalStorage } from '../../utils/storage';
import { Match } from '../../graphql/types';

export interface Bet {
    match: Match;
    title: string;
    factor: number;
    details: string;
    totalGoalEstimate?:number;
}

interface BasketProps {
    basket: Bet[];
    setUserBets: React.Dispatch<React.SetStateAction<Bet[]>>
    onConfirm: () => void;
}



const Basket: React.FC<BasketProps> = ({ basket, setUserBets, onConfirm }) => {

    const clearBasket = () => {
        setUserBets([]);
        saveBetsToLocalStorage([]);
        console.log("Basket has been cleared.");
    };


    return (
        <BasketContainer>
            <h3>Basket</h3>
            {basket.length === 0 ? (
                <p>No bets in the basket</p>
            ) : (
                basket.map((bet, index) => (
                    <BetItem key={index}>
                        <p> {bet.match.homeTeam} - {bet.match.awayTeam} </p>
                        <p> {bet.match.date} </p>
                        <p>{bet.title} - Factor: {bet.factor}</p>
                        {bet.totalGoalEstimate && <p> Total Goal Estimation: {bet.totalGoalEstimate} </p> }
                        {bet.details && <p>Details: {bet.details}</p>}
                    </BetItem>
                ))
            )}
            <button disabled={!basket.length} onClick={onConfirm}>Confirm Basket</button>
            <button onClick={clearBasket}>Clear Basket</button>

        </BasketContainer>
    );


}

export default Basket;
