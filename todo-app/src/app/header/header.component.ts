import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input()
  settings: any;

  headerColor: any;
  headerTitleColor: any;

  ngOnInit(): void {
    this.headerColor = this.settings.headerColor;
    this.headerTitleColor = this.settings.headerTitleColor;
  }

}
