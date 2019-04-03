/* Model Object for maping Teams of Soccer*/
import {MemberModel} from './member.model';
import {Observable} from 'rxjs';

export class TeamModel {
  public teamId: number;
  public name: string;
  public shieldImg: any;
  public flagImg: any;

  constructor(teamId: number = 0,
              name: string = '',
              shieldImg: any = 'assets/images/noImage.jpg',
              flagImg: any = 'assets/images/noImage.jpg') {
    this.teamId = teamId;
    this.name = name;
    this.shieldImg = shieldImg;
    this.flagImg = flagImg;
  }

  public resetShieldImg() {
    this.shieldImg = 'assets/images/noImage.jpg';
  }

  public resetFlagImg() {
    this.flagImg = 'assets/images/noImage.jpg';
  }
}
