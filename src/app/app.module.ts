import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { UtilService } from './util.service';
import { TaskformComponent } from './taskform/taskform.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent,
    TasklistComponent,
    TaskComponent,
    TaskformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
