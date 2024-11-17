import React from 'react'
import { MatchCard } from '../../components/MatchCard.tsx'
import { Wrapper } from './styled.ts'
import {  useMutation, useQuery } from '@apollo/client';
import { GET_MATCHES } from '../../graphql/query.ts';
import { GetMatchesData, SaveMatchesMutationData } from '../../graphql/types.ts';
import { parseMatchDate } from '../../utils/parseMatchDate.ts';
import { SAVE_MATCHES } from '../../graphql/mutation.ts';

const Home: React.FC = () => {

    const { data, loading, error } = useQuery<GetMatchesData>(GET_MATCHES);
    const [saveMatches, { loading: mutationLoading, error: mutationError }] = useMutation<SaveMatchesMutationData>(SAVE_MATCHES);

    if (loading || mutationLoading) {
        return (
            <p>loading</p>
        )
    }

    if (error || !data || mutationError) {
        console.log(error);

        return (
            <p>error</p>
        )
    }


    const getNewMatches = async () => {
        try {
            const success = await saveMatches();
            if(success.data?.saveMatches){
                console.log("yeni maclar eklendi ve sayfa yenilendi");
                
                window.location.reload()
            }
            else {
                console.log("yeni maclar alinamadi");
                
            }
        } catch (err) {
            console.log(err);

        }
    }


    const isAnyMatchStarted = data.matches.some((match) => {
        const matchDate = parseMatchDate(match.date);
        return new Date() > matchDate;
    });

    return (
        <>
            <Wrapper>
                {data.matches.map((match, index) => (
                    <MatchCard key={index} date={parseMatchDate(match.date)} team1={match.homeTeam} team2={match.awayTeam} matchId={match.id} />
                ))}
            </Wrapper>

            {isAnyMatchStarted && (
                <div style={{ margin: '10rem', backgroundColor: '#ffcc00', padding: '10px' }}>
                    <p>Maclardan en az birisi zaten basladi. Yeni maclari almak icin su butona basiniz.</p>
                    <button onClick={getNewMatches}>Maclari Yenile</button>
                </div>
            )}
        </>
    )
}

export default Home