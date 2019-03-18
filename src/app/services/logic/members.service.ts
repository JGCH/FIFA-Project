import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModel } from '../../shared/models/member.model';
import {TeamModel} from '../../shared/models/team.model';

@Injectable()

export class MembersService {

  memberId: number;

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
    },
    {
      memberId: 12,
      name: 'Brayan',
      lastName: 'penagos',
      nacionality: 'Colombia',
      birthdate: new Date(),
      photoImg: '',
      rolId: 8,
      headline: true,
      shirtNumber: 10,
    },
  ]

  constructor() {
  }

  getAllMembers(): Observable<MemberModel[]> {
    return new Observable( observer => {
      let members = Object.assign([], this.members);
      observer.next(members);
    });
  }

  getMemberById(teamId): Observable<MemberModel> {
    return new Observable<MemberModel>( observer => {
      this.members.forEach( i => {
        if (i.memberId === teamId) {
          observer.next(i);
          observer.complete();
        }
      });
      observer.error('Miembro no Existe');
    });
  }

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
