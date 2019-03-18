/* This is a service for control Teams os Soccer */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../shared/models/team.model';

@Injectable()

export class TeamsService {

  /* Control the Id of the Teams */
  teamId = 2;

  /* Simulation data */
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

  /* Allow Get total Teams in the system*/
  /* Return: Observable: number => Number Total of Teams */
  getTotalTeams(): Observable<number> {
    return new Observable( observer => {
      observer.next(this.teams.length);
    });
  }

  /* Allow Get all Teams */
  /* Return: Observable: TeamModel[] => List Object Team*/
  getAllTeams(): Observable<TeamModel[]> {
    return new Observable( observer => {
      let teams = Object.assign([], this.teams);
      observer.next(teams);
    });
  }

  /* Allow Get a Team */
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => Team Object*/
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

  /* Allow Save a Team */
  /* Params: team: TeamModel => Team to Save*/
  /* Return: Observable: Number => Id of Team*/
  postTeam(team: TeamModel): Observable<number> {
    return new Observable( observer => {
      this.teamId = this.teamId + 1;
      team.teamId = this.teamId
      this.teams.push(team);
      console.log(this.teams);
      observer.next(team.teamId);
    });
  }
}
