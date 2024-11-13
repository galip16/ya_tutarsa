import React from 'react';
import { Card, Description, Factor, Title } from './styled';
import { getBetsFromLocalStorage } from '../../utils/storage';

interface BetFactor {
    factor: number;
    title: string;
    details: string;
    onClick: () => void; 
}

const BetCard: React.FC<BetFactor> = ({ title, details, factor, onClick }) => {


    const currentBets = getBetsFromLocalStorage();

    const isAlreadyInBasket = currentBets.some(existingBet => existingBet.title === title);
    console.log(isAlreadyInBasket, title);
    

    return  (
        <Card onClick={onClick} $isAlreadyInBasket={isAlreadyInBasket} >
            <Title>{title}</Title>
            <Description>{details}</Description>
            <Factor><strong>Bet Factor:</strong> {factor}</Factor>
        </Card>
    );
}

export default BetCard;
