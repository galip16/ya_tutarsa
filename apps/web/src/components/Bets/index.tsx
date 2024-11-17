import React from 'react'
import { betFaktors } from './betFaktors'
import { Container } from './styled';
import { Bet } from '../Basket';
import BetCard from './BetCard';
import { getBetsFromLocalStorage } from '../../utils/storage';
import { Match } from '../../graphql/types';




interface Props {
    match: Match;
    setUserBets: React.Dispatch<React.SetStateAction<Bet[]>>
}

export const Bets: React.FC<Props> = ({ setUserBets, match }) => {


    const handleAddBet = (bet: Bet) => {

        let userSelectedBet: Bet = bet;

        if (bet.factor === 3) {// it is total goal factor

            const answer = window.prompt("What's your goal estimation?");

            if (!!answer) {
                if (!isNaN(+answer)) {

                    userSelectedBet = { ...bet, totalGoalEstimate: +answer }


                } else {
                    window.alert('Please try again and enter a number');
                    return
                }


            }else {
                return
            }

        } 



        const currentBets = getBetsFromLocalStorage();
        const isBetAlreadyAdded = currentBets.some(existingBet => (existingBet.match.id === match.id) && (existingBet.title === userSelectedBet.title));
        if (isBetAlreadyAdded) {
            window.alert('The bet is already selected');
            return
        }
        const updatedBets = [...currentBets, userSelectedBet];
        setUserBets(updatedBets);
        window.alert("Bet added to basket")
        window.location.reload();
    };



    return (
        <Container >
            {Object.values(betFaktors).map((bet, index) => (
                <BetCard
                    key={index}
                    matchId={match.id}
                    title={bet.title}
                    details={bet.details}
                    factor={bet.factor}
                    onClick={() => handleAddBet({ ...bet, match })}
                />
            ))}
        </Container>)
}