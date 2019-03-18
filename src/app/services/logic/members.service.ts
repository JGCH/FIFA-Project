/* This is a service for control Members */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModel } from '../../shared/models/member.model';

@Injectable()

export class MembersService {

  /* Control the Id of the Members */
  memberId: number = 13;

  /* Simulation data */
  members: MemberModel[] = [
    {
      memberId: 1,
      name: 'Carlos',
      lastName: 'Ocoro',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 1,
      headline: true,
      shirtNumber: 0,
      rol: null,
      teamId: 1
    },
    {
      memberId: 2,
      name: 'Maicol',
      lastName: 'Popo',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 5,
      headline: false,
      shirtNumber: 1,
      rol: null,
      teamId: 1
    },
    {
      memberId: 3,
      name: 'Roberto',
      lastName: 'Lucumi',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 5,
      headline: true,
      shirtNumber: 2,
      rol: null,
      teamId: 1
    },
    {
      memberId: 4,
      name: 'William',
      lastName: 'latam',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 6,
      headline: true,
      shirtNumber: 29,
      rol: null,
      teamId: 1
    },
    {
      memberId: 5,
      name: 'Alberto',
      lastName: 'giraldo',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 7,
      headline: true,
      shirtNumber: 28,
      rol: null,
      teamId: 1
    },
    {
      memberId: 6,
      name: 'Felipe',
      lastName: 'mendoza',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 8,
      headline: true,
      shirtNumber: 17,
      rol: null,
      teamId: 1
    },
    {
      memberId: 7,
      name: 'Andres',
      lastName: 'carabali',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 1,
      headline: true,
      shirtNumber: 0,
      rol: null,
      teamId: 2
    },
    {
      memberId: 8,
      name: 'Jhonathan',
      lastName: 'cobo',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 5,
      headline: true,
      shirtNumber: 1,
      rol: null,
      teamId: 2
    },
    {
      memberId: 9,
      name: 'Johan',
      lastName: 'vasques',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 5,
      headline: false,
      shirtNumber: 2,
      rol: null,
      teamId: 2
    },
    {
      memberId: 10,
      name: 'Arlexis',
      lastName: 'chaura',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 6,
      headline: true,
      shirtNumber: 3,
      rol: null,
      teamId: 2
    },
    {
      memberId: 11,
      name: 'Oscar',
      lastName: 'melo',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 7,
      headline: true,
      shirtNumber: 8,
      rol: null,
      teamId: 2
    },
    {
      memberId: 12,
      name: 'Brayan',
      lastName: 'penagos',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 8,
      headline: false,
      shirtNumber: 10,
      rol: null,
      teamId: 2
    },
    {
      memberId: 13,
      name: 'Miguel',
      lastName: 'Arenas',
      nacionality: 'Brasil',
      birthdate: new Date(),
      photoImg: '',
      rolId: 6,
      headline: false,
      shirtNumber: 0,
      rol: null,
      teamId: 2
    },
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
  getTotalAverage(): Observable<number> {
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
          members.push(i);
        }
      });
      observer.next(members);
      observer.complete();
    });
  }

  /* Allow Get Member of a Soccer team*/
  /* Params: teamId: number => Id of Team */
  /* Return: Observable: TeamModel => Object Member */
  getMemberById(memberId, teamId): Observable<MemberModel> {
    return new Observable( observer => {
      this.members.forEach( i => {
        if (i.teamId === teamId && i.memberId === memberId) {
          observer.next(i);
          observer.complete();
        }
      });
    });
  }

  /* Allow Save a Member */
  /* Params: member: MemberModel => Member to Save*/
  /* Return: Observable: Number => Id of Member*/
  postMember(member: MemberModel): Observable<number> {
    return new Observable( observer => {
      this.memberId = this.memberId + 1;
      member.memberId = this.memberId
      this.members.push(member);
      console.log(this.members);
      observer.next(member.memberId);
    });
  }
}
