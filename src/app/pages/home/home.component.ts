import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tasks: task[] = [
    {
      title: 'Angular list of prohibited words',
      img:'./../../../assets/image/cenzor.png',
      path: '/works/cenzor'
    },
    {
      title: 'Angular user list',
      img:'./../../../assets/image/userList.png',
      path: '/works/userlist'
    },
    {
      title: 'Angular task list',
      img:'./../../../assets/image/taskList.png',
      path: '/works/tasklist'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

type task = {
  title: string,
  img: string,
  path: string
}