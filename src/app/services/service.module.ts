import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Service of Teams */
import { TeamsService } from './logic/teams.service';
/* Service of Members */
import { MembersService } from './logic/members.service';
/* Service of Roles */
import { RolTypesService } from './logic/rol-types.service';
/* Service of Rol Types */
import { RolsService } from './logic/rols.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TeamsService,
    MembersService,
    RolTypesService,
    RolsService
  ]
})
export class ServicesModule { }
