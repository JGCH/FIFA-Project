import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../../services/logic/teams.service';
import { MembersService } from '../../services/logic/members.service';
import { TeamModel } from '../../shared/models/team.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {

  // totalTeams: number;
  totalTeams: Observable<number>;
  // totalPlayers: number;
  totalPlayers: Observable<number>;
  // totalTechnitians: number;
  totalTechnitians: Observable<number>;
  // totalAlternates: number;
  totalAlternates: Observable<number>;
  // teams: TeamModel[];
  teams: Observable<TeamModel[]>;

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
    /*this.teamsService.getAllTeams()
      .subscribe( response => {
        this.teams = response;
      });*/
    this.teams = this.teamsService.getAllTeams();
  }

  getTotalTeams() {
    /*this.teamsService.getTotalTeams()
      .subscribe( response => {
        this.totalTeams = response;
      });*/
    this.totalTeams = this.teamsService.getTotalTeams();
  }

  getTotalPlayers() {
    /*this.membersService.getTotalPlayers()
      .subscribe( response => {
        this.totalPlayers = response;
      });*/
    this.totalPlayers = this.membersService.getTotalPlayers();
  }

  getTotalTechnitial() {
    /*this.membersService.getTotalTechnitial()
      .subscribe( response => {
        this.totalTechnitians = response;
      });*/
    this.totalTechnitians = this.membersService.getTotalTechnitial();
  }

  getTotalAlternate() {
    /*this.membersService.getTotalAlternate()
      .subscribe( response => {
        this.totalAlternates = response;
      });*/
    this.totalAlternates = this.membersService.getTotalAlternate();
  }

  /* Allow go to team detail */
  goTeam(teamId) {
    this.router.navigate([`teams/details/${teamId}`]);
  }
}
