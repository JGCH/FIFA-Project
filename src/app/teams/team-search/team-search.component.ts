import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../../services/logic/teams.service';
import { TeamModel } from '../../shared/models/team.model';


@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {

  teams: TeamModel[];

  constructor( private router: Router,
               private teamsService: TeamsService ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getAllTeams()
      .subscribe( response => {
        this.teams = response;
        console.log(response);
      });
  }

  selectTeam(teamId) {
    this.router.navigate([`teams/details/${teamId}`]);
  }
}
