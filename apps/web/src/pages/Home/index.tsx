import React from 'react'
import { MatchCard } from '../../components/MatchCard.tsx'
import { Wrapper } from './styled.ts'
import { gql, useQuery } from '@apollo/client';
import { GET_MATCHES } from '../../graphql/index.ts';
import { GetMatchesData } from '../../graphql/types.ts';
import { parseMatchDate } from '../../utils/parseMatchDate.ts';

interface Props {

};

const Home: React.FC<Props> = ({ }) => {


    const { data, loading, error } = useQuery<GetMatchesData>(GET_MATCHES);

    if(loading){
       return(
        <p>loading</p>
       )
    }

    if(error || !data){
        console.log(error);
        
        return(
         <p>error</p>
        )
     }

    return (
        <Wrapper>
            {data.matches.map((match, index) => (
                <MatchCard key={index} date={parseMatchDate(match.date)} team1={match.homeTeam} team2={match.awayTeam} />
            ))}
        </Wrapper>
    )
}

export default Home