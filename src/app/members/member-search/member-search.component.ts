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

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  members: MemberModel[];
  rols: RolsModel[];
  rolTypes: RolTypeModel[];
  team: TeamModel;
  teamId: number;

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
    if (this.teamId !== null) {
      this.getTeam();
      this.getMembers();
    }
  }

  getTeam() {
    this.teamsService.getTeamById(this.teamId)
      .subscribe(response => {
          console.log(response);
          this.team = response;
        }, error => {
          console.log(error);
          this.router.navigate([`members`]);
        }
      );
  }

  getMembers() {
    this.membersService.getMemberById(this.teamId)
      .subscribe( response => {
        response.forEach( i => {
          this.rols.forEach( l => {
            if (l.rolId === i.rolId) {
              i.rol = l;
            }
          });
        });
        this.members = response;
        console.log(response);
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
}
