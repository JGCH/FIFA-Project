/* Model Object for maping Members of Team of Soccer*/
import {RolsModel} from './rols.model';
import {RolTypeModel} from './rol-type.model';

export class MemberModel {
  memberId: number;
  name: string;
  lastName: string;
  nacionality: string;
  birthdate: string;
  photoImg: any;
  headline: boolean;
  shirtNumber: number;
  rolTypeId: number;
  rolId: number;
  teamId: number;
  rol: RolsModel;
  rolType: RolTypeModel;

  constructor(memberId: number = 0,
              name: string = '',
              lastName: string = '',
              nacionality: string = '',
              birthdate: string = '',
              photoImg: any = 'assets/images/noImage.jpg',
              headline: boolean = true,
              shirtNumber: number = null,
              rolTypeId: number = 0,
              rolId:number = 0,
              teamId: number = 0,
              rol: RolsModel = new RolsModel(),
              rolType: RolTypeModel = new RolTypeModel()) {
    this.memberId = memberId;
    this.name = name;
    this.lastName = lastName;
    this.nacionality = nacionality;
    this.birthdate = this.getDate();
    this.photoImg = photoImg;
    this.headline = headline;
    this.shirtNumber = shirtNumber;
    this.rolTypeId = rolTypeId;
    this.rolId = rolId;
    this.teamId = teamId;
    this.rol = rol;
    this.rolType = rolType;
  }

  resetPhotoImg() {
    this.photoImg = 'assets/images/noImage.jpg';
  }

  private getDate() {
    let day, month;
    if (new Date().getMonth() < 10) {
      month = '0' + new Date().getMonth();
    } else {
      month = new Date().getMonth();
    }
    if (new Date().getDay() < 10) {
      day = '0' + new Date().getDay();
    } else {
      day = new Date().getDay();
    }
    return new Date().getFullYear() + '-' + month + '-' + day;
  }
}
