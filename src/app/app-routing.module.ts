import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    {path: 'cenzor', component: CenzorComponent},
    {path: 'userlist', component: UserListComponent},
    {path: 'tasklist', component: TaskListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
