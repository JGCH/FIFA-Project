import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { TeamsService } from '../../services/logic/teams.service';
import { TeamModel } from '../../shared/models/team.model';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teamId: number = 0;
  team: TeamModel = {
    teamId: 0,
    name: '',
    flagImg: null,
    shieldImg: null
  };


  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private teamsService: TeamsService) {}

  ngOnInit() {
    this.teamId = Number(this.activeRoute.snapshot.paramMap.get('teamId'));
    if (this.teamId !== null) {
      this.getTeam();
    }
  }

  getTeam() {
    this.teamsService.getTeamById(this.teamId)
      .subscribe(response => {
          console.log(response);
          this.team = response;
        }, error => {
          console.log(error);
          this.router.navigate([`teams/details/`]);
        }
      );
  }

  posTeam() {
    this.teamsService.postTeam(this.team)
      .subscribe( response => {
        console.log(response);
        this.router.navigate([`teams/details/${{response}}`]);
      });
  }

  selectMembers() {
    this.router.navigate([`members/${this.team.teamId}`]);
  }

  uploadShield($event) {
    let files = $event.srcElement.files;
    let src = window.URL.createObjectURL(files[0]);
    console.log('Subiendo Escudo');
    console.log($event);
    console.log(files);
    console.log(src);
    this.team.shieldImg = src;
  }

  uploadFlag($event) {
    console.log('Subiendo Bandera');
    console.log($event);
  }

  clearForm() {
    this.router.navigate([`teams/details/`]);
  }

}
