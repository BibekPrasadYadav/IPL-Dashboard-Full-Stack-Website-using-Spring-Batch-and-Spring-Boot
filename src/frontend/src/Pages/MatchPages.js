import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { useParams } from 'react-router-dom';
import './MatchPages.scss';
import { YearSelector } from '../Components/YearSelector';

export const MatchPages=() => {
    const [matches,setMatches]=useState([]);
    const {teamName,year}=useParams();
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/match?year=${year}`);
                const data=await response.json();
               setMatches(data);
                console.log(data);
            };
            fetchMatches();
        },[teamName,year]
    );
    
  return (
   
    <div className='matchPages'>
        <div className='yearSelector'>
            
            <YearSelector teamName={teamName}/>
        </div>
        <div>
        <h1 className='pageHeading'>{teamName} matches in {year}</h1>
        {matches?.map(match=><MatchDetailCard key={match.matchId} teamName={teamName} match={match}/>)}
        </div>
    </div>
  )
}
