import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Components that to component the main*/
import { NavbarComponent } from './shared/components/navbar/navbar.component';

/* Module of Routes */
import { AppRoutingModule } from './app-routing.module';

/* Modules of Application */
import { TeamsModule } from './teams/teams.module';

/* Main Module of Services */
import { ServicesModule } from './services/service.module';
import { MembersModule } from './members/members.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    AppRoutingModule,
    TeamsModule,
    MembersModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
