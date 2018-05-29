import {Component, EventEmitter, Output} from '@angular/core';
import {TaskService} from '../task.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {

  subscription = Subscription;

  @Output() taskAdded = new EventEmitter();

  constructor(private taskService: TaskService) {}

  addTask (form) {
    this.taskService.addTask(form.title, form.description);
    this.taskAdded.emit(true);
  }
}
