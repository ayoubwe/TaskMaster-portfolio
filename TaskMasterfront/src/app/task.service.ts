import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private webReqService: WebRequestService) { }

  getLists() {
    return this.webReqService.get('lists');
  }

  getList(id: string) {
    return this.webReqService.get(`lists/${id}`);
  }

  createList(title: string) {
    return this.webReqService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  getTask(listId: string, taskId: string) {
    return this.webReqService.get(`lists/${listId}/tasks/${taskId}`);
  }

  createTask(title: string, listId: string) {
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
