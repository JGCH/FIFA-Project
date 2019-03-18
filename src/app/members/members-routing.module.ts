import { Routes, RouterModule } from '@angular/router';

import {MembersComponent} from './members.component';
import {MemberSearchComponent} from './member-search/member-search.component';
import {MemberDetailsComponent} from './member-details/member-details.component';

const membersroutes: Routes = [
  {
    path: 'members',
    component: MembersComponent,
    children: [
      {
        path: 'search',
        component: MemberSearchComponent
      },
      {
        path: 'search/:teamId',
        component: MemberSearchComponent
      },
      {
        path: 'details',
        component: MemberDetailsComponent
      }
    ]
  }
];

export const AppMembersRoutingModule = RouterModule.forChild( membersroutes);
