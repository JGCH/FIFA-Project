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
        path: '',
        component: MemberSearchComponent
      },
      {
        path: 'search/:teamId',
        component: MemberSearchComponent
      },
      {
        path: 'details/:teamId',
        component: MemberDetailsComponent
      },
      {
        path: 'details/:memberId/:teamId',
        component: MemberDetailsComponent
      }
    ]
  }
];

export const AppMembersRoutingModule = RouterModule.forChild( membersroutes);
