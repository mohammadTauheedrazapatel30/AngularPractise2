import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // For Sharing Data from parent i.e. App to child i.e. home
  @Input() item = '';
  
  @Input() items :any[] = [];

  @Output() event = new EventEmitter<string>();

  onClick() {
    this.event.emit("This is Using Angular 14 !");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
