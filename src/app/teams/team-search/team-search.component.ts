import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../../services/logic/teams.service';
import { MembersService } from '../../services/logic/members.service';
import { TeamModel } from '../../shared/models/team.model';


@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {

  teams: TeamModel[];
  totalTeams: number;
  totalPlayers: number;
  totalTechnitians: number;
  totalAlternates: number;

  constructor( private router: Router,
               private teamsService: TeamsService,
               private membersService: MembersService) { }

  ngOnInit() {
    this.getTeams();
    this.getTotalTeams();
    this.getTotalPlayers();
    this.getTotalTechnitial();
    this.getTotalAlternate();
  }

  getTeams() {
    this.teamsService.getAllTeams()
      .subscribe( response => {
        this.teams = response;
        console.log(response);
      });
  }

  getTotalTeams() {
    this.teamsService.getTotalTeams()
      .subscribe( response => {
        this.totalTeams = response;
      });
  }

  getTotalPlayers() {
    this.membersService.getTotalPlayers()
      .subscribe( response => {
        this.totalPlayers = response;
      });
  }

  getTotalTechnitial() {
    this.membersService.getTotalTechnitial()
      .subscribe( response => {
        this.totalTechnitians = response;
      });
  }

  getTotalAlternate() {
    this.membersService.getTotalAlternate()
      .subscribe( response => {
        this.totalAlternates = response;
      });
  }

  selectTeam(teamId) {
    this.router.navigate([`teams/details/${teamId}`]);
  }
}
