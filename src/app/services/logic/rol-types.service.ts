/* This is a service for control Rol Types */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolTypeModel } from '../../shared/models/rol-type.model';

@Injectable()

export class RolTypesService {

  /* Simulation data */
  rolTypes: RolTypeModel[] = [
    {
      rolTypeId: 1,
      name: 'Cuerpo Tecnico',
    },
    {
      rolTypeId: 2,
      name: 'Jugador',
    }
  ];

  constructor() {
  }

  /* Allow Get all TypeRols */
  /* Return: Observable: RolTypeModel[] */
  getAllROleTypes(): Observable<RolTypeModel[]> {
    return new Observable( observer => {
      let rolTypes = Object.assign([], this.rolTypes);
      observer.next(rolTypes);
    });
  }
}
