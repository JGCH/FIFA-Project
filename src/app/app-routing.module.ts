import { Routes, RouterModule } from '@angular/router';
import { TeamsModule } from './teams/teams.module';
import { MembersModule } from './members/members.module';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsModule
  },
  /*{
    path: 'members',
    component: MembersModule
  },*/
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
];

export const AppRoutingModule = RouterModule.forRoot( routes, { useHash: true } );
