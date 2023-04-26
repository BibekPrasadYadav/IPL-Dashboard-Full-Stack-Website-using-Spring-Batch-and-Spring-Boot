package com.example.ipl_dash.ipl_dashboard.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Match {

@Id
private long matchId;
private LocalDate date;
private String city;
private String venue;
private String team1;
private String team2;
private String tossWinner;
private String tossDecision;
private String playerOfMatch;
private String winningTeam;
private String margin;
private String umpire1;
private String umpire2;
private String wonBy;


public long getMatchId() {
    return matchId;
}
public void setMatchId(long matchId) {
    this.matchId = matchId;
}
public LocalDate getDate() {
    return date;
}
public void setDate(LocalDate date) {
    this.date = date;
}
public String getCity() {
    return city;
}
public void setCity(String city) {
    this.city = city;
}
public String getVenue() {
    return venue;
}
public void setVenue(String venue) {
    this.venue = venue;
}
public String getWinningTeam() {
    return winningTeam;
}
public void setWinningTeam(String winningTeam) {
    this.winningTeam = winningTeam;
}
public String getMargin() {
    return margin;
}
public void setMargin(String margin) {
    this.margin = margin;
}
public String getWonBy() {
    return wonBy;
}
public void setWonBy(String wonBy) {
    this.wonBy = wonBy;
}
public String getTeam1() {
    return team1;
}
public void setTeam1(String team1) {
    this.team1 = team1;
}
public String getTeam2() {
    return team2;
}
public void setTeam2(String team2) {
    this.team2 = team2;
}
public String getTossWinner() {
    return tossWinner;
}
public void setTossWinner(String tossWinner) {
    this.tossWinner = tossWinner;
}
public String getTossDecision() {
    return tossDecision;
}
public void setTossDecision(String tossDecision) {
    this.tossDecision = tossDecision;
}
public String getPlayerOfMatch() {
    return playerOfMatch;
}
public void setPlayerOfMatch(String playerOfMatch) {
    this.playerOfMatch = playerOfMatch;
}

public String getUmpire1() {
    return umpire1;
}
public void setUmpire1(String umpire1) {
    this.umpire1 = umpire1;
}
public String getUmpire2() {
    return umpire2;
}
public void setUmpire2(String umpire2) {
    this.umpire2 = umpire2;
}


}
