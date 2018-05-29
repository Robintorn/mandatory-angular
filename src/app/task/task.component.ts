import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskService} from '../task.service';
import {Subscription} from 'rxjs/Subscription';
import {StatusType} from '../constants';
import {UtilService} from '../util.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task;
  @Output() changedStatus = new EventEmitter();

  constructor(private utilService: UtilService) {}

  statusTypes = this.utilService.getStatusTypes();



  updateTask(newStatus) {
    this.task.status = newStatus;
    this.changedStatus.emit(this.task);

  }
}
