package com.example.ipl_dash.ipl_dashboard.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.ipl_dash.ipl_dashboard.Repository.MatchRepository;
import com.example.ipl_dash.ipl_dashboard.Repository.TeamRepository;
import com.example.ipl_dash.ipl_dashboard.model.Team;



@RestController
@CrossOrigin
public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team=teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team; 
    }
}

