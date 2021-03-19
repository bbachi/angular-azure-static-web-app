import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';
  task: any;

  setTask(task) {
    this.task = task;
  }

  getTask() {
    return this.task;
  }

  getTasks() {
    return this.http.get(this.rootURL + '/todos');
  }

  addTask(task: any) {
    return this.http.post(this.rootURL + '/todos', {task});
  }

  editTask(task: any) {
    return this.http.put(this.rootURL + '/todo', {task});
  }

  deleteTask(taskId: any) {
    console.log('deleting task:::', taskId);
    return this.http.delete(`${this.rootURL}/todo/${taskId}`);
  }

  getSettings(url: string) {
    return this.http.get(this.rootURL + '/' + url);
  }

}
