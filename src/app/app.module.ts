import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TabsComponent } from './static/tabs/tabs.component';
import { WorksComponent } from './pages/works/works.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CenzorComponent,
    UserListComponent,
    TaskListComponent,
    TaskCardComponent,
    TabsComponent,
    WorksComponent,
    TasksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
