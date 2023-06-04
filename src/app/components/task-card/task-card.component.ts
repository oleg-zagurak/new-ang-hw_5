import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
@Input() imgSrc: string = '';
@Input() path: string = '/home';
@Input() title: string = 'unknown'
  constructor() { }

  ngOnInit(): void {
  }

}
