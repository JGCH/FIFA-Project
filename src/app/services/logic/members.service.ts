/* This is a service for control Members */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModel } from '../../shared/models/member.model';
import {RolTypeModel} from '../../shared/models/rol-type.model';
import {RolsModel} from '../../shared/models/rols.model';
import { map, filter } from 'rxjs/operators';
import {TeamModel} from '../../shared/models/team.model';

@Injectable()

export class MembersService {

  /* Control the Id of the Members */
  memberId: number = 14;

  /* Simulation data */
  members: MemberModel[] = [
    new MemberModel(
      1,
      'Marc-Andre',
      'ter Stegen',
      'Alemán',
      '1985-01-20',
      'assets/images/team_people/1.jpg',
      true,
      1,
      2,
      5,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      2,
      'Jokin',
      'Ezkieta',
      'Alemán',
      '1994-03-03',
      'assets/images/team_people/2.jpg',
      false,
      2,
      2,
      5,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      3,
      'Nelson',
      'Semedo',
      'Alemán',
      '1989-02-10',
      'assets/images/team_people/3.jpg',
      true,
      4,
      2,
      6,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      4,
      'Arturo',
      'Vidal',
      'España',
      '1980-05-10',
      'assets/images/team_people/4.jpg',
      true,
      15,
      2,
      7,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      5,
      'Lionel',
      'Messi',
      'Argentina',
      '1986-09-15',
      'assets/images/team_people/5.jpg',
      false,
      5,
      2,
      8,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      6,
      'Ousmane',
      'Dembélé',
      'África',
      '1997-07-02',
      'assets/images/team_people/6.jpg',
      true,
      23,
      2,
      8,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      7,
      'Anakin',
      'Skywalker',
      'Galaxia 10',
      '1997-07-02',
      'assets/images/team_people/7.png',
      true,
      23,
      1,
      1,
      2,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      8,
      'Keylor',
      'Navas',
      'Perú',
      '1985-01-20',
      'assets/images/team_people/8.jpg',
      true,
      1,
      2,
      5,
      1,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      9,
      'Sergio',
      'Ramos',
      'Alemán',
      '1994-03-03',
      'assets/images/team_people/9.jpg',
      false,
      2,
      2,
      6,
      1,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      10,
      'Marcelo',
      'Peluca',
      'Estados Unidos',
      '1989-02-10',
      'assets/images/team_people/10.jpg',
      true,
      4,
      2,
      6,
      1,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      11,
      'Isco',
      'CISCO',
      'Inglaterra',
      '1986-09-15',
      'assets/images/team_people/11.jpg',
      true,
      25,
      2,
      7,
      1,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      12,
      'Gareth',
      'Bale',
      'Argentina',
      '1986-09-15',
      'assets/images/team_people/12.jpg',
      true,
      20,
      2,
      8,
      1,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      13,
      'Karim',
      'Benzema',
      'Estados Unidos',
      '1997-07-02',
      'assets/images/team_people/13.jpg',
      false,
      10,
      2,
      8,
      1,
      new RolsModel(),
      new RolTypeModel()
    ),
    new MemberModel(
      14,
      'Darth',
      'Vader',
      'Desconocido',
      '1000-01-01',
      'assets/images/team_people/14.jpg',
      true,
      9,
      1,
      1,
      1,
      new RolsModel(),
      new RolTypeModel()
    )
  ]

  constructor() {
  }

  /* Allow Get total Players in the system*/
  /* Return: Observable: number => Number Total of Players */
  getTotalPlayers(): Observable<number> {
    return new Observable( observer => {
      let members = [];
      this.members.forEach( i => {
        if (i.rolId >= 5) {
          members.push(i);
        }
      });
      observer.next(members.length);
    });
  }

  /* Allow Get total Technitians in the system*/
  /* Return: Observable: number => Number Total of Teachnitians */
  getTotalTechnitial(): Observable<number> {
    return new Observable( observer => {
      let members = [];
      this.members.forEach( i => {
        if (i.rolId <= 4) {
          members.push(i);
        }
      });
      observer.next(members.length);
    });
  }

  /* Allow Get total average of players for each team*/
  /* Return: Observable: number => Number Total of Teachnitians */
  getTotalPlayerAverage(teamId: number): Observable<number> {
    return new Observable( observer => {
      let total = 0;
      let average = 0;
      this.members.forEach( i => {
        if (i.rolId >= 5 && i.teamId === teamId) {
          total++;
          if (!i.headline){
            average++;
          }
        }
      });
      observer.next((average / total) * 100);
    });
  }

  /* Allow Get total Alternates in the system*/
  /* Return: Observable: number => Number Total of Alternates */
  getTotalAlternate(): Observable<number> {
    return new Observable( observer => {
      let members = [];
      this.members.forEach( i => {
        if (!i.headline && i.rolId >= 5) {
          members.push(i);
        }
      });
      observer.next(members.length);
    });
  }

  /* Allow Get all Members in the System */
  /* Return: Observable: MemberModel[] => List Object Members */
  getAllMembers(): Observable<MemberModel[]> {
    return new Observable( observer => {
      let members = Object.assign([], this.members);
      observer.next(members);
    });
  }

  /* Allow Get all Members of a Soccer team*/
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => List Object Members */
  getMembersById(teamId): Observable<MemberModel[]> {
    let members = [];
    return new Observable( observer => {
      this.members.forEach( i => {
        if (i.teamId === teamId) {
          members.push(Object.assign([], i));
        }
      });
      observer.next(members);
      observer.complete();
    });
  }

  /* Allow Get all Members of a Soccer team*/
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => List Object Members */
  getMembersByIdPipe(teamId): Observable<MemberModel> {
    return new Observable( observer => {
      this.members.forEach( member => {
        observer.next(member);
      });
      observer.complete();
    })/*.pipe(
      filter((member) => {
        return (member.teamId === teamId);
      }),
      map( data => {
        return new MemberModel(
            data.memberId,
            data.name,
            data.lastName,
            data.nacionality,
            data.birthdate,
            data.photoImg,
            data.headline,
            data.shirtNumber,
            data.rolTypeId,
            data.rolId,
            data.teamId,
            data.rol,
            data.rolType
        );
      })
    );*/
  }

  /* Allow Get Member of a Soccer team*/
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => Object Member */
  getMemberById(memberId, teamId): Observable<MemberModel> {
    return new Observable( observer => {
      this.members.forEach( i => {
        if (i.teamId === teamId && i.memberId === memberId) {
          observer.next(
            new MemberModel(
              i.memberId,
              i.name,
              i.lastName,
              i.nacionality,
              i.birthdate,
              i.photoImg,
              i.headline,
              i.shirtNumber,
              i.rolTypeId,
              i.rolId,
              i.teamId,
              i.rol,
              i.rolType
            )
          );
          observer.complete();
        }
      });
    });
  }

  /* Allow Get Member of a Soccer team*/
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => Object Member */
  getMemberByIdPipe(memberId, teamId): Observable<MemberModel> {
    return new Observable( observer => {
      this.members.forEach( member => {
        observer.next(member);
      });
      observer.complete();
      observer.error('Equipo no Existe');
    })/*.pipe(
      filter((member) => {
        return (member.teamId === teamId && member.memberId === memberId);
      }),
      map( data => {
        return new MemberModel(
            data.memberId,
            data.name,
            data.lastName,
            data.nacionality,
            data.birthdate,
            data.photoImg,
            data.headline,
            data.shirtNumber,
            data.rolTypeId,
            data.rolId,
            data.teamId,
            data.rol,
            data.rolType
        );
      })
    );*/
  }

  /* Allow Save a Member */
  /* Params: member: MemberModel => Member to Save*/
  /* Return: Observable: Number => Id of Member*/
  postMember(member: MemberModel): Observable<number> {
    return new Observable( observer => {
      this.memberId = this.memberId + 1;
      member.memberId = this.memberId
      this.members.push(member);
      observer.next(member.memberId);
      observer.complete();
    });
  }

  deleteMember(member: MemberModel): Observable<string> {
    return new Observable( observer => {
      let pos = -1;
      this.members.forEach( (i, p) => {
        if (i.memberId === member.memberId) {
          pos = p;
        }
      });
      this.members.splice(pos, 1);
      observer.next('Ok 200');
      observer.complete();
    });
  }

  updateMember(member: MemberModel): Observable<string> {
    return new Observable( observer => {
      this.members.forEach( i => {
        if (i.memberId === member.memberId) {
          i.memberId = member.memberId;
          i.name = member.name;
          i.lastName = member.lastName;
          i.nacionality = member.nacionality;
          i.birthdate = member.birthdate;
          i.photoImg = member.photoImg;
          i.headline = member.headline;
          i.shirtNumber = member.shirtNumber;
          i.rolTypeId = member.rolTypeId;
          i.rolId = member.rolId;
          i.teamId = member.teamId;
        }
      });
      observer.next('Ok 200');
      observer.complete();
    });
  }

  deleteMembers(team: TeamModel): Observable<string> {
    let pos = [];
    return new Observable( observer => {
      this.members.forEach( (i, p) => {
        if (i.teamId === team.teamId) {
          pos.push(p);
        }
      });
      pos.reverse();
      pos.forEach( i => {
        this.members.splice(i, 1);
      });
      observer.next('Ok 200');
      observer.complete();
    });
  }
}
