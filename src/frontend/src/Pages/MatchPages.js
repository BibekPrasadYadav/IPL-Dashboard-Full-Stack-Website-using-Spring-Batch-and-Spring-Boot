import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router-dom';

export const MatchPages=() => {
    const [matches,setMatches]=useState([]);
    const {teamName,year}=useParams();
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`http://localhost:8080/team/${teamName}/match?year=${year}`);
                const data=await response.json();
               setMatches(data);
                console.log(data);
            };
            fetchMatches();
        },[]
    );
    
  return (
   
    <div className='matchPages'>
        <h1>Match Pages</h1>
        {matches?.map(match=><MatchDetailCard teamName={teamName} match={match}/>)}
        
    </div>
  )
}
