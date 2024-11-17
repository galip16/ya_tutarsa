import { useQuery } from '@apollo/client';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { GET_MATCH } from '../../graphql/query';
import { GetMatchData } from '../../graphql/types';
import { Details } from './styled';
import { Bets } from '../../components/Bets';
import { Bet } from '../../components/Basket';

interface Props {
  setUserBets:React.Dispatch<React.SetStateAction<Bet[]>>
}

const MatchDetails:React.FC<Props> = ({setUserBets}) => {
  const { id } = useParams<{ id: string }>();

  const matchId = Number(id);

  const { data, loading, error } = useQuery<GetMatchData>(GET_MATCH, { variables: { id:matchId } });

  if (loading) {
    return (
      <p>Waiting for the match</p>
    )
  };

  if (error || !data) {
    console.log(error);

    return (
      <p>Error</p>
    )
  };


  return (
   <>
    <Details>
      <div>MatchDetails</div>
      <p>{data.match.date}</p>
      <p> {data.match.homeTeam}-{data.match.awayTeam} </p>
    </Details>
    <Bets setUserBets={setUserBets} match={data.match} />
    <Link to='/' >Home</Link>
   </>
  )
}

export default MatchDetails