import React from 'react'
import { CardWrapper } from './styled';
import { useNavigate } from 'react-router-dom';

interface Props {
    matchId:string;
    team1: string;
    team2: string;
    date: Date;
}

export const MatchCard: React.FC<Props> = ({ team1, team2, date, matchId }) => {

    const navigate = useNavigate();

    const formattedDate = date.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      const handleCardClick = ()=> {
          navigate(`/match/${matchId}`, {state: {team1, team2, date}  });
      }


    return (
        <CardWrapper onClick={handleCardClick} >
            <p>{formattedDate}</p>
            <p>{team1}</p>
            <p>{team2}</p>
        </CardWrapper>
    )
}