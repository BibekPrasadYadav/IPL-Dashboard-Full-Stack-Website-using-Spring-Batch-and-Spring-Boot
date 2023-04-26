import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'
import { useParams } from 'react-router-dom';
import './MatchPages.scss';
import { YearSelector } from '../Components/YearSelector';

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
        },[teamName,year]
    );
    
  return (
   
    <div className='matchPages'>
        <div className='yearSelector'>
            <h3>Select Year</h3>
            <YearSelector teamName={teamName}/>
        </div>
        <div>
        <h1 className='pageHeading'>{teamName} matches in {year}</h1>
        {matches?.map(match=><MatchDetailCard teamName={teamName} match={match}/>)}
        </div>
    </div>
  )
}
