import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Main Component of teams */
import { TeamsComponent } from './teams.component';

/* Module of Routes */
import { AppTeamsRoutingModule } from './teams-routing.module';

/* Components of Module Teams */
import { TeamSearchComponent } from './team-search/team-search.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

/* Components Shared  */
//...

@NgModule({
  declarations: [
    TeamsComponent,
    TeamSearchComponent,
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppTeamsRoutingModule,
  ]
})
export class TeamsModule { }
