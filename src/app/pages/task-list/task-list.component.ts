import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor() { }
  public task!: Task;
  public amount!: number;
  ngOnInit(): void {
  }

  createTask(name: string): void {
    if (name.trim()) {
      this.task = new Task(name);
    }
  }
  setAmount(amount: number): void {
    this.amount = amount;
  }
}

export class Task {
  private name !: string
  private static inprogress = "In PROGRESS"
  private static done = "DONE"
  private status = false;
  constructor(name: string, checked: boolean = false) {
    this.name = name;
    if (checked) this.setTaskStatus()
  }
  set taskName(name: string) {
    this.name = name;
  }
  get taskName(): string {
    return this.name
  }
  get taskProgress(): string {
    if (this.status) {
      return Task.done
    } else {
      return Task.inprogress
    }
  }
  get taskStatus(): boolean {
    return this.status
  }
  setTaskStatus() {
    this.status = !this.status;
  }
}