import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MembersService } from '../../services/logic/members.service';
import { RolsService } from '../../services/logic/rols.service';
import { RolTypesService } from '../../services/logic/rol-types.service';
import { TeamsService } from '../../services/logic/teams.service';
import { MemberModel } from '../../shared/models/member.model';
import { RolsModel } from '../../shared/models/rols.model';
import { RolTypeModel } from '../../shared/models/rol-type.model';
import { TeamModel } from '../../shared/models/team.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  teamId: number = 0;
  team: TeamModel = new TeamModel();
  totalPlayerAverage: Observable<number>;
  members: MemberModel[] = [];
  rols: RolsModel[];
  rolTypes: RolTypeModel[];

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private membersService: MembersService,
              private rolsService: RolsService,
              private rolTypesService: RolTypesService,
              private teamsService: TeamsService) { }

  ngOnInit() {
    this.getRolTypes();
    this.getRols();
    this.teamId = Number(this.activeRoute.snapshot.paramMap.get('teamId'));
    if (this.teamId !== null && this.teamId > 0) {
      this.getTeam();
      this.getMembers();
    }
    //this.getTotalPlayerAverage();
  }

  getTeam() {
    this.teamsService.getTeamByIdPipe(this.teamId)
      .subscribe(response => {
          this.team = response;
        }, error => {
          console.log(error);
          this.router.navigate([`members`]);
        }
      );
  }

  getMembers() {
    this.membersService.getMembersById(this.teamId)
      .subscribe( response => {
        /*this.rolTypes.forEach( l => {
          if (l.rolTypeId === response.rolTypeId) {
            response.rolType = l;
          }
        });
        this.rols.forEach( l => {
          if (l.rolId === response.rolId) {
            response.rol = l;
          }
        });
        this.members.push(response);*/

        response.forEach( i => {
          this.rolTypes.forEach( l => {
            if (l.rolTypeId === i.rolTypeId) {
              i.rolType = l;
            }
          });
        });
        response.forEach( i => {
          this.rols.forEach( l => {
            if (l.rolId === i.rolId) {
              i.rol = l;
            }
          });
        });
        this.members = response;
      });
  }

  getRolTypes() {
    this.rolTypesService.getAllROleTypes()
      .subscribe( response => {
        this.rolTypes = response;
      });
  }

  getRols() {
    this.rolsService.getAllRols()
      .subscribe( response => {
        this.rols = response;
      });
  }

  /*getTotalPlayerAverage() {
    this.totalPlayerAverage = this.membersService.getTotalPlayerAverage(this.team.teamId);
  }*/

  /* Go to watch Team of the member */
  goTeam() {
    this.router.navigate([`teams/details/${this.team.teamId}`]);
  }

  /* Go to watch Member selected */
  goMember(memberId) {
    this.router.navigate([`members/details/${memberId}/${this.team.teamId}`]);
  }

  /* Create new Member for team selected */
  newMember() {
    this.router.navigate([`members/details/${this.team.teamId}`]);
  }
}
