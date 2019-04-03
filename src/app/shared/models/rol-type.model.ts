
/* Model Object for maping Types of Roles inside Team Soccer*/
export class RolTypeModel {
  rolTypeId: number;
  name: string;

  constructor(rolTypeId: number = 0,
              name: string = '') {
    this.rolTypeId = rolTypeId;
    this.name = name;
  }
}
