import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { TeamsService } from '../../services/logic/teams.service';
import { MembersService } from '../../services/logic/members.service';
import { TeamModel } from '../../shared/models/team.model';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teamId: number = 0;
  team: TeamModel = new TeamModel();

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private teamsService: TeamsService,
              private membersService: MembersService) {}

  ngOnInit() {
    this.teamId = Number(this.activeRoute.snapshot.paramMap.get('teamId'));
    if (this.teamId !== null) {
      this.getTeam();
    }
  }

  getTeam() {
    this.teamsService.getTeamByIdPipe(this.teamId)
      .subscribe(response => {
          this.team = response;
        }, error => {
          this.router.navigate([`teams/details/`]);
        }
      );
  }

  posTeam() {
    this.teamsService.postTeam(this.team)
      .subscribe( response => {
        this.router.navigate([`teams`]);
      });
  }

  delete() {
    this.deleteMembers();
  }

  deleteMembers() {
    this.membersService.deleteMembers(this.team)
      .subscribe( r => {
        this.deleteTeam();
      });
  }

  deleteTeam() {
    this.teamsService.deleteTeam(this.team)
      .subscribe( r => {
        this.router.navigate([`teams`]);
      });
  }

  updateTeam() {
    this.teamsService.updateTeam(this.team)
      .subscribe( r => {
        this.router.navigate([`teams`]);
      });
  }

  uploadShield(event) {
    this.team.resetShieldImg();
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (eventR) => {
        this.team.shieldImg = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  uploadFlag(event) {
    this.team.resetFlagImg();
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (eventR) => {
        this.team.flagImg = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  clearForm() {
    this.router.navigate([`teams/details`]);
  }

  goMembers() {
    this.router.navigate([`members/search/${this.team.teamId}`]);
  }
}
