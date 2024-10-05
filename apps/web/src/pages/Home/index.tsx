import React from 'react'
import { MatchCard } from '../../components/MatchCard.tsx'
import { Wrapper } from './styled.ts'

interface Props {

};

const Home: React.FC<Props> = ({ }) => {

    const data = [
        { date: new Date(2024, 11, 4), team1: 'Galatasaray', team2: 'Fenerbahce' },
        { date: new Date(2024, 11, 5), team1: 'Besiktas', team2: 'Trabzonspor' },
        { date: new Date(2024, 11, 6), team1: 'Real Madrid', team2: 'Barcelona' },
        { date: new Date(2024, 11, 7), team1: 'Liverpool', team2: 'Manchester United' },
        { date: new Date(2024, 11, 8), team1: 'Chelsea', team2: 'Arsenal' },
        { date: new Date(2024, 11, 9), team1: 'Bayern Munich', team2: 'Borussia Dortmund' },
        { date: new Date(2024, 11, 10), team1: 'Paris Saint-Germain', team2: 'Olympique Lyon' },
        { date: new Date(2024, 11, 11), team1: 'Juventus', team2: 'AC Milan' },
        { date: new Date(2024, 11, 12), team1: 'Inter Milan', team2: 'Napoli' },
        { date: new Date(2024, 11, 13), team1: 'Atletico Madrid', team2: 'Sevilla' },
    ]

    return (
        <Wrapper>
            {data.map((match, index) => (
                <MatchCard key={index} date={match.date} team1={match.team1} team2={match.team2} />
            ))}
            <p>Vercel Preview Test</p>
        </Wrapper>
    )
}

export default Home