import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_MATCH } from '../../graphql/query';
import { Match } from '../../graphql/types';


const MatchDetails = () => {
  const { id } = useParams<{ id: string }>();

  const matchId = Number(id);

  const { data, loading, error } = useQuery<Match>(GET_MATCH, { variables: { id:matchId } });

  if (loading) {
    return (
      <p>Waiting for the match</p>
    )
  };

  if (error) {
    console.log(error);

    return (
      <p>Error</p>
    )
  };


  return (
    <>
      <div>MatchDetails</div>
      <p>{id}</p>
    </>
  )
}

export default MatchDetails