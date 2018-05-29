import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';

export class TaskService {

  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  taskId = 0;
  tasks = [];

  private subject = new BehaviorSubject(this.tasks);

  getTasks(status: StatusType): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return this.subject.asObservable()
      .map(tasks => tasks.filter(task => task.status === status));
  }

  updateTask(id: number, status: StatusType) {
    const taskIndex = this.tasks.findIndex(i => i.id === id);
    this.tasks[taskIndex].status = status;
    this.updateSubscribers();
  }

  addTask(title: string, description: string) {
    this.tasks.push({
      id: this.taskId++,
      status: StatusType.NotStarted,
      title: title,
      description: description
    });

    this.updateSubscribers();
  }

  updateSubscribers() {
    this.subject.next(this.tasks);
  }
}
