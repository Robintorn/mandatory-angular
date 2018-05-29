import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TaskService} from '../task.service';
import {StatusType} from '../constants';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnDestroy {
  @Input() statusType;

  taskList;
  subscription: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.subscription = this.taskService.getTasks(this.statusType)
      .subscribe(tasks => {
        this.taskList = tasks;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateTask (task) {
      this.taskService.updateTask(task.id, task.status);
  }

}
