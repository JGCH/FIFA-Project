/* This is a service for control Professions */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolsModel } from '../../shared/models/rols.model';

@Injectable()

export class RolsService {

  /* Simulation data */
  rols: RolsModel[] = [
    {
      rolId: 1,
      rolTypeId: 1,
      name: 'Técnico',
      rolTypeName: '',
    },
    {
      rolId: 2,
      rolTypeId: 1,
      name: 'Asistente',
      rolTypeName: '',
    },
    {
      rolId: 3,
      rolTypeId: 1,
      name: 'Médico',
      rolTypeName: '',
    },
    {
      rolId: 4,
      rolTypeId: 1,
      name: 'Preparador',
      rolTypeName: '',
    },
    {
      rolId: 5,
      rolTypeId: 2,
      name: 'Portero',
      rolTypeName: '',
    },
    {
      rolId: 6,
      rolTypeId: 2,
      name: 'Defensa',
      rolTypeName: '',
    },
    {
      rolId: 7,
      rolTypeId: 2,
      name: 'Medio Campista',
      rolTypeName: '',
    },
    {
      rolId: 8,
      rolTypeId: 2,
      name: 'Delantero',
      rolTypeName: '',
    }
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
}
