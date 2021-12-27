import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './controls/nav-bar/nav-bar.component';
import { NewStudentFormComponent } from './components/new-student-form/new-student-form.component';
import { TopNavBarComponent } from './controls/top-nav-bar/top-nav-bar.component';
import { AssociationMembershipComponent } from './components/association-membership/association-membership.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewStudentFormComponent,
    TopNavBarComponent,
    AssociationMembershipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'students', component: NewStudentFormComponent},
      {path: 'associations', component: AssociationMembershipComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
