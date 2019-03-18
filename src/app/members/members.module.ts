import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


/* Main Component of teams */
import { MembersComponent } from './members.component';

/* Module of Routes */
import { AppMembersRoutingModule } from './members-routing.module';

/* Components of Module Teams */
import { MemberSearchComponent } from './member-search/member-search.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

/* Components Shared  */
//...

@NgModule({
  declarations: [
    MembersComponent,
    MemberSearchComponent,
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMembersRoutingModule,
    RouterModule
  ]
})
export class MembersModule { }
