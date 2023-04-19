package com.example.ipl_dash.ipl_dashboard.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.ipl_dash.ipl_dashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team,Long> {
    Team findByTeamName(String teamName);
}
