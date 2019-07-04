import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatTableModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import {ProjectComponent} from './project/project.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {LoginComponent} from './login/login.component';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {GroupAddComponent} from './group-add/group-add.component';
import {GroupsComponent} from './groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectAddComponent,
    LoginComponent,
    GroupAddComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
