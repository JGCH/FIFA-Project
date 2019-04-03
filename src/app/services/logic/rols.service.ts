/* This is a service for control Professions */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolsModel } from '../../shared/models/rols.model';
import {RolTypeModel} from '../../shared/models/rol-type.model';
import {MemberModel} from '../../shared/models/member.model';

@Injectable()

export class RolsService {

  /* Simulation data */
  rols: RolsModel[] = [
    new RolsModel(
      1,
      'Técnico',
      1
    ),
    new RolsModel(
      2,
      'Asistente',
      1
    ),
    new RolsModel(
      3,
      'Médico',
      1
    ),
    new RolsModel(
      4,
      'Preparador',
      1
    ),
    new RolsModel(
      5,
      'Portero',
      2
    ),
    new RolsModel(
      6,
      'Defensa',
      2
    ),
    new RolsModel(
      7,
      'Medio Campista',
      2
    ),
    new RolsModel(
      8,
      'Delantero',
      2
    )
  ];

  constructor() {
  }

  /* Allow Get all Rols */
  /* Return: Observable: RolsModel[] */
  getAllRols(): Observable<RolsModel[]> {
    return new Observable( observer => {
      let rols = Object.assign([], this.rols);
      observer.next(rols);
    });
  }

  /* Allow Get all Rols of a Soccer team*/
  /* Params: rolTypeId: number => Id of rolType */
  /* Return: Observable: Rols => List Object Rols */
  getRolsById(rolTypeId): Observable<RolsModel[]> {
    let rols: RolsModel[] = [];
    return new Observable( observer => {
      this.rols.forEach( i => {
        if (i.rolTypeId === rolTypeId) {
          rols.push(i);
        }
      });
      observer.next(rols);
      observer.complete();
    });
  }
}
