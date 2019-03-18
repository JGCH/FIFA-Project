import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../shared/models/team.model';

@Injectable()

export class TeamsService {

  teamId = 2;
  pathShield = 'assets/images/team_shields/';
  pathFlag = 'assets/images/team_flags/';

  teams: TeamModel[] = [
    {
      teamId: 1,
      name: 'Real Madrid',
      shieldImg: 'assets/images/team_shields/real_madrid_shield.png',
      flagImg: 'assets/images/team_flags/real_madrid_flag.jpg'
    },
    {
      teamId: 2,
      name: 'Barcelona',
      shieldImg: 'assets/images/team_shields/barcelona_shield.png',
      flagImg: 'assets/images/team_flags/barcelona_flag.jpg'
    }
  ];

  constructor() {
  }

  getTotalTeams(): Observable<number> {
    return new Observable( observer => {
      observer.next(this.teams.length);
    });
  }

  getAllTeams(): Observable<TeamModel[]> {
    return new Observable( observer => {
      let teams = Object.assign([], this.teams);
      observer.next(teams);
    });
  }

  getTeamById(teamId): Observable<TeamModel> {
    return new Observable<TeamModel>( observer => {
      this.teams.forEach( i => {
        if (i.teamId === teamId) {
          observer.next(i);
          observer.complete();
        }
      });
      observer.error('Equipo no Existe');
    });
  }

  postTeam(team: TeamModel): Observable<number> {
    return new Observable( observer => {
      this.teamId = this.teamId + 1;
      team.teamId = this.teamId
      if (team.shieldImg != null) {
        team.shieldImg = this.pathShield + team.shieldImg;
      }
      if (team.flagImg != null) {
        team.flagImg = this.pathFlag + team.flagImg;
      }
      this.teams.push(team);
      console.log(this.teams);
      observer.next(team.teamId);
    });
  }
}
