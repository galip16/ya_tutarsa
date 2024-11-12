import React from 'react'
import { betFaktors } from './betFaktors'
import { Card, Container, Description, Factor, Title } from './styled';

interface BetFactor {
    factor: number;
    title: string;
    description: string;
}


const BetCard: React.FC<BetFactor> = ({ title, description, factor }) => (
    <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Factor><strong>Bet Factor:</strong> {factor}</Factor>
  </Card>
);


export const Bets: React.FC = () => {
    return (
        <Container >
            {Object.values(betFaktors).map((bet, index) => (
                <BetCard
                    key={index}
                    title={bet.title}
                    description={bet.description}
                    factor={bet.factor}
                />
            ))}
        </Container>)
}