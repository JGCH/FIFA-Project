import { Routes, RouterModule } from '@angular/router';

import {TeamsComponent} from './teams.component';
import {TeamSearchComponent} from './team-search/team-search.component';
import {TeamDetailsComponent} from './team-details/team-details.component';

const teamsroutes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      {
        path: '',
        component: TeamSearchComponent
      },
      {
        path: 'details',
        component: TeamDetailsComponent
      },
      {
        path: 'details/:teamId',
        component: TeamDetailsComponent
      },
    ]
  }
];

export const AppTeamsRoutingModule = RouterModule.forChild( teamsroutes);
