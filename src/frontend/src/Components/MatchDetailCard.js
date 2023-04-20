import React from 'react'

export const MatchDetailCard=({match})=> {
    if(!match) return null;
  return (
    <div className='matchDetailCard'>
        <h3>Latest Matches</h3>
        <h3>MatchDetailCard</h3>
        <h4>{match.team1} vs {match.team2}</h4>
    </div>
  )
}
