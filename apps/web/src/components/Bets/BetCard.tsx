import React from 'react';
import { Card, Description, Factor, Title } from './styled';
import { getBetsFromLocalStorage } from '../../utils/storage';

interface BetFactor {
    matchId:string;
    factor: number;
    title: string;
    details: string;
    onClick: () => void; 
}

const BetCard: React.FC<BetFactor> = ({matchId, title, details, factor, onClick }) => {


    const currentBets = getBetsFromLocalStorage();

    const isAlreadyInBasket = currentBets.some(existingBet =>(existingBet.match.id === matchId)&& (existingBet.title === title));
    

    return  (
        <Card onClick={onClick} $isAlreadyInBasket={isAlreadyInBasket} >
            <Title>{title}</Title>
            <Description>{details}</Description>
            <Factor><strong>Bet Factor:</strong> {factor}</Factor>
        </Card>
    );
}

export default BetCard;
