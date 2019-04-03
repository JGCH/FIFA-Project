/* Model Object for maping Profesions inside of Team Soccer*/
import {RolTypeModel} from './rol-type.model';

export class RolsModel {
  rolId: number;
  name: string;
  rolTypeId: number;

  constructor(rolId: number = 0,
              name: string = '',
              rolType: number = 0) {
    this.rolId = rolId;
    this.name = name;
    this.rolTypeId = rolType;
  }
}
