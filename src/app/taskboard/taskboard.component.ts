import { Component } from '@angular/core';
import {UtilService} from '../util.service';
import {StatusType} from '../constants';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  statusTypes = this.utilService.getStatusTypes()

  constructor(private utilService: UtilService) {}
}
