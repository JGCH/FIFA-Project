import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { MembersService } from '../../services/logic/members.service';
import { RolsService } from '../../services/logic/rols.service';
import { RolTypesService } from '../../services/logic/rol-types.service';
import { TeamsService } from '../../services/logic/teams.service';
import { MemberModel } from '../../shared/models/member.model';
import { RolsModel } from '../../shared/models/rols.model';
import { RolTypeModel } from '../../shared/models/rol-type.model';
import { TeamModel } from '../../shared/models/team.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  state = null;
  memberId: number = null;
  teamId: number = null;
  mode: boolean = false;
  rols: RolsModel[];
  rolTypes: RolTypeModel[];
  team: TeamModel = {
    teamId: 0,
    name: '',
    shieldImg: null,
    flagImg: null,
  };
  member: MemberModel = {
    memberId: 0,
    name: '',
    lastName: '',
    nacionality: '',
    birthdate: new Date(),
    photoImg: '',
    rolId: 0,
    headline: false,
    shirtNumber: 0,
    rol: null,
    teamId: 0
  }

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private membersService: MembersService,
              private rolsService: RolsService,
              private rolTypesService: RolTypesService,
              private teamsService: TeamsService) { }

  ngOnInit() {
    this.getRolTypes();
    this.getRols();
    this.memberId = Number(this.activeRoute.snapshot.paramMap.get('memberId'));
    this.teamId = Number(this.activeRoute.snapshot.paramMap.get('teamId'));
    if (this.teamId !== null && this.teamId > 0) {
      this.getTeam();
    }
    if (this.memberId !== null && this.memberId > 0) {
      this.getMember();
    }
  }

  uploadPhoto() {

  }

  getTeam() {
    this.teamsService.getTeamById(this.teamId)
      .subscribe(response => {
          console.log(response);
          this.team = response;
        }, error => {
          console.log(error);
          this.router.navigate([`members/details`]);
        }
      );
  }

  getMember() {
    this.membersService.getMemberById(this.memberId, this.teamId)
      .subscribe( response => {
        console.log(response);
        this.member = response;
        this.mode = true;
      });
  }

  getRols() {
    this.rolsService.getAllRols()
      .subscribe( response => {
        response.forEach( i => {
          this.rolTypes.forEach( l => {
            if (l.rolTypeId === i.rolTypeId) {
              i.rolTypeName = l.name;
            }
          });
        });
        this.rols = response;
        console.log(response);
      });
  }

  getRolTypes() {
    this.rolTypesService.getAllROleTypes()
      .subscribe( response => {
        this.rolTypes = response;
        console.log(response);
      });
  }

  posMember() {
    this.member.teamId = this.team.teamId;
    this.member.headline = true
    this.membersService.postMember(this.member)
      .subscribe( response => {
        console.log(response);
      });
  }

  clearForm() {
    this.router.navigate([`members/details/${this.teamId}`]);
  }

}
