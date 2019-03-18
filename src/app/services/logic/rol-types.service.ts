import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolTypeModel } from '../../shared/models/rol-type.model';

@Injectable()

export class RolTypesService {

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

  getAllROleTypes(): Observable<RolTypeModel[]> {
    return new Observable( observer => {
      let rolTypes = Object.assign([], this.rolTypes);
      observer.next(rolTypes);
    });
  }
}
