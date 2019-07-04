import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';

// conponents
import {ProjectComponent} from './project/project.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {LoginComponent} from './login/login.component';
import {GroupsComponent} from './groups/groups.component';
import {GroupAddComponent } from './group-add/group-add.component';


const Route = [
  {path: 'login', component: LoginComponent},
  {path: 'groups/add', component: GroupAddComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'project/add', component: ProjectAddComponent},
  {path: 'project', component: ProjectComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Route)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
