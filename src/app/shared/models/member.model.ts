import {RolsModel} from './rols.model';

/* Model Object for maping Members of Team of Soccer*/
export class MemberModel {
  memberId: number;
  name: string;
  lastName: string;
  nacionality: string;
  birthdate: Date;
  photoImg: any;
  rolId: number;
  headline: boolean;
  shirtNumber: number;
  rol: RolsModel;
  teamId: number;
}
