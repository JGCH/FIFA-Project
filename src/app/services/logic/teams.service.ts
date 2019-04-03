/* This is a service for control Teams os Soccer */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TeamModel } from '../../shared/models/team.model';

@Injectable()

export class TeamsService {

  /* Control the Id of the Teams */
  teamId = 2;

  /* Simulation data */
  teams: TeamModel[] = [
    new TeamModel(
      1,
      'Real Madrid',
      'assets/images/team_shields/real_madrid_shield.png',
      'assets/images/team_flags/real_madrid_flag.jpg'
    ),
    new TeamModel(
      2,
      'Barcelona',
      'assets/images/team_shields/barcelona_shield.png',
      'assets/images/team_flags/barcelona_flag.jpg'
    )
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

  /* Allow Get all Teams */
  /* Return: Observable: TeamModel[] => List Object Team*/
  /*getAllTeamsPipe(): Observable<TeamModel[]> {
    return new Observable( observer => {
      observer.next(this.teams);
    }).pipe(
      map( data => {
        return data.slice();
      })
    );
  }*/

  /* Allow Get a Team */
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => Team Object*/
  getTeamById(teamId): Observable<TeamModel> {
    return new Observable<TeamModel>( observer => {
      this.teams.forEach( i => {
        if (i.teamId === teamId) {
          observer.next(
            new TeamModel(
              i.teamId,
              i.name,
              i.shieldImg,
              i.flagImg
            )
          );
          observer.complete();
        }
      });
      observer.error('Equipo no Existe');
    });
  }

  /* Allow Get a Team */
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => Team Object*/
  getTeamByIdPipe(teamId): Observable<TeamModel> {
    return new Observable<TeamModel>( observer => {
      this.teams.forEach( team => {
        observer.next(team);
      });
      observer.complete();
      observer.error('Equipo no Existe');
    }).pipe(
      filter((team) => {
        return (team.teamId === teamId);
      }),
      map( data => {
        return new TeamModel(
          data.teamId,
          data.name,
          data.shieldImg,
          data.flagImg
        );
      })
    );
  }

  /* Allow Save a Team */
  /* Params: team: TeamModel => Team to Save*/
  /* Return: Observable: Number => Id of Team*/
  postTeam(team: TeamModel): Observable<number> {
    return new Observable( observer => {
      this.teamId = this.teamId + 1;
      team.teamId = this.teamId;
      this.teams.push(team);
      observer.next(team.teamId);
    });
  }

  deleteTeam(team: TeamModel): Observable<string> {
    return new Observable( observer => {
      let pos = -1;
      this.teams.forEach( (i, p) => {
        if (i.teamId === team.teamId) {
          pos = p;
        }
      });
      this.teams.splice(pos, 1);
      observer.next('Ok 200');
      observer.complete();
    });
  }

  updateTeam(team: TeamModel): Observable<string> {
    return new Observable( observer => {
      this.teams.forEach( i => {
        if (i.teamId === team.teamId) {
          i.teamId = team.teamId;
          i.name = team.name;
          i.shieldImg = team.shieldImg;
          i.flagImg = team.flagImg;
        }
      });
      observer.next('Ok 200');
      observer.complete();
    });
  }
}
