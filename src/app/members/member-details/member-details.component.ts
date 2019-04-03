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

  teamId: number = null;
  team: TeamModel = new TeamModel();
  memberId: number = null;
  rols: RolsModel[];
  rolTypes: RolTypeModel[];
  member: MemberModel = new MemberModel();

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private membersService: MembersService,
              private rolsService: RolsService,
              private rolTypesService: RolTypesService,
              private teamsService: TeamsService) { }

  ngOnInit() {
    this.memberId = Number(this.activeRoute.snapshot.paramMap.get('memberId'));
    this.teamId = Number(this.activeRoute.snapshot.paramMap.get('teamId'));
    if (this.teamId !== null && this.teamId > 0) {
      this.getTeam();
    }
    if (this.memberId !== null && this.memberId > 0) {
      this.getMember();
    }
    this.getRolTypes();
  }

  getTeam() {
    this.teamsService.getTeamByIdPipe(this.teamId)
      .subscribe(response => {
          this.team = response;
        }, error => {
          this.router.navigate([`members/details`]);
        }
      );
  }

  getMember() {
    this.membersService.getMemberById(this.memberId, this.teamId)
      .subscribe( response => {
        this.member = response;
      });
  }

  posMember() {
    this.member.teamId = this.team.teamId;
    this.member.headline = true;
    this.membersService.postMember(this.member)
      .subscribe( response => {
        this.router.navigate([`members/search/${this.teamId}`]);
      });
  }

  deleteMember() {
    this.membersService.deleteMember(this.member)
      .subscribe( r => {
        this.router.navigate([`members/search/${this.teamId}`]);
      });
  }

  updateMember() {
    this.membersService.updateMember(this.member)
      .subscribe( r => {
        this.router.navigate([`members/search/${this.teamId}`]);
      });
  }

  getRolTypes() {
    this.rolTypesService.getAllROleTypes()
      .subscribe( response => {
        this.rolTypes = response;
        this.getRols(this.member.rolTypeId);
      });
  }

  getRols(rolTypeId) {
    this.rolsService.getRolsById(rolTypeId)
      .subscribe( response => {
        this.rols = response;
      });
  }

  uploadPhoto(event) {
    this.member.resetPhotoImg();
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (eventR) => {
        this.member.photoImg = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  clearForm() {
    this.router.navigate([`members/details/${this.teamId}`]);
  }

  goTeam() {
    this.router.navigate([`teams/details/${this.team.teamId}`]);
  }

  goMembers() {
    this.router.navigate([`members/search/${this.team.teamId}`]);
  }
}
