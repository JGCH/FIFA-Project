import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolsModel } from '../../shared/models/rols.model';

@Injectable()

export class RolsService {
  rols: RolsModel[] = [
    {
      rolId: 1,
      rolTypeId: 1,
      name: 'Técnico',
    },
    {
      rolId: 2,
      rolTypeId: 1,
      name: 'Asistente',
    },
    {
      rolId: 3,
      rolTypeId: 1,
      name: 'Médico',
    },
    {
      rolId: 4,
      rolTypeId: 1,
      name: 'Preparador',
    },
    {
      rolId: 5,
      rolTypeId: 2,
      name: 'Portero',
    },
    {
      rolId: 6,
      rolTypeId: 2,
      name: 'Defensa',
    },
    {
      rolId: 7,
      rolTypeId: 2,
      name: 'Medio Campista',
    },
    {
      rolId: 8,
      rolTypeId: 2,
      name: 'Delantero',
    }
  ];

  constructor() {
  }

  getAllRols(): Observable<RolsModel[]> {
    return new Observable( observer => {
      let rols = Object.assign([], this.rols);
      observer.next(rols);
    });
  }
}
