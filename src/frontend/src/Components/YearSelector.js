import React from "react";
import './YearSelector.scss';
import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";

 export const YearSelector=({teamName})=>{

    let years=[];
    const startYear=process.env.REACT_APP_DATA_START_YEAR;
    const endYear=process.env.REACT_APP_DATA_END_YEAR;

    for(let i=startYear;i<=endYear;i++){
        years.push(i);
    }

    return (
        <div className="dropDown">
        <Dropdown title={<div className="selectYear"><h1 >Select Year</h1></div>}>
        <ol className="YearSelector">
            
                {
                    years.map(year=>(
                        <li key={year}>
                            <Link  to={`/teams/${teamName}/match/${year}`}>{year}</Link>
                        </li>
                    ))
                }
          
        </ol>
        </Dropdown>
        </div>
    )



 }