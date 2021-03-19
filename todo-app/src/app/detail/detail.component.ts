import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  task: any;

  ngOnInit(): void {

    this.task = JSON.parse(localStorage.getItem('task'));
  }

}
