import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router-dom';
import './TeamPages.scss';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

export const TeamPages=() => {
    const [team,setTeam]=useState({matches:[]});
    const {teamName,year}=useParams();
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`http://localhost:8080/team/${teamName}`);
                const data=await response.json();
               setTeam(data);
                console.log(data);
            };
            fetchMatches();
        },[teamName,year]
    );
    if(!team || !team.teamName){
        return <h1>Team Not Found</h1>;
    }
  return (
   
    <div className='teamPages'>
    <div className='teamName'>
    <h1 className='teamNameSection'>{team.teamName}</h1>
    </div>
    <div className='winLoss'>
        Wins/Losses
        <PieChart
data={[
{ title: 'Wins', value: team.totalWins, color: '#4da375' },
{ title: 'Losses', value:team.totalMatches-team.totalWins, color: '#a34d5d' },
]}
/>
        </div>
    
    <div className='matchDetailCard'>
    <h3>Latest Matches</h3>
    <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
    </div>
    {team.matches?.slice(1).map(match=><MatchSmallCard team={team.teamName} match={match}/>)}
    <div className='more'>
    <Link to={`/teams/${teamName}/match/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
    </div>
</div>
  )
}
