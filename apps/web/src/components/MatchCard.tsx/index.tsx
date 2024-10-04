import React from 'react'
import { CardWrapper } from './styled';

interface Props {
    team1: string;
    team2: string;
    date: Date;
}

export const MatchCard: React.FC<Props> = ({ team1, team2, date }) => {

    const formattedDate = date.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    return (
        <CardWrapper>
            <p>{formattedDate}</p>
            <p>{team1}</p>
            <p>{team2}</p>
        </CardWrapper>
    )
}